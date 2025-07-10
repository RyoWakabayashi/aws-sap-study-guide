#!/usr/bin/env node

/**
 * 問題データの検証スクリプト
 * - 問題データの構造チェック
 * - 重複IDの検出
 * - 必須フィールドの確認
 * - 選択肢数の確認
 * - 正解インデックスの妥当性チェック
 */

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

// 問題データファイルを読み込み
const questionsPath = path.join(__dirname, '../questions.js')

if (!fs.existsSync(questionsPath)) {
  console.error(chalk.red('❌ questions.js file not found'))
  process.exit(1)
}

// questions.jsファイルを評価して問題データを取得
const questionsContent = fs
  .readFileSync(questionsPath, 'utf8')
  .replace(/const allQuestions = /, 'allQuestions = ')

// グローバル変数として問題データを定義
let allQuestions

try {
  // eslint-disable-next-line no-eval
  eval(questionsContent)
} catch (error) {
  console.error(chalk.red('❌ Error parsing questions.js:'), error.message)
  process.exit(1)
}

if (!allQuestions || !Array.isArray(allQuestions)) {
  console.error(chalk.red('❌ allQuestions is not defined or not an array'))
  process.exit(1)
}

console.log(chalk.blue('🔍 Validating quiz questions...'))
console.log(chalk.gray(`Total questions: ${allQuestions.length}`))

let errors = 0
let warnings = 0

// 必須フィールドの定義
const requiredFields = [
  'id',
  'category',
  'question',
  'options',
  'correct',
  'explanation'
]

// IDの重複チェック用
const usedIds = new Set()

// カテゴリ別統計
const categoryStats = {}

allQuestions.forEach((question, index) => {
  const questionNum = index + 1
  let hasError = false

  // 必須フィールドのチェック
  requiredFields.forEach((field) => {
    if (!(field in question)) {
      console.error(
        chalk.red(
          `❌ Question ${questionNum}: Missing required field '${field}'`
        )
      )
      errors++
      hasError = true
    }
  })

  if (hasError) return

  // IDの型と重複チェック
  if (typeof question.id !== 'string') {
    console.error(
      chalk.red(
        `❌ Question ${questionNum}: ID must be a string, got ${typeof question.id}`
      )
    )
    errors++
  } else if (usedIds.has(question.id)) {
    console.error(
      chalk.red(`❌ Question ${questionNum}: Duplicate ID ${question.id}`)
    )
    errors++
  } else {
    usedIds.add(question.id)

    // ID形式チェック（category-number形式）
    const idPattern = /^[a-z-]+-\d+$/
    if (!idPattern.test(question.id)) {
      console.warn(
        chalk.yellow(
          `⚠️  Question ${questionNum}: ID should follow 'category-number' format, got '${question.id}'`
        )
      )
      warnings++
    }
  }

  // カテゴリのチェック
  if (
    typeof question.category !== 'string' ||
    question.category.trim() === ''
  ) {
    console.error(
      chalk.red(
        `❌ Question ${questionNum}: Category must be a non-empty string`
      )
    )
    errors++
  } else {
    categoryStats[question.category] =
      (categoryStats[question.category] || 0) + 1
  }

  // 問題文のチェック
  if (
    typeof question.question !== 'string' ||
    question.question.trim() === ''
  ) {
    console.error(
      chalk.red(
        `❌ Question ${questionNum}: Question text must be a non-empty string`
      )
    )
    errors++
  }

  // 選択肢のチェック
  if (!Array.isArray(question.options)) {
    console.error(
      chalk.red(`❌ Question ${questionNum}: Options must be an array`)
    )
    errors++
  } else if (!question.multipleChoice && question.options.length !== 4) {
    console.error(
      chalk.red(
        `❌ Question ${questionNum}: Must have exactly 4 options, got ${question.options.length}`
      )
    )
    errors++
  } else if (question.multipleChoice && question.options.length !== 6) {
    console.error(
      chalk.red(
        `❌ Question ${questionNum}: Must have exactly 6 options for multiple choice, got ${question.options.length}`
      )
    )
    errors++
  } else {
    question.options.forEach((option, optionIndex) => {
      if (typeof option !== 'string' || option.trim() === '') {
        console.error(
          chalk.red(
            `❌ Question ${questionNum}: Option ${
              optionIndex + 1
            } must be a non-empty string`
          )
        )
        errors++
      }
    })
  }

  // 正解インデックスのチェック
  if (question.multipleChoice) {
    // 複数選択問題の場合
    if (!Array.isArray(question.correct) || question.correct.length === 0) {
      console.error(
        chalk.red(
          `❌ Question ${questionNum}: Multiple choice question must have 'correct' as a non-empty array`
        )
      )
      errors++
    } else {
      question.correct.forEach((index, idx) => {
        if (typeof index !== 'number' || index < 0 || index > 5) {
          console.error(
            chalk.red(
              `❌ Question ${questionNum}: Correct answer index at position ${
                idx + 1
              } must be a number between 0 and 3, got ${index}`
            )
          )
          errors++
        }
      })
    }
  } else {
    // 単一選択問題の場合
    if (typeof question.correct !== 'number') {
      console.error(
        chalk.red(
          `❌ Question ${questionNum}: Correct answer index must be a number`
        )
      )
      errors++
    } else if (question.correct < 0 || question.correct > 3) {
      console.error(
        chalk.red(
          `❌ Question ${questionNum}: Correct answer index must be between 0 and 3, got ${question.correct}`
        )
      )
      errors++
    }
  }

  // 解説のチェック
  if (
    typeof question.explanation !== 'string' ||
    question.explanation.trim() === ''
  ) {
    console.error(
      chalk.red(
        `❌ Question ${questionNum}: Explanation must be a non-empty string`
      )
    )
    errors++
  }

  // 警告レベルのチェック
  if (question.question.length < 20) {
    console.warn(
      chalk.yellow(
        `⚠️  Question ${questionNum}: Question text seems too short (${question.question.length} chars)`
      )
    )
    warnings++
  }

  if (question.explanation.length < 30) {
    console.warn(
      chalk.yellow(
        `⚠️  Question ${questionNum}: Explanation seems too short (${question.explanation.length} chars)`
      )
    )
    warnings++
  }
})

