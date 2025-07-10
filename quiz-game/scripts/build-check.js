#!/usr/bin/env node

/**
 * ビルドチェックスクリプト
 * - ファイルサイズの確認
 * - 依存関係の確認
 * - パフォーマンスチェック
 */

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

console.log(chalk.blue('🔧 Running build checks...'))

let checks = 0
let warnings = 0
let errors = 0

function check (description, checkFn) {
  try {
    const result = checkFn()
    if (result === true) {
      console.log(chalk.green(`✅ ${description}`))
      checks++
    } else if (result === 'warning') {
      console.log(chalk.yellow(`⚠️  ${description}`))
      warnings++
    } else {
      console.log(chalk.red(`❌ ${description}`))
      errors++
    }
  } catch (error) {
    console.log(chalk.red(`❌ ${description}: ${error.message}`))
    errors++
  }
}

// ファイルサイズチェック
const fileSizeChecks = [
  { file: 'index.html', maxSize: 50 * 1024 }, // 50KB
  { file: 'styles.css', maxSize: 100 * 1024 }, // 100KB
  { file: 'script.js', maxSize: 100 * 1024 }, // 100KB
  { file: 'questions.js', maxSize: 500 * 1024 }, // 500KB
  { file: 'sw.js', maxSize: 10 * 1024 } // 10KB
]

fileSizeChecks.forEach(({ file, maxSize }) => {
  check(`File size check: ${file}`, () => {
    const filePath = path.join(__dirname, '..', file)
    if (!fs.existsSync(filePath)) {
      throw new Error(`File ${file} does not exist`)
    }

    const stats = fs.statSync(filePath)
    const sizeKB = Math.round(stats.size / 1024)
    const maxSizeKB = Math.round(maxSize / 1024)

    if (stats.size > maxSize) {
      throw new Error(`File too large: ${sizeKB}KB > ${maxSizeKB}KB`)
    }

    if (stats.size > maxSize * 0.8) {
      console.log(
        chalk.gray(
          `    Size: ${sizeKB}KB (approaching limit of ${maxSizeKB}KB)`
        )
      )
      return 'warning'
    }

    console.log(chalk.gray(`    Size: ${sizeKB}KB`))
    return true
  })
})

// HTMLバリデーション
check('HTML structure validation', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html')
  const htmlContent = fs.readFileSync(htmlPath, 'utf8')

  // 基本的なHTML構造チェック
  const hasDoctype = htmlContent.includes('<!DOCTYPE html>')
  const hasLang = htmlContent.includes('lang=')
  const hasViewport = htmlContent.includes('viewport')
  const hasTitle = htmlContent.includes('<title>')

  if (!hasDoctype) throw new Error('Missing DOCTYPE declaration')
  if (!hasLang) throw new Error('Missing lang attribute')
  if (!hasViewport) throw new Error('Missing viewport meta tag')
  if (!hasTitle) throw new Error('Missing title tag')

  return true
})

// CSSバリデーション
check('CSS validation', () => {
  const cssPath = path.join(__dirname, '..', 'styles.css')
  const cssContent = fs.readFileSync(cssPath, 'utf8')

  // 基本的なCSS構造チェック
  const openBraces = (cssContent.match(/{/g) || []).length
  const closeBraces = (cssContent.match(/}/g) || []).length

  if (openBraces !== closeBraces) {
    throw new Error(
      `Unbalanced braces: ${openBraces} open, ${closeBraces} close`
    )
  }

  // レスポンシブデザインのチェック
  const hasMediaQueries = cssContent.includes('@media')
  if (!hasMediaQueries) {
    console.log(
      chalk.gray('    No media queries found - consider responsive design')
    )
    return 'warning'
  }

  return true
})

// JavaScriptバリデーション
check('JavaScript validation', () => {
  const jsFiles = ['script.js', 'questions.js']

  jsFiles.forEach((file) => {
    const filePath = path.join(__dirname, '..', file)
    const content = fs.readFileSync(filePath, 'utf8')

    // 構文チェック
    try {
      // eslint-disable-next-line no-new,no-new-func
      new Function(content)
    } catch (error) {
      throw new Error(`Syntax error in ${file}: ${error.message}`)
    }

    // 基本的なコード品質チェック
    if (content.includes('console.log') && !content.includes('debug')) {
      console.log(
        chalk.gray(`    Warning: ${file} contains console.log statements`)
      )
    }
  })

  return true
})

// PWA要件チェック
check('PWA requirements', () => {
  const manifestPath = path.join(__dirname, '..', 'manifest.json')
  const swPath = path.join(__dirname, '..', 'sw.js')
  const htmlPath = path.join(__dirname, '..', 'index.html')

  if (!fs.existsSync(manifestPath)) {
    throw new Error('manifest.json not found')
  }

  if (!fs.existsSync(swPath)) {
    throw new Error('Service Worker not found')
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8')
  if (!htmlContent.includes('manifest.json')) {
    throw new Error('Manifest not linked in HTML')
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const requiredManifestFields = [
    'name',
    'short_name',
    'start_url',
    'display',
    'icons'
  ]

  requiredManifestFields.forEach((field) => {
    if (!manifest[field]) {
      throw new Error(`Missing required manifest field: ${field}`)
    }
  })

  return true
})

// アクセシビリティチェック
check('Basic accessibility check', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html')
  const htmlContent = fs.readFileSync(htmlPath, 'utf8')

  // 基本的なアクセシビリティチェック
  const hasAltTags =
    htmlContent.includes('alt=') || !htmlContent.includes('<img')
  const hasAriaLabels =
    htmlContent.includes('aria-label') ||
    htmlContent.includes('aria-labelledby')

  if (!hasAltTags) {
    console.log(chalk.gray('    Consider adding alt attributes to images'))
    return 'warning'
  }

  if (!hasAriaLabels && htmlContent.includes('button')) {
    console.log(
      chalk.gray('    Consider adding ARIA labels for better accessibility')
    )
    return 'warning'
  }

  return true
})

// パフォーマンスチェック
check('Performance considerations', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html')
  const htmlContent = fs.readFileSync(htmlPath, 'utf8')

  // 外部リソースの数をチェック
  const externalScripts = (htmlContent.match(/<script[^>]*src=/g) || []).length
  const externalStyles = (htmlContent.match(/<link[^>]*stylesheet/g) || [])
    .length

  if (externalScripts > 5) {
    console.log(
      chalk.gray(
        `    Many external scripts (${externalScripts}) - consider bundling`
      )
    )
    return 'warning'
  }

  if (externalStyles > 3) {
    console.log(
      chalk.gray(
        `    Many external stylesheets (${externalStyles}) - consider bundling`
      )
    )
    return 'warning'
  }

  return true
})

// 結果の表示
console.log('\n' + chalk.blue('📊 Build Check Results:'))
console.log(chalk.gray('─'.repeat(50)))

const total = checks + warnings + errors

if (errors === 0) {
  console.log(
    chalk.green(`✅ Build check passed (${checks}/${total} checks successful)`)
  )
  if (warnings > 0) {
    console.log(
      chalk.yellow(
        `⚠️  ${warnings} warning(s) - consider addressing these for better quality`
      )
    )
  }
  process.exit(0)
} else {
  console.log(
    chalk.red(
      `❌ Build check failed (${errors} error(s), ${warnings} warning(s))`
    )
  )
  process.exit(1)
}
