// AWS SAP クイズゲーム メインスクリプト
class QuizGame {
  constructor () {
    this.currentQuestions = []
    this.currentQuestionIndex = 0
    this.score = 0
    this.userAnswers = []
    this.totalQuestions = 10
    this.debugMode = this.isDebugMode()

    this.initializeElements()
    this.bindEvents()
    this.showScreen('start-screen')

    if (this.debugMode) {
      this.enableDebugMode()
    }
  }

  isDebugMode () {
    return (
      window.location.search.includes('debug=true') ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    )
  }

  enableDebugMode () {
    console.log('🐛 Debug Mode Enabled')
    console.log(`📊 Total Questions Available: ${allQuestions.length}`)

    // デバッグ情報を画面に表示
    const debugInfo = document.createElement('div')
    debugInfo.id = 'debug-info'
    debugInfo.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 1000;
            max-width: 200px;
        `
    debugInfo.innerHTML = `
            <strong>🐛 Debug Mode</strong><br>
            Questions: ${allQuestions.length}<br>
            <button onclick="window.quizGame.showAllQuestions()" style="margin-top: 5px; padding: 2px 5px;">Show All Questions</button>
        `
    document.body.appendChild(debugInfo)

    // グローバルアクセス用
    window.quizGame = this
  }

  showAllQuestions () {
    console.table(
      allQuestions.map((q) => ({
        id: q.id,
        category: q.category,
        question: q.question.substring(0, 50) + '...',
        correct: q.options[q.correct]
      }))
    )
  }

  initializeElements () {
    // Screen elements
    this.screens = {
      start: document.getElementById('start-screen'),
      quiz: document.getElementById('quiz-screen'),
      result: document.getElementById('result-screen'),
      review: document.getElementById('review-screen')
    }

    // Quiz elements
    this.progressBar = document.getElementById('progress')
    this.questionCounter = document.getElementById('question-counter')
    this.categoryBadge = document.getElementById('category-badge')
    this.questionText = document.getElementById('question-text')
    this.optionsContainer = document.getElementById('options-container')
    this.nextBtn = document.getElementById('next-btn')

    // Result elements
    this.finalScore = document.getElementById('final-score')
    this.accuracy = document.getElementById('accuracy')
    this.correctCount = document.getElementById('correct-count')
    this.incorrectCount = document.getElementById('incorrect-count')
    this.performanceMessage = document.getElementById('performance-message')

    // Review elements
    this.reviewContent = document.getElementById('review-content')

    // Buttons
    this.startBtn = document.getElementById('start-btn')
    this.retryBtn = document.getElementById('retry-btn')
    this.reviewBtn = document.getElementById('review-btn')
    this.backToResultBtn = document.getElementById('back-to-result-btn')
  }

  bindEvents () {
    this.startBtn.addEventListener('click', () => this.startQuiz())
    this.nextBtn.addEventListener('click', () => this.nextQuestion())
    this.retryBtn.addEventListener('click', () => this.restartQuiz())
    this.reviewBtn.addEventListener('click', () => this.showReview())
    this.backToResultBtn.addEventListener('click', () =>
      this.showScreen('result-screen')
    )
  }

  showScreen (screenId) {
    // Hide all screens
    Object.values(this.screens).forEach((screen) => {
      screen.classList.remove('active')
    })

    // Show target screen
    document.getElementById(screenId).classList.add('active')
  }

  startQuiz () {
    // データの存在確認
    if (typeof allQuestions === 'undefined') {
      console.error('❌ allQuestions is not defined. Check questions.js file.')
      alert(
        '問題データが読み込まれていません。ページを再読み込みしてください。'
      )
      return
    }

    if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
      console.error('❌ allQuestions is not a valid array or is empty.')
      alert('問題データが正しく読み込まれていません。')
      return
    }

    console.log(
      `✅ Questions loaded: ${allQuestions.length} questions available`
    )

    this.resetQuiz()
    this.currentQuestions = this.getRandomQuestions(this.totalQuestions)

    if (this.debugMode) {
      console.log(
        '🎯 Selected questions for this quiz:',
        this.currentQuestions.map((q) => ({
          id: q.id,
          category: q.category,
          question: q.question.substring(0, 50) + '...'
        }))
      )
    }

    this.showScreen('quiz-screen')
    this.displayQuestion()
  }

  resetQuiz () {
    this.currentQuestionIndex = 0
    this.score = 0
    this.userAnswers = []
    this.nextBtn.style.display = 'none'
  }

  getRandomQuestions (count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  displayQuestion () {
    const question = this.currentQuestions[this.currentQuestionIndex]

    // Update progress
    const progress =
      ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100
    this.progressBar.style.width = `${progress}%`

    // Update question info
    this.questionCounter.textContent = `${this.currentQuestionIndex + 1} / ${
      this.totalQuestions
    }`
    this.categoryBadge.textContent = question.category
    this.questionText.textContent = question.question

    // Clear and populate options
    this.optionsContainer.innerHTML = ''
    question.options.forEach((option, index) => {
      const optionElement = this.createOptionElement(option, index)
      this.optionsContainer.appendChild(optionElement)
    })

    // Hide next button
    this.nextBtn.style.display = 'none'
  }

  createOptionElement (text, index) {
    const option = document.createElement('div')
    option.className = 'option'
    option.textContent = text
    option.addEventListener('click', () => this.selectOption(index, option))
    return option
  }

  selectOption (selectedIndex, selectedElement) {
    const question = this.currentQuestions[this.currentQuestionIndex]
    const isCorrect = selectedIndex === question.correct

    // Disable all options
    const options = this.optionsContainer.querySelectorAll('.option')
    options.forEach((option) => {
      option.classList.add('disabled')
      option.style.pointerEvents = 'none'
    })

    // Mark correct and incorrect answers
    options.forEach((option, index) => {
      if (index === question.correct) {
        option.classList.add('correct')
      } else if (index === selectedIndex && !isCorrect) {
        option.classList.add('incorrect')
      }
    })

    // Record user answer
    this.userAnswers.push({
      questionId: question.id,
      selectedIndex,
      isCorrect,
      question
    })

    // Update score
    if (isCorrect) {
      this.score++
    }

    // Show next button
    this.nextBtn.style.display = 'block'
  }

  nextQuestion () {
    this.currentQuestionIndex++

    if (this.currentQuestionIndex < this.totalQuestions) {
      this.displayQuestion()
    } else {
      this.showResults()
    }
  }

  showResults () {
    const accuracyPercent = Math.round(
      (this.score / this.totalQuestions) * 100
    )
    const incorrectCount = this.totalQuestions - this.score

    // Update result display
    this.finalScore.textContent = this.score
    this.accuracy.textContent = `${accuracyPercent}%`
    this.correctCount.textContent = this.score
    this.incorrectCount.textContent = incorrectCount

    // Show performance message
    this.performanceMessage.innerHTML =
      this.getPerformanceMessage(accuracyPercent)

    this.showScreen('result-screen')
  }

  getPerformanceMessage (accuracy) {
    if (accuracy >= 90) {
      return `
                <h3 style="color: #28a745;">🎉 素晴らしい！</h3>
                <p>AWS Solution Architect Professional試験に向けて、非常に良い準備ができています。この調子で頑張ってください！</p>
            `
    } else if (accuracy >= 70) {
      return `
                <h3 style="color: #17a2b8;">👍 良い結果です！</h3>
                <p>基本的な知識は身についています。間違えた問題を復習して、さらに理解を深めましょう。</p>
            `
    } else if (accuracy >= 50) {
      return `
                <h3 style="color: #ffc107;">📚 もう少し頑張りましょう</h3>
                <p>基礎知識はありますが、まだ改善の余地があります。解答を確認して、弱点を克服しましょう。</p>
            `
    } else {
      return `
                <h3 style="color: #dc3545;">💪 継続的な学習が必要です</h3>
                <p>AWSサービスの基本的な特徴をもう一度学習し直すことをお勧めします。解答確認で詳細を確認してください。</p>
            `
    }
  }

  showReview () {
    this.reviewContent.innerHTML = ''

    this.userAnswers.forEach((answer, index) => {
      const reviewItem = this.createReviewItem(answer, index)
      this.reviewContent.appendChild(reviewItem)
    })

    this.showScreen('review-screen')
  }

  createReviewItem (answer, index) {
    const item = document.createElement('div')
    item.className = 'review-item'

    const question = answer.question
    const userAnswerText = question.options[answer.selectedIndex]
    const correctAnswerText = question.options[question.correct]

    item.innerHTML = `
            <div class="review-question">
                <strong>問題 ${index + 1}:</strong> ${question.question}
            </div>
            <div class="review-answer user">
                <strong>あなたの回答:</strong> ${userAnswerText}
            </div>
            <div class="review-answer ${
              answer.isCorrect ? 'correct' : 'incorrect'
            }">
                <strong>正解:</strong> ${correctAnswerText}
            </div>
            <div class="review-answer">
                <strong>結果:</strong> ${
                  answer.isCorrect ? '✅ 正解' : '❌ 不正解'
                }
            </div>
            <div class="review-explanation">
                <strong>解説:</strong> ${question.explanation}
            </div>
        `

    return item
  }

  restartQuiz () {
    this.showScreen('start-screen')
  }
}

// ページ読み込み完了後にゲームを初期化
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 AWS SAP Quiz Game - Initializing...')

  // 問題データの確認
  if (typeof allQuestions !== 'undefined') {
    console.log(`✅ Questions loaded: ${allQuestions.length} questions`)

    // 問題データの基本検証
    const invalidQuestions = allQuestions.filter(
      (q) =>
        !q.id ||
        !q.category ||
        !q.question ||
        !q.options ||
        !Array.isArray(q.options) ||
        q.options.length !== 4 ||
        typeof q.correct !== 'number' ||
        q.correct < 0 ||
        q.correct > 3 ||
        !q.explanation
    )

    if (invalidQuestions.length > 0) {
      console.warn('⚠️ Invalid questions found:', invalidQuestions)
    } else {
      console.log('✅ All questions are valid')
    }

    // カテゴリ別の問題数を表示
    const categories = {}
    allQuestions.forEach((q) => {
      categories[q.category] = (categories[q.category] || 0) + 1
    })
    console.log('📊 Questions by category:', categories)
  } else {
    console.error(
      '❌ allQuestions is not defined. Check if questions.js is loaded properly.'
    )
  }

  // eslint-disable-next-line no-new
  new QuizGame()
})

// サービスワーカーの登録（PWA対応）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((registration) => {
        console.log('✅ SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('❌ SW registration failed: ', registrationError)
      })
  })
}
