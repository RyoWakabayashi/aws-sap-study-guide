#!/usr/bin/env node

/**
 * フラッシュカードエクスポートスクリプト
 * questions.js / questions-advanced.js の全問題を、
 * スキマ時間の間隔反復学習に使えるCSV / Anki向けTSV形式で出力する。
 *
 * 出力先: quiz-game/export/
 *   - flashcards.csv         : 表計算ソフトで閲覧・編集できる完全なデータ
 *   - flashcards-anki.txt    : Anki の「ファイルからインポート」機能でそのまま取り込めるTSV
 */

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const outputDir = path.join(__dirname, '..', 'export')
const csvPath = path.join(outputDir, 'flashcards.csv')
const ankiPath = path.join(outputDir, 'flashcards-anki.txt')

function loadQuestions (relativePath) {
  const filePath = path.join(__dirname, '..', relativePath)
  if (!fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠️  ${relativePath} が見つかりません。先に npm run load-questions / load-advanced-questions を実行してください。`))
    return []
  }

  const content = fs.readFileSync(filePath, 'utf8')

  if (relativePath === 'questions-advanced.js') {
    // questions-advanced.js は module.exports 形式
    delete require.cache[require.resolve(filePath)]
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(filePath)
  }

  // questions.js は `const allQuestions = [...]` 形式。
  // 独立したファンクションスコープで実行し、allQuestionsを返す。
  // eslint-disable-next-line no-new-func
  const getAllQuestions = new Function(`${content}\nreturn allQuestions;`)
  return getAllQuestions() || []
}

function optionLabel (index) {
  return String.fromCharCode(65 + index) // A, B, C, D, E, F...
}

function formatOptionsPlain (question) {
  return question.options
    .map((opt, idx) => `${optionLabel(idx)}. ${opt}`)
    .join('\n')
}

function formatCorrectAnswer (question) {
  const correctIndexes = Array.isArray(question.correct) ? question.correct : [question.correct]
  return correctIndexes
    .map((idx) => `${optionLabel(idx)}. ${question.options[idx]}`)
    .join('\n')
}

// CSV / TSVフィールドのエスケープ（ダブルクォートで囲み、内部の改行・カンマ・クォートに対応）
function escapeField (value, delimiter) {
  const str = String(value == null ? '' : value).replace(/\r\n/g, '\n')
  if (delimiter === '\t') {
    // Anki TSVでは改行・タブをHTMLの<br>やスペースに置換する
    return str.replace(/\t/g, ' ').replace(/\n/g, '<br>')
  }
  const escaped = str.replace(/"/g, '""')
  return `"${escaped}"`
}

function buildCsvRow (fields, delimiter) {
  return fields.map((f) => escapeField(f, delimiter)).join(delimiter) + (delimiter === '\t' ? '\n' : '\r\n')
}

console.log(chalk.blue('📚 Exporting flashcards...'))

const basicQuestions = loadQuestions('questions.js')
const advancedQuestions = loadQuestions('questions-advanced.js')
const allQuestions = [...basicQuestions, ...advancedQuestions]

if (allQuestions.length === 0) {
  console.error(chalk.red('❌ 出力対象の問題データが見つかりませんでした。'))
  process.exit(1)
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// --- CSV（完全なデータ、表計算ソフト・独自ツール向け） ---
let csvContent = buildCsvRow(
  ['id', 'category', 'type', 'question', 'options', 'correct_answer', 'explanation'],
  ','
)

allQuestions.forEach((q) => {
  csvContent += buildCsvRow(
    [
      q.id,
      q.category,
      q.multipleChoice ? 'multiple' : 'single',
      q.question,
      formatOptionsPlain(q),
      formatCorrectAnswer(q),
      q.explanation
    ],
    ','
  )
})

fs.writeFileSync(csvPath, csvContent, 'utf8')
console.log(chalk.green(`✅ CSV出力: ${csvPath}`))

// --- Anki向けTSV（Front / Back の2列。Ankiの「ファイルからインポート」で取り込み可能） ---
let ankiContent = ''
ankiContent += '#separator:tab\n'
ankiContent += '#html:true\n'
ankiContent += '#columns:Front\tBack\n'

allQuestions.forEach((q) => {
  const front = [
    `[${q.category}] ${q.id}`,
    '',
    q.question,
    '',
    formatOptionsPlain(q)
  ].join('\n')

  const back = [
    '正解:',
    formatCorrectAnswer(q),
    '',
    '解説:',
    q.explanation
  ].join('\n')

  ankiContent += buildCsvRow([front, back], '\t')
})

fs.writeFileSync(ankiPath, ankiContent, 'utf8')
console.log(chalk.green(`✅ Anki用TSV出力: ${ankiPath}`))

console.log('\n' + chalk.blue('📊 Export Summary:'))
console.log(chalk.gray('─'.repeat(50)))
console.log(chalk.gray(`  基礎編: ${basicQuestions.length}問`))
console.log(chalk.gray(`  上級編: ${advancedQuestions.length}問`))
console.log(chalk.gray(`  合計: ${allQuestions.length}問`))
console.log('\n' + chalk.blue('📥 Ankiへの取り込み方法:'))
console.log(chalk.gray('  1. Ankiを開き「ファイル」→「インポート」を選択'))
console.log(chalk.gray(`  2. ${path.basename(ankiPath)} を選択`))
console.log(chalk.gray('  3. フィールド区切り文字が「タブ」になっていることを確認してインポート'))