// 結果の表示
console.log('\n' + chalk.blue('📊 Validation Summary:'))
console.log(chalk.gray('─'.repeat(50)))

if (errors === 0 && warnings === 0) {
  console.log(chalk.green('✅ All questions are valid!'))
} else {
  if (errors > 0) {
    console.log(chalk.red(`❌ ${errors} error(s) found`))
  }
  if (warnings > 0) {
    console.log(chalk.yellow(`⚠️  ${warnings} warning(s) found`))
  }
}

console.log(chalk.gray(`📝 Total questions: ${allQuestions.length}`))
console.log(chalk.gray(`🏷️  Categories: ${Object.keys(categoryStats).length}`))

// カテゴリ別統計の表示
console.log('\n' + chalk.blue('📈 Questions by Category:'))
Object.entries(categoryStats)
  .sort(([, a], [, b]) => b - a)
  .forEach(([category, count]) => {
    const percentage = ((count / allQuestions.length) * 100).toFixed(1)
    console.log(chalk.gray(`  ${category}: ${count} (${percentage}%)`))
  })

// 推奨事項
if (allQuestions.length < 100) {
  console.log(
    chalk.yellow(
      `\n💡 Recommendation: Consider adding more questions (current: ${allQuestions.length}, recommended: 100+)`
    )
  )
}

const minQuestionsPerCategory = 5
const lowCategories = Object.entries(categoryStats)
  .filter(([, count]) => count < minQuestionsPerCategory)
  .map(([category]) => category)

if (lowCategories.length > 0) {
  console.log(
    chalk.yellow(
      `\n💡 Categories with few questions (< ${minQuestionsPerCategory}): ${lowCategories.join(
        ', '
      )}`
    )
  )
}

// 終了コード
if (errors > 0) {
  console.log(chalk.red('\n❌ Validation failed'))
  process.exit(1)
} else {
  console.log(chalk.green('\n✅ Validation passed'))
  process.exit(0)
}
