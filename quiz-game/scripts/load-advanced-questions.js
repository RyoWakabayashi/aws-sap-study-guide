#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('📚 Loading and combining advanced question files...')

// 上級編問題ファイルのリスト
const advancedQuestionFiles = [
  'computing.js',
  'storage.js',
  'database.js',
  'networking.js',
  'security.js',
  'monitoring.js',
  'analytics.js',
  'architecture.js',
  'cost-optimization.js',
  'disaster-recovery.js',
  'integration.js',
  'management.js',
  'migration.js',
  'operations.js',
  'use-cases.js'
]

const questionsDir = path.join(__dirname, '..', 'questions-advanced')
const outputFile = path.join(__dirname, '..', 'questions-advanced.js')

let allAdvancedQuestions = []
const categoryStats = {}

// 各ファイルから問題を読み込み
advancedQuestionFiles.forEach((file) => {
  const filePath = path.join(questionsDir, file)

  if (fs.existsSync(filePath)) {
    try {
      // require を使用してファイルを読み込み
      delete require.cache[require.resolve(filePath)]
      const questions = require(filePath)

      if (Array.isArray(questions) && questions.length > 0) {
        allAdvancedQuestions = allAdvancedQuestions.concat(questions)

        // カテゴリ別統計を収集
        questions.forEach((q) => {
          if (!categoryStats[q.category]) {
            categoryStats[q.category] = 0
          }
          categoryStats[q.category]++
        })

        console.log(`✅ ${file}: ${questions.length} questions`)
      } else {
        console.log(`⚠️ ${file}: No valid questions found`)
      }
    } catch (error) {
      console.error(`❌ Error loading ${file}:`, error.message)
    }
  } else {
    console.log(`⚠️ ${file}: File not found`)
  }
})

// 統合ファイルを生成
const outputContent = `// AWS Solution Architect Professional 上級編 - 統合問題ファイル
// このファイルは自動生成されます。直接編集しないでください。

const allAdvancedQuestions = ${JSON.stringify(allAdvancedQuestions, null, 2)}

// 上級編問題をグローバル変数として設定
if (typeof window !== 'undefined') {
  window.allAdvancedQuestions = allAdvancedQuestions
} else if (typeof global !== 'undefined') {
  global.allAdvancedQuestions = allAdvancedQuestions
}

// Node.js環境での使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = allAdvancedQuestions
}
`

try {
  fs.writeFileSync(outputFile, outputContent, 'utf8')
  console.log('\n📊 Advanced Question Loading Summary:')
  console.log('──────────────────────────────────────────────────')
  console.log(
    `✅ Total advanced questions loaded: ${allAdvancedQuestions.length}`
  )
  console.log(`✅ Categories: ${Object.keys(categoryStats).length}`)

  console.log('\n📈 Advanced Questions by Category:')
  Object.entries(categoryStats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      const percentage = ((count / allAdvancedQuestions.length) * 100).toFixed(
        1
      )
      console.log(`  ${category}: ${count} (${percentage}%)`)
    })

  console.log('\n✅ Combined questions-advanced.js generated successfully!')
  console.log(`📁 Output: ${outputFile}`)

  // 問題の検証
  console.log('\n🔍 Validating advanced questions...')
  let validationErrors = 0

  allAdvancedQuestions.forEach((question, index) => {
    // 必須フィールドの検証
    const requiredFields = [
      'id',
      'category',
      'question',
      'options',
      'correct',
      'explanation'
    ]
    const missingFields = requiredFields.filter((field) => {
      if (field === 'correct') {
        if (question.multipleChoice) {
          return (
            !Array.isArray(question.correct) || question.correct.length === 0
          )
        }
        return typeof question[field] !== 'number'
      }
      return !question[field]
    })

    if (missingFields.length > 0) {
      console.error(
        `❌ Question ${index + 1} (${
          question.id || 'no ID'
        }): Missing fields: ${missingFields.join(', ')}`
      )
      console.error('   Question data:', JSON.stringify(question, null, 2))
      validationErrors++
    }

    // 選択肢の検証
    if (question.options && Array.isArray(question.options)) {
      if (question.options.length < 2) {
        console.error(
          `❌ Question ${index + 1} (${question.id}): Not enough options`
        )
        validationErrors++
      }

      // correctフィールドの検証（単一選択と複数選択に対応）
      if (question.multipleChoice) {
        // 複数選択問題の場合
        if (!Array.isArray(question.correct) || question.correct.length === 0) {
          console.error(
            `❌ Question ${index + 1} (${
              question.id
            }): Multiple choice question must have correct as non-empty array`
          )
          validationErrors++
        } else {
          // 各インデックスが有効範囲内かチェック
          const invalidIndices = question.correct.filter(
            (idx) =>
              typeof idx !== 'number' ||
              idx < 0 ||
              idx >= question.options.length
          )
          if (invalidIndices.length > 0) {
            console.error(
              `❌ Question ${index + 1} (${
                question.id
              }): Invalid correct answer indices: ${invalidIndices}`
            )
            validationErrors++
          }
        }
      } else {
        // 単一選択問題の場合
        if (
          typeof question.correct !== 'number' ||
          question.correct < 0 ||
          question.correct >= question.options.length
        ) {
          console.error(
            `❌ Question ${index + 1} (${
              question.id
            }): Invalid correct answer index`
          )
          validationErrors++
        }
      }
    }

    // IDの重複チェック
    const duplicateIds = allAdvancedQuestions.filter(
      (q) => q.id === question.id
    )
    if (duplicateIds.length > 1) {
      console.error(`❌ Question ${index + 1}: Duplicate ID: ${question.id}`)
      validationErrors++
    }
  })

  if (validationErrors === 0) {
    console.log('✅ All advanced questions validated successfully!')
  } else {
    console.error(`❌ Found ${validationErrors} validation errors`)
    process.exit(1)
  }
} catch (error) {
  console.error('❌ Error writing combined file:', error.message)
  process.exit(1)
}
