#!/usr/bin/env node

/**
 * テストランナー
 * - 問題データのテスト
 * - JavaScriptファイルの構文チェック
 * - 基本的な機能テスト
 */

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { JSDOM } = require('jsdom')

console.log(chalk.blue('🧪 Running AWS SAP Quiz Game Tests...'))

let testsPassed = 0
let testsFailed = 0

function test (description, testFn) {
  try {
    testFn()
    console.log(chalk.green(`✅ ${description}`))
    testsPassed++
  } catch (error) {
    console.log(chalk.red(`❌ ${description}`))
    console.log(chalk.red(`   Error: ${error.message}`))
    testsFailed++
  }
}

function assert (condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed')
  }
}

// ファイル存在チェック
const requiredFiles = [
  'index.html',
  'styles.css',
  'script.js',
  'questions.js',
  'manifest.json',
  'sw.js'
]

requiredFiles.forEach((file) => {
  test(`File exists: ${file}`, () => {
    const filePath = path.join(__dirname, '..', file)
    assert(fs.existsSync(filePath), `File ${file} does not exist`)
  })
})

// HTML構造テスト
test('HTML structure is valid', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html')
  const htmlContent = fs.readFileSync(htmlPath, 'utf8')
  const dom = new JSDOM(htmlContent)
  const document = dom.window.document

  // 必要な要素の存在チェック
  const requiredElements = [
    '#start-screen',
    '#quiz-screen',
    '#result-screen',
    '#review-screen',
    '#start-btn',
    '#next-btn',
    '#question-text',
    '#options-container'
  ]

  requiredElements.forEach((selector) => {
    const element = document.querySelector(selector)
    assert(element, `Required element not found: ${selector}`)
  })
})

// 問題データテスト
test('Questions data is valid', () => {
  const questionsPath = path.join(__dirname, '..', 'questions.js')
  const questionsContent = fs
    .readFileSync(questionsPath, 'utf8')
    .replace(/const allQuestions = /, 'allQuestions = ')

  // グローバル変数として問題データを定義
  let allQuestions

  // eslint-disable-next-line no-eval
  eval(questionsContent)

  assert(Array.isArray(allQuestions), 'allQuestions must be an array')
  assert(allQuestions.length > 0, 'allQuestions must not be empty')
  assert(allQuestions.length >= 50, 'Should have at least 50 questions')

  // 各問題の構造チェック
  allQuestions.forEach((question, index) => {
    assert(
      typeof question.id === 'number',
      `Question ${index + 1}: id must be a number`
    )
    assert(
      typeof question.category === 'string',
      `Question ${index + 1}: category must be a string`
    )
    assert(
      typeof question.question === 'string',
      `Question ${index + 1}: question must be a string`
    )
    assert(
      Array.isArray(question.options),
      `Question ${index + 1}: options must be an array`
    )
    assert(
      question.options.length === 4,
      `Question ${index + 1}: must have 4 options`
    )
    assert(
      typeof question.correct === 'number',
      `Question ${index + 1}: correct must be a number`
    )
    assert(
      question.correct >= 0 && question.correct <= 3,
      `Question ${index + 1}: correct must be 0-3`
    )
    assert(
      typeof question.explanation === 'string',
      `Question ${index + 1}: explanation must be a string`
    )
  })
})

// JavaScript構文チェック
test('JavaScript files are syntactically valid', () => {
  const jsFiles = ['script.js', 'questions.js']

  jsFiles.forEach((file) => {
    const filePath = path.join(__dirname, '..', file)
    const content = fs.readFileSync(filePath, 'utf8')

    try {
      // 構文チェック（実行はしない）
      // eslint-disable-next-line no-new,no-new-func
      new Function(content)
    } catch (error) {
      throw new Error(`Syntax error in ${file}: ${error.message}`)
    }
  })
})

// CSS構文チェック
test('CSS file is valid', () => {
  const cssPath = path.join(__dirname, '..', 'styles.css')
  const cssContent = fs.readFileSync(cssPath, 'utf8')

  // 基本的なCSS構文チェック
  const braceCount =
    (cssContent.match(/{/g) || []).length -
    (cssContent.match(/}/g) || []).length
  assert(braceCount === 0, 'CSS braces are not balanced')

  // 必要なクラスの存在チェック
  const requiredClasses = [
    '.container',
    '.screen',
    '.btn',
    '.option',
    '.quiz-header'
  ]
  requiredClasses.forEach((className) => {
    assert(cssContent.includes(className), `CSS class ${className} not found`)
  })
})

// マニフェストファイルテスト
test('PWA manifest is valid', () => {
  const manifestPath = path.join(__dirname, '..', 'manifest.json')
  const manifestContent = fs.readFileSync(manifestPath, 'utf8')

  let manifest
  try {
    manifest = JSON.parse(manifestContent)
  } catch (error) {
    throw new Error('Manifest is not valid JSON')
  }

  assert(manifest.name, 'Manifest must have a name')
  assert(manifest.short_name, 'Manifest must have a short_name')
  assert(manifest.start_url, 'Manifest must have a start_url')
  assert(Array.isArray(manifest.icons), 'Manifest must have icons array')
})

// Service Worker テスト
test('Service Worker is valid', () => {
  const swPath = path.join(__dirname, '..', 'sw.js')
  const swContent = fs.readFileSync(swPath, 'utf8')

  // Service Worker の基本的な構造チェック
  assert(
    swContent.includes('install'),
    'Service Worker must handle install event'
  )
  assert(swContent.includes('fetch'), 'Service Worker must handle fetch event')
  assert(
    swContent.includes('CACHE_NAME'),
    'Service Worker must define CACHE_NAME'
  )
})

// 機能テスト（DOM環境での基本テスト）
test('Quiz game basic functionality', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html')
  const htmlContent = fs.readFileSync(htmlPath, 'utf8')
  const questionsPath = path.join(__dirname, '..', 'questions.js')
  const questionsContent = fs
    .readFileSync(questionsPath, 'utf8')
    .replace(/const allQuestions = /, 'allQuestions = ')
  const scriptPath = path.join(__dirname, '..', 'script.js')
  const scriptContent = fs.readFileSync(scriptPath, 'utf8')

  const dom = new JSDOM(htmlContent, {
    runScripts: 'dangerously',
    resources: 'usable'
  })

  const { window } = dom
  global.window = window
  global.document = window.document
  global.navigator = window.navigator

  // グローバル変数として問題データを定義
  let allQuestions

  // 問題データを読み込み
  // eslint-disable-next-line no-eval
  eval(questionsContent)
  global.allQuestions = allQuestions

  // スクリプトを実行
  // eslint-disable-next-line no-eval
  eval(scriptContent)

  // 基本的な要素の存在確認
  assert(
    window.document.getElementById('start-screen'),
    'Start screen element should exist'
  )
  assert(
    window.document.getElementById('quiz-screen'),
    'Quiz screen element should exist'
  )
})

// テスト結果の表示
console.log('\n' + chalk.blue('📊 Test Results:'))
console.log(chalk.gray('─'.repeat(50)))

if (testsFailed === 0) {
  console.log(chalk.green(`✅ All ${testsPassed} tests passed!`))
  process.exit(0)
} else {
  console.log(chalk.red(`❌ ${testsFailed} test(s) failed`))
  console.log(chalk.green(`✅ ${testsPassed} test(s) passed`))
  process.exit(1)
}
