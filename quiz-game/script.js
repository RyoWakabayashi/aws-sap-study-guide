/* globals allQuestions:readonly */

// AWS SAP クイズゲーム メインスクリプト
class QuizGame {
  constructor () {
    this.currentQuestions = []
    this.currentQuestionIndex = 0
    this.score = 0
    this.userAnswers = []
    this.totalQuestions = 10
    this.selectedCategories = []
    this.debugMode = this.isDebugMode()

    // Streak tracking
    this.currentStreak = 0
    this.maxStreak = 0

    // Timer variables
    this.timeLimit = 30 // 30 seconds per question
    this.timeRemaining = this.timeLimit
    this.timerInterval = null
    this.questionAnswered = false

    // 復習モード関連
    this.isReviewMode = false
    this.incorrectQuestions = []
    this.originalUserAnswers = []
    this.originalQuestions = [] // 元の問題データを保存

    // 難易度関連
    this.currentDifficulty = 'basic' // 'basic' or 'advanced'
    this.currentQuestionSet = window.allQuestions || [] // 現在の問題セット

    // グローバル変数の参照を保持（lintエラー回避）
    this.allQuestions = window.allQuestions || []
    this.allAdvancedQuestions = window.allAdvancedQuestions || []

    // 要素の初期化
    if (!this.initializeElements()) {
      console.error('Failed to initialize required elements')
      return
    }

    this.bindEvents()
    this.initializeCategorySelection()
    this.updateStats()
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

    // 重要な要素の存在確認
    const requiredElements = ['start-screen', 'quiz-screen', 'result-screen']
    const missingElements = requiredElements.filter(id => !document.getElementById(id))

    if (missingElements.length > 0) {
      console.error('Missing required elements:', missingElements)
      return false
    }

    // Stats elements
    this.totalQuestionsElement = document.getElementById('total-questions')
    this.totalCategoriesElement = document.getElementById('total-categories')

    // Category selection elements
    this.categoryToggle = document.getElementById('category-toggle')
    this.categoryContent = document.getElementById('category-content')
    this.categoryCheckboxes = document.getElementById('category-checkboxes')
    this.selectAllBtn = document.getElementById('select-all-btn')
    this.clearAllBtn = document.getElementById('clear-all-btn')

    // Question count selection elements
    this.questionCountRadios = document.querySelectorAll('input[name="question-count"]')

    // Quiz elements
    this.progressBar = document.getElementById('progress')
    this.questionCounter = document.getElementById('question-counter')
    this.categoryBadge = document.getElementById('category-badge')
    this.streakCounter = document.getElementById('streak-counter')
    this.questionText = document.getElementById('question-text')
    this.optionsContainer = document.getElementById('options-container')
    this.nextBtn = document.getElementById('next-btn')

    // Explanation elements
    this.explanationContainer = document.getElementById('explanation-container')
    this.explanationText = document.getElementById('explanation-text')

    // Timer elements
    this.timerText = document.getElementById('timer-text')
    this.timerProgress = document.getElementById('timer-progress')

    // Result elements
    this.finalScore = document.getElementById('final-score')
    this.scoreTotal = document.getElementById('score-total')
    this.accuracy = document.getElementById('accuracy')
    this.correctCount = document.getElementById('correct-count')
    this.incorrectCount = document.getElementById('incorrect-count')
    this.timeoutCount = document.getElementById('timeout-count')
    this.maxStreakElement = document.getElementById('max-streak')
    this.performanceMessage = document.getElementById('performance-message')

    // Review elements
    this.reviewContent = document.getElementById('review-content')

    // Buttons
    this.startBtn = document.getElementById('start-btn')
    this.retryBtn = document.getElementById('retry-btn')
    this.reviewBtn = document.getElementById('review-btn')
    this.reviewIncorrectBtn = document.getElementById('review-incorrect-btn')
    this.backToResultBtn = document.getElementById('back-to-result-btn')

    return true
  }

  bindEvents () {
    this.startBtn.addEventListener('click', () => this.startQuiz())
    this.nextBtn.addEventListener('click', () => this.nextQuestion())
    this.retryBtn.addEventListener('click', () => this.restartQuiz())
    this.reviewBtn.addEventListener('click', () => this.showReview())
    this.reviewIncorrectBtn.addEventListener('click', () => this.startIncorrectReview())
    this.backToResultBtn.addEventListener('click', () =>
      this.showScreen('result-screen')
    )

    // Category selection events
    this.categoryToggle.addEventListener('click', () =>
      this.toggleCategorySelection()
    )
    this.selectAllBtn.addEventListener('click', () =>
      this.selectAllCategories()
    )
    this.clearAllBtn.addEventListener('click', () => this.clearAllCategories())

    // Difficulty selection events
    document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
      radio.addEventListener('change', (e) => this.updateDifficulty(e.target.value))
    })

    // Question count selection events
    this.questionCountRadios.forEach(radio => {
      radio.addEventListener('change', () => this.updateQuestionCount())
    })
  }

  showScreen (screenId) {
    // Hide all screens
    Object.values(this.screens).forEach((screen) => {
      screen.classList.remove('active')
    })

    // Show target screen
    document.getElementById(screenId).classList.add('active')
  }

  updateStats () {
    const stats = this.getQuestionStatsFromCurrentSet()
    const totalQuestions = this.currentQuestionSet.length
    const categories = Object.keys(stats).length

    // UI要素が存在する場合は更新
    if (this.totalQuestionsElement) {
      this.totalQuestionsElement.textContent = totalQuestions
    }
    if (this.totalCategoriesElement) {
      this.totalCategoriesElement.textContent = categories
    }

    console.log(`📊 Current question set stats (${this.currentDifficulty}):`)
    console.log(`   Total questions: ${totalQuestions}`)
    console.log(`   Categories: ${categories}`)
  }

  getAllCategoriesFromCurrentSet () {
    const categories = new Set()
    this.currentQuestionSet.forEach(question => {
      if (question.category) {
        categories.add(question.category)
      }
    })
    return Array.from(categories).sort()
  }

  getQuestionStatsFromCurrentSet () {
    const stats = {}
    this.currentQuestionSet.forEach(question => {
      if (question.category) {
        if (!stats[question.category]) {
          stats[question.category] = 0
        }
        stats[question.category]++
      }
    })
    return stats
  }

  formatQuestionText (questionText) {
    // 改行文字を<br>タグに変換
    let formattedText = questionText.replace(/\n/g, '<br>')

    // 箇条書きの処理（- で始まる行）
    formattedText = formattedText.replace(/^- (.+)$/gm, '<li>$1</li>')

    // 連続する<li>タグを<ul>で囲む
    formattedText = formattedText.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')

    // 数字付き箇条書きの処理（1. 2. 3. など）
    formattedText = formattedText.replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')

    // 太字の処理（**text** を <strong>text</strong> に）
    formattedText = formattedText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

    // コードブロックの処理（`code` を <code>code</code> に）
    formattedText = formattedText.replace(/`([^`]+)`/g, '<code>$1</code>')

    // 空行を段落区切りとして処理
    formattedText = formattedText.replace(/(<br>\s*){2,}/g, '</p><p>')

    // 最初と最後にpタグを追加
    if (formattedText.trim()) {
      formattedText = '<p>' + formattedText + '</p>'
    }

    // 空のpタグを削除
    formattedText = formattedText.replace(/<p>\s*<\/p>/g, '')

    return formattedText
  }

  initializeCategorySelection () {
    // 現在の問題セットからカテゴリを取得
    const categories = this.getAllCategoriesFromCurrentSet()
    const stats = this.getQuestionStatsFromCurrentSet()

    this.categoryCheckboxes.innerHTML = ''

    categories.forEach((category) => {
      const categoryItem = document.createElement('div')
      categoryItem.className = 'category-item'

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.id = `category-${category}`
      checkbox.value = category
      checkbox.addEventListener('change', () =>
        this.updateSelectedCategories()
      )

      const label = document.createElement('label')
      label.htmlFor = `category-${category}`
      label.className = 'category-label'
      label.textContent = category

      const count = document.createElement('span')
      count.className = 'category-count'
      count.textContent = `${stats[category] || 0}問`

      categoryItem.appendChild(checkbox)
      categoryItem.appendChild(label)
      categoryItem.appendChild(count)

      this.categoryCheckboxes.appendChild(categoryItem)
    })
  }

  updateSelectedCategories () {
    const checkboxes = this.categoryCheckboxes.querySelectorAll(
      'input[type="checkbox"]'
    )
    this.selectedCategories = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value)

    console.log('Selected categories:', this.selectedCategories)
  }

  selectAllCategories () {
    const checkboxes = this.categoryCheckboxes.querySelectorAll(
      'input[type="checkbox"]'
    )
    checkboxes.forEach((cb) => {
      cb.checked = true
    })
    this.updateSelectedCategories()
  }

  clearAllCategories () {
    const checkboxes = this.categoryCheckboxes.querySelectorAll(
      'input[type="checkbox"]'
    )
    checkboxes.forEach((cb) => {
      cb.checked = false
    })
    this.updateSelectedCategories()
  }

  updateQuestionCount () {
    const selectedRadio = document.querySelector('input[name="question-count"]:checked')
    if (selectedRadio) {
      this.totalQuestions = parseInt(selectedRadio.value)
      console.log(`Question count updated to: ${this.totalQuestions}`)
    }
  }

  updateDifficulty (difficulty) {
    this.currentDifficulty = difficulty

    // 問題セットを切り替え
    if (difficulty === 'advanced') {
      this.currentQuestionSet = this.allAdvancedQuestions
      this.timeLimit = 90 // 上級編は90秒
      console.log(`🎓 Switched to Advanced mode: ${this.currentQuestionSet.length} questions available`)
    } else {
      this.currentQuestionSet = this.allQuestions
      this.timeLimit = 30 // 初級編は30秒
      console.log(`📚 Switched to Basic mode: ${this.currentQuestionSet.length} questions available`)
    }

    // カテゴリ選択を更新
    this.initializeCategorySelection()

    // 統計を更新
    this.updateStats()

    console.log(`Difficulty updated to: ${difficulty}`)
  }

  startIncorrectReview () {
    // 間違った問題を抽出
    this.incorrectQuestions = this.userAnswers.filter(answer => !answer.isCorrect)

    if (this.incorrectQuestions.length === 0) {
      alert('間違った問題がありません。全問正解おめでとうございます！')
      return
    }

    // 元の問題データが存在するかチェック
    if (!this.originalQuestions || this.originalQuestions.length === 0) {
      console.error('❌ Original questions data not found')
      alert('復習データが見つかりません。もう一度クイズを開始してください。')
      return
    }

    // 復習モードの設定
    this.isReviewMode = true
    this.originalUserAnswers = [...this.userAnswers] // 元の回答を保存

    // 間違った問題のみでクイズを再構成
    this.currentQuestions = this.incorrectQuestions.map(answer => {
      const originalQuestion = this.originalQuestions[answer.questionIndex]
      if (!originalQuestion) {
        console.error(`❌ Question not found at index ${answer.questionIndex}`)
        return null
      }
      return originalQuestion
    }).filter(q => q !== null) // nullを除外

    // 復習用の設定
    this.totalQuestions = this.currentQuestions.length
    this.currentQuestionIndex = 0
    this.score = 0
    this.userAnswers = []
    this.currentStreak = 0
    this.maxStreak = 0

    console.log(`🔄 Starting incorrect review mode with ${this.totalQuestions} questions`)

    // 復習モードでクイズ開始
    this.showScreen('quiz-screen')
    this.displayQuestion()
    this.startTimer()
  }

  toggleCategorySelection () {
    const isCollapsed = this.categoryContent.classList.contains('collapsed')

    if (isCollapsed) {
      this.categoryContent.classList.remove('collapsed')
      this.categoryToggle.classList.add('expanded')
    } else {
      this.categoryContent.classList.add('collapsed')
      this.categoryToggle.classList.remove('expanded')
    }
  }

  startQuiz () {
    // 選択された問題数を更新
    this.updateQuestionCount()

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

    // 選択されたカテゴリを更新
    this.updateSelectedCategories()

    this.resetQuiz()

    // カテゴリが選択されている場合は、そのカテゴリから問題を取得
    if (this.selectedCategories.length > 0) {
      this.currentQuestions = this.getRandomQuestionsByCategories(
        this.selectedCategories,
        this.totalQuestions
      )
      console.log(
        `🎯 Selected categories: ${this.selectedCategories.join(', ')}`
      )
    } else {
      // カテゴリが選択されていない場合は全問題から取得
      this.currentQuestions = this.getRandomQuestions(this.totalQuestions)
      console.log('🎯 Using all categories')
    }

    // 問題数が不足している場合の警告
    if (this.currentQuestions.length < this.totalQuestions) {
      console.warn(
        `⚠️ Only ${this.currentQuestions.length} questions available for selected categories`
      )
      alert(
        `選択されたカテゴリには${this.currentQuestions.length}問しかありません。\n${this.currentQuestions.length}問でクイズを開始します。`
      )
      this.totalQuestions = this.currentQuestions.length
    }

    // 復習機能のために元の問題データを保存（復習モードでない場合のみ）
    if (!this.isReviewMode) {
      this.originalQuestions = [...this.currentQuestions]
    }

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

    // Reset streak
    this.currentStreak = 0
    this.maxStreak = 0
    this.updateStreakDisplay()

    // Reset timer
    this.stopTimer()
    this.timeRemaining = this.timeLimit
    this.questionAnswered = false
  }

  updateStreak (isCorrect) {
    if (isCorrect) {
      this.currentStreak++
      if (this.currentStreak > this.maxStreak) {
        this.maxStreak = this.currentStreak
      }

      // 連続正解時の特別演出
      if (this.currentStreak >= 5) {
        this.showStreakCelebration(this.currentStreak)
      }

      // アニメーション効果を追加
      this.animateStreakIncrease()
    } else {
      this.currentStreak = 0
    }
    this.updateStreakDisplay()
  }

  showStreakCelebration (streak) {
    // 特別な連続正解演出
    const messages = {
      5: '🔥 5連続正解！素晴らしい！',
      10: '🌟 10連続正解！驚異的です！',
      15: '💎 15連続正解！完璧です！',
      20: '👑 20連続正解！伝説的です！'
    }

    const message = messages[streak]
    if (message) {
      // 特別な演出を表示
      setTimeout(() => {
        this.showCelebration(true, message)
        this.playStreakSound(streak)
      }, 1000)
    }
  }

  playStreakSound (streak) {
    // 連続正解時の特別な音効果
    if (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      const audioContext = new AudioContextClass()

      // 上昇する音階を連続で再生
      const notes = [523.25, 587.33, 659.25, 698.46, 783.99] // C5, D5, E5, F5, G5
      notes.forEach((freq, index) => {
        setTimeout(() => {
          this.playTone(audioContext, freq, 0.2)
        }, index * 100)
      })
    }
  }

  updateStreakDisplay () {
    if (this.streakCounter) {
      this.streakCounter.textContent = `🔥 ${this.currentStreak}`

      // 連続正解数に応じてスタイルを変更
      if (this.currentStreak >= 5) {
        this.streakCounter.style.background = 'linear-gradient(135deg, #ff6b6b, #ff8e53)'
      } else if (this.currentStreak >= 3) {
        this.streakCounter.style.background = 'linear-gradient(135deg, #ffa500, #ffcd3c)'
      } else {
        this.streakCounter.style.background = 'linear-gradient(135deg, #ff6b6b, #ffa500)'
      }
    }
  }

  animateStreakIncrease () {
    if (this.streakCounter) {
      this.streakCounter.classList.add('streak-active')
      setTimeout(() => {
        this.streakCounter.classList.remove('streak-active')
      }, 1000)
    }
  }

  getRandomQuestionsByCategories (categories, count) {
    // 選択されたカテゴリの問題を現在の問題セットから収集
    const categoryQuestions = this.currentQuestionSet.filter((q) =>
      categories.includes(q.category)
    )

    if (categoryQuestions.length === 0) {
      console.warn('No questions found for selected categories')
      return []
    }

    // シャッフルして指定数を取得
    const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  getRandomQuestions (count) {
    // 現在の問題セットからランダムに取得
    const shuffled = [...this.currentQuestionSet].sort(() => 0.5 - Math.random())
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

    // 復習モードの表示
    if (this.isReviewMode) {
      // 復習モードインジケーターを追加
      if (!document.querySelector('.review-mode-indicator')) {
        const indicator = document.createElement('span')
        indicator.className = 'review-mode-indicator'
        indicator.textContent = '復習モード'
        this.questionCounter.parentNode.appendChild(indicator)
      }

      // 復習モードヘッダーを追加
      if (!document.querySelector('.review-mode-header')) {
        const header = document.createElement('div')
        header.className = 'review-mode-header'
        header.innerHTML = `
          <div class="review-mode-title">📚 間違った問題の復習</div>
          <div class="review-mode-description">前回間違えた問題を再度挑戦しています</div>
        `
        this.questionText.parentNode.insertBefore(header, this.questionText)
      }
    }

    // 難易度に応じてクラスを追加
    const quizScreen = document.getElementById('quiz-screen')
    if (quizScreen) {
      if (this.currentDifficulty === 'advanced') {
        quizScreen.classList.add('difficulty-advanced')
      } else {
        quizScreen.classList.remove('difficulty-advanced')
      }
    } else {
      console.warn('Quiz screen element not found')
    }

    if (this.categoryBadge) {
      this.categoryBadge.textContent = question.category
    }

    // 問題文の改行を適切に処理
    if (this.questionText) {
      this.questionText.innerHTML = this.formatQuestionText(question.question)
    } else {
      console.warn('Question text element not found')
    }

    // Clear and populate options
    this.optionsContainer.innerHTML = ''

    // 選択肢をシャッフル
    const shuffledOptions = this.shuffleOptions(question)

    // 複数選択問題の場合は選択状態を初期化
    if (question.multipleChoice) {
      this.selectedAnswers = []
    }

    shuffledOptions.forEach((optionData, displayIndex) => {
      const optionElement = this.createOptionElement(
        optionData.text,
        displayIndex,
        question.multipleChoice,
        optionData.originalIndex
      )
      this.optionsContainer.appendChild(optionElement)
    })

    // 複数選択問題の場合は回答ボタンを追加
    if (question.multipleChoice) {
      const submitContainer = document.createElement('div')
      submitContainer.className = 'submit-container'

      const submitBtn = document.createElement('button')
      submitBtn.className = 'submit-answer-btn'
      submitBtn.textContent = '回答を確定'
      submitBtn.disabled = true
      submitBtn.addEventListener('click', () => this.submitMultipleChoice())

      submitContainer.appendChild(submitBtn)
      this.optionsContainer.appendChild(submitContainer)
      this.submitBtn = submitBtn
    }

    // Hide explanation and next button
    this.explanationContainer.style.display = 'none'
    this.nextBtn.style.display = 'none'

    // Start timer
    this.startTimer()
  }

  shuffleOptions (question) {
    // 選択肢とその元のインデックスをペアにする
    const optionsWithIndex = question.options.map((option, index) => ({
      text: option,
      originalIndex: index
    }))

    // Fisher-Yates シャッフルアルゴリズム
    const shuffled = [...optionsWithIndex]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // シャッフル後のマッピングを保存（回答処理で使用）
    this.currentShuffleMapping = shuffled.map(item => item.originalIndex)

    return shuffled
  }

  createOptionElement (text, displayIndex, isMultipleChoice = false, originalIndex = null) {
    const option = document.createElement('div')
    option.className = 'option'

    // 元のインデックスを保存（シャッフル対応）
    const actualIndex = originalIndex !== null ? originalIndex : displayIndex

    if (isMultipleChoice) {
      // 複数選択問題の場合はチェックボックス形式
      option.classList.add('multiple-choice')

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.id = `option-${displayIndex}`
      checkbox.value = actualIndex

      const label = document.createElement('label')
      label.htmlFor = `option-${displayIndex}`
      label.textContent = text

      option.appendChild(checkbox)
      option.appendChild(label)

      // 選択肢全体のクリックイベント
      option.addEventListener('click', (e) => {
        // 回答済みの場合は何もしない
        if (this.questionAnswered) {
          return
        }

        // チェックボックス自体がクリックされた場合は、そのイベントに任せる
        if (e.target === checkbox) {
          return
        }

        // 選択肢全体がクリックされた場合、チェックボックスの状態を切り替え
        e.preventDefault()
        checkbox.checked = !checkbox.checked

        // 選択状態を更新（元のインデックスを使用）
        this.updateMultipleChoiceSelection(actualIndex, checkbox.checked, displayIndex)
      })

      // チェックボックス自体のchangeイベント
      checkbox.addEventListener('change', (e) => {
        // 回答済みの場合は何もしない
        if (this.questionAnswered) {
          e.preventDefault()
          return
        }

        this.updateMultipleChoiceSelection(actualIndex, e.target.checked, displayIndex)
      })

      // ラベルのクリックイベント（デフォルトの動作を防ぐ）
      label.addEventListener('click', (e) => {
        if (this.questionAnswered) {
          e.preventDefault()
        }
        // ラベルのクリックは選択肢全体のクリックとして処理されるので、
        // ここでは何もしない（重複処理を防ぐ）
      })
    } else {
      // 単一選択問題の場合は従来通り
      option.textContent = text
      option.addEventListener('click', () => this.selectOption(actualIndex, option, displayIndex))
    }

    return option
  }

  startTimer () {
    // Reset timer state
    this.timeRemaining = this.timeLimit
    this.questionAnswered = false

    // Clear any existing timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
    }

    // Update timer display
    this.updateTimerDisplay()

    // Start countdown
    this.timerInterval = setInterval(() => {
      this.timeRemaining--
      this.updateTimerDisplay()

      if (this.timeRemaining <= 0) {
        this.handleTimeUp()
      }
    }, 1000)
  }

  updateTimerDisplay () {
    // Update text
    this.timerText.textContent = this.timeRemaining

    // Update progress circle
    const progress = (this.timeRemaining / this.timeLimit) * 100
    const offset = 100 - progress
    this.timerProgress.style.strokeDashoffset = offset

    // Update colors based on remaining time
    // Reset classes for timer text (regular HTML element)
    this.timerText.className = ''

    // Reset classes for timer progress (SVG element) - use setAttribute for safety
    this.timerProgress.setAttribute('class', 'timer-progress')

    if (this.timeRemaining <= 5) {
      this.timerText.classList.add('danger')
      this.timerProgress.setAttribute('class', 'timer-progress danger')
    } else if (this.timeRemaining <= 10) {
      this.timerText.classList.add('warning')
      this.timerProgress.setAttribute('class', 'timer-progress warning')
    }
  }

  stopTimer () {
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
      this.timerInterval = null
    }
  }

  handleTimeUp () {
    if (this.questionAnswered) {
      return // Question already answered
    }

    this.stopTimer()
    this.questionAnswered = true

    // Mark as incorrect (no answer selected)
    const question = this.currentQuestions[this.currentQuestionIndex]

    // 複数選択問題の場合の処理
    if (question.multipleChoice) {
      const correctAnswers = Array.isArray(question.correct)
        ? question.correct
        : [question.correct]

      this.userAnswers.push({
        questionIndex: this.currentQuestionIndex,
        selectedAnswer: [], // 空配列で時間切れを示す
        correctAnswer: correctAnswers,
        isCorrect: false,
        timeUp: true,
        isMultipleChoice: true
      })

      // Show correct answers for multiple choice (シャッフル対応)
      const options = this.optionsContainer.querySelectorAll('.option')
      options.forEach((option, displayIdx) => {
        option.classList.add('disabled')
        option.style.pointerEvents = 'none'

        // チェックボックスも無効化
        const checkbox = option.querySelector('input[type="checkbox"]')
        if (checkbox) {
          checkbox.disabled = true
        }

        // シャッフルされた表示位置から元のインデックスを取得
        const originalIndex = this.currentShuffleMapping[displayIdx]
        if (correctAnswers.includes(originalIndex)) {
          option.classList.add('correct')
        }

        // 時間切れの場合、選択された項目があれば表示
        if (this.selectedAnswers && this.selectedAnswers.includes(originalIndex)) {
          option.classList.add('user-selected')
        }
      })

      // Hide submit button if exists
      if (this.submitBtn) {
        this.submitBtn.style.display = 'none'
      }
    } else {
      // 単一選択問題の場合の従来処理
      this.userAnswers.push({
        questionIndex: this.currentQuestionIndex,
        selectedAnswer: -1, // -1 indicates no answer (time up)
        correctAnswer: question.correct,
        isCorrect: false,
        timeUp: true
      })

      // Show correct answer (シャッフル対応)
      const options = this.optionsContainer.querySelectorAll('.option')
      options.forEach((option, displayIdx) => {
        option.classList.add('disabled')
        option.style.pointerEvents = 'none'

        // シャッフルされた表示位置から元のインデックスを取得
        const originalIndex = this.currentShuffleMapping[displayIdx]
        if (originalIndex === question.correct) {
          option.classList.add('correct')
        }
      })
    }

    // 時間切れ演出を追加
    this.showCelebration(false, '⏰ 時間切れです！')
    this.playSound('incorrect')

    // Update streak (time up = incorrect)
    this.updateStreak(false)

    // Show explanation
    this.showExplanation(question.explanation)

    // Show next button
    this.nextBtn.style.display = 'block'

    // Show time up message
    this.showTimeUpMessage()
  }

  showTimeUpMessage () {
    // Create and show time up notification
    const notification = document.createElement('div')
    notification.className = 'time-up-notification'
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">⏰</span>
        <span class="notification-text">時間切れです！</span>
      </div>
    `

    document.body.appendChild(notification)

    // Remove notification after 2 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 2000)
  }

  showExplanation (explanationText) {
    // Set explanation text with proper formatting
    this.explanationText.innerHTML = this.formatQuestionText(explanationText)

    // Show explanation container with animation
    this.explanationContainer.style.display = 'block'

    // Scroll to explanation if needed
    setTimeout(() => {
      this.explanationContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }, 100)
  }

  selectOption (selectedIndex, selectedElement, displayIndex = null) {
    // Check if question already answered or time is up
    if (this.questionAnswered) {
      return
    }

    // Stop timer
    this.stopTimer()
    this.questionAnswered = true

    const question = this.currentQuestions[this.currentQuestionIndex]
    const isCorrect = selectedIndex === question.correct

    // Disable all options
    const options = this.optionsContainer.querySelectorAll('.option')
    options.forEach((option) => {
      option.classList.add('disabled')
      option.style.pointerEvents = 'none'
    })

    // 派手な演出を追加
    this.showCelebration(isCorrect, isCorrect
      ? '素晴らしい！正解です！'
      : '残念！もう一度チャレンジしましょう！')

    // 音効果を再生
    this.playSound(isCorrect ? 'correct' : 'incorrect')

    // Mark correct and incorrect answers (シャッフル対応)
    options.forEach((option, displayIdx) => {
      // シャッフルされた表示位置から元のインデックスを取得
      const originalIndex = this.currentShuffleMapping[displayIdx]

      if (originalIndex === question.correct) {
        option.classList.add('correct')
        // 正解選択肢にアニメーション
        this.animateOption(option, true)
      } else if (originalIndex === selectedIndex && !isCorrect) {
        option.classList.add('incorrect')
        // 不正解選択肢にアニメーション
        this.animateOption(option, false)
      }
    })

    // Show explanation
    this.showExplanation(question.explanation)

    // Record user answer
    this.userAnswers.push({
      questionIndex: this.currentQuestionIndex,
      selectedAnswer: selectedIndex,
      correctAnswer: question.correct,
      isCorrect,
      timeRemaining: this.timeRemaining,
      timeUp: false
    })

    // Update score and streak
    if (isCorrect) {
      this.score++
    }
    this.updateStreak(isCorrect)

    // Show next button
    this.nextBtn.style.display = 'block'
  }

  updateMultipleChoiceSelection (originalIndex, isSelected, displayIndex = null) {
    if (this.questionAnswered) {
      return
    }

    if (!this.selectedAnswers) {
      this.selectedAnswers = []
    }

    if (isSelected) {
      if (!this.selectedAnswers.includes(originalIndex)) {
        this.selectedAnswers.push(originalIndex)
      }
    } else {
      this.selectedAnswers = this.selectedAnswers.filter(i => i !== originalIndex)
    }

    // 視覚的フィードバックを更新（表示インデックスを使用）
    const targetIndex = displayIndex !== null ? displayIndex : originalIndex
    const optionElement = this.optionsContainer.children[targetIndex]
    if (optionElement && optionElement.classList.contains('multiple-choice')) {
      if (isSelected) {
        optionElement.classList.add('checked')
      } else {
        optionElement.classList.remove('checked')
      }
    }

    // 回答ボタンの有効/無効を切り替え
    if (this.submitBtn) {
      this.submitBtn.disabled = this.selectedAnswers.length === 0
    }
  }

  submitMultipleChoice () {
    if (this.questionAnswered || !this.selectedAnswers || this.selectedAnswers.length === 0) {
      return
    }

    // Stop timer
    this.stopTimer()
    this.questionAnswered = true

    const question = this.currentQuestions[this.currentQuestionIndex]

    // 正解の配列をソート
    const correctAnswers = Array.isArray(question.correct)
      ? [...question.correct].sort((a, b) => a - b)
      : [question.correct]

    // 選択した回答をソート
    const selectedAnswers = [...this.selectedAnswers].sort((a, b) => a - b)

    // 配列が同じかどうかを比較
    const isCorrect = correctAnswers.length === selectedAnswers.length &&
      correctAnswers.every((answer, index) => answer === selectedAnswers[index])

    // Disable all options
    const options = this.optionsContainer.querySelectorAll('.option')
    options.forEach((option) => {
      option.classList.add('disabled')
      option.style.pointerEvents = 'none'

      // チェックボックスも無効化
      const checkbox = option.querySelector('input[type="checkbox"]')
      if (checkbox) {
        checkbox.disabled = true
      }
    })

    // 派手な演出を追加
    this.showCelebration(isCorrect, isCorrect
      ? '完璧！すべて正解です！'
      : '惜しい！解説を確認しましょう！')

    // 音効果を再生
    this.playSound(isCorrect ? 'correct' : 'incorrect')

    // Mark correct and incorrect answers (シャッフル対応)
    options.forEach((option, displayIdx) => {
      // シャッフルされた表示位置から元のインデックスを取得
      const originalIndex = this.currentShuffleMapping[displayIdx]

      const isCorrectAnswer = correctAnswers.includes(originalIndex)
      const isUserSelected = selectedAnswers.includes(originalIndex)

      if (isCorrectAnswer) {
        option.classList.add('correct')
        // 正解選択肢にアニメーション
        this.animateOption(option, true)
      }

      if (isUserSelected) {
        option.classList.add('user-selected')
        if (!isCorrectAnswer) {
          option.classList.add('incorrect')
          // 不正解選択肢にアニメーション
          this.animateOption(option, false)
        }
      }
    })

    // Hide submit button
    if (this.submitBtn) {
      this.submitBtn.style.display = 'none'
    }

    // Show explanation with detailed results for multiple choice
    this.showMultipleChoiceResults(question, correctAnswers, selectedAnswers, isCorrect)

    // Record user answer
    this.userAnswers.push({
      questionIndex: this.currentQuestionIndex,
      selectedAnswer: selectedAnswers,
      correctAnswer: correctAnswers,
      isCorrect,
      timeRemaining: this.timeRemaining,
      timeUp: false,
      isMultipleChoice: true
    })

    // Update score and streak
    if (isCorrect) {
      this.score++
    }
    this.updateStreak(isCorrect)

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
    const timeoutCount = this.userAnswers.filter(answer => answer.timeUp).length

    // クイズ完了時の特別演出
    this.showQuizCompletionCelebration(accuracyPercent)

    // Update result display
    this.finalScore.textContent = this.score
    this.scoreTotal.textContent = `/ ${this.totalQuestions}`
    this.accuracy.textContent = `${accuracyPercent}%`
    this.correctCount.textContent = this.score
    this.incorrectCount.textContent = incorrectCount
    this.timeoutCount.textContent = timeoutCount
    this.maxStreakElement.textContent = `🔥 ${this.maxStreak}`

    // Show performance message
    this.performanceMessage.innerHTML =
      this.getPerformanceMessage(accuracyPercent, timeoutCount)

    // 復習ボタンの表示制御
    this.updateReviewButton(incorrectCount)

    this.showScreen('result-screen')
  }

  updateReviewButton (incorrectCount) {
    if (this.isReviewMode) {
      // 復習モードの場合は復習ボタンを非表示
      this.reviewIncorrectBtn.style.display = 'none'

      // 復習完了メッセージを表示
      const reviewCompleteMessage = document.createElement('div')
      reviewCompleteMessage.className = 'review-complete-message'
      reviewCompleteMessage.innerHTML = `
        <div style="background: #e8f5e8; border: 2px solid #4caf50; border-radius: 8px; padding: 1rem; margin: 1rem 0; text-align: center;">
          <h4 style="color: #2e7d32; margin: 0 0 0.5rem 0;">🎯 復習完了！</h4>
          <p style="color: #388e3c; margin: 0;">間違った問題の復習が完了しました。理解度が向上しました！</p>
        </div>
      `

      // 既存のメッセージがあれば削除
      const existing = document.querySelector('.review-complete-message')
      if (existing) {
        existing.remove()
      }

      this.performanceMessage.appendChild(reviewCompleteMessage)
    } else {
      // 通常モードで間違いがある場合は復習ボタンを表示
      if (incorrectCount > 0) {
        this.reviewIncorrectBtn.style.display = 'inline-block'
        this.reviewIncorrectBtn.textContent = `間違った問題を復習 (${incorrectCount}問)`
      } else {
        this.reviewIncorrectBtn.style.display = 'none'
      }
    }
  }

  showQuizCompletionCelebration (accuracy) {
    let message = ''
    let isSuccess = false

    if (accuracy >= 90) {
      message = '🎊 素晴らしい成績です！'
      isSuccess = true
    } else if (accuracy >= 70) {
      message = '👏 よく頑張りました！'
      isSuccess = true
    } else if (accuracy >= 50) {
      message = '📚 復習して再挑戦しましょう！'
    } else {
      message = '💪 基礎から学習しましょう！'
    }

    setTimeout(() => {
      this.showCelebration(isSuccess, message)
      if (isSuccess) {
        this.playCompletionSound()
      }
    }, 500)
  }

  playCompletionSound () {
    // クイズ完了時の特別な音効果
    if (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      const audioContext = new AudioContextClass()

      // ファンファーレ風の音階
      const fanfare = [
        { freq: 523.25, time: 0 }, // C5
        { freq: 659.25, time: 200 }, // E5
        { freq: 783.99, time: 400 }, // G5
        { freq: 1046.50, time: 600 } // C6
      ]

      fanfare.forEach(note => {
        setTimeout(() => {
          this.playTone(audioContext, note.freq, 0.3)
        }, note.time)
      })
    }
  }

  getPerformanceMessage (accuracy, timeoutCount) {
    let timeoutMessage = ''
    if (timeoutCount > 0) {
      timeoutMessage = `<p style="color: #ff9800; margin-top: 0.5rem;"><strong>⏰ ${timeoutCount}問で時間切れになりました。</strong><br>実際の試験では時間管理も重要です。</p>`
    }

    if (accuracy >= 90) {
      return `
                <h3 style="color: #28a745;">🎉 素晴らしい！</h3>
                <p>AWS Solution Architect Professional試験に向けて、非常に良い準備ができています。この調子で頑張ってください！</p>
                ${timeoutMessage}
            `
    } else if (accuracy >= 70) {
      return `
                <h3 style="color: #17a2b8;">👍 良い結果です！</h3>
                <p>基本的な知識は身についています。間違えた問題を復習して、さらに理解を深めましょう。</p>
                ${timeoutMessage}
            `
    } else if (accuracy >= 50) {
      return `
                <h3 style="color: #ffc107;">📚 もう少し頑張りましょう</h3>
                <p>基礎知識はありますが、まだ改善の余地があります。解答を確認して、弱点を克服しましょう。</p>
                ${timeoutMessage}
            `
    } else {
      return `
                <h3 style="color: #dc3545;">💪 継続的な学習が必要です</h3>
                <p>AWSサービスの基本的な特徴をもう一度学習し直すことをお勧めします。解答確認で詳細を確認してください。</p>
                ${timeoutMessage}
            `
    }
  }

  showReview () {
    this.reviewContent.innerHTML = ''

    // 復習モードの場合は元の回答データを使用
    const answersToReview = this.isReviewMode ? this.originalUserAnswers : this.userAnswers
    const questionsToReview = this.isReviewMode ? this.originalQuestions : this.currentQuestions

    answersToReview.forEach((answer, index) => {
      const reviewItem = this.createReviewItem(answer, index, questionsToReview)
      this.reviewContent.appendChild(reviewItem)
    })

    this.showScreen('review-screen')
  }

  createReviewItem (answer, index, questionsArray) {
    const item = document.createElement('div')
    item.className = 'review-item'

    const question = questionsArray[answer.questionIndex]
    if (!question) {
      console.error(`❌ Question not found at index ${answer.questionIndex}`)
      return item
    }

    let userAnswerText = '回答なし（時間切れ）'
    let resultText = '❌ 時間切れ'
    let resultClass = 'timeout'

    if (!answer.timeUp) {
      if (answer.isMultipleChoice) {
        // 複数選択問題の場合
        if (Array.isArray(answer.selectedAnswer) && answer.selectedAnswer.length > 0) {
          userAnswerText = answer.selectedAnswer
            .map(index => question.options[index])
            .join(', ')
        } else {
          userAnswerText = '回答なし'
        }
      } else {
        // 単一選択問題の場合
        if (answer.selectedAnswer >= 0) {
          userAnswerText = question.options[answer.selectedAnswer]
        } else {
          userAnswerText = '回答なし'
        }
      }
      resultText = answer.isCorrect ? '✅ 正解' : '❌ 不正解'
      resultClass = answer.isCorrect ? 'correct' : 'incorrect'
    }

    // 正解の表示
    let correctAnswerText
    if (question.multipleChoice) {
      const correctAnswers = Array.isArray(question.correct)
        ? question.correct
        : [question.correct]
      correctAnswerText = correctAnswers
        .map(index => question.options[index])
        .join(', ')
    } else {
      correctAnswerText = question.options[question.correct]
    }

    const timeInfo = answer.timeUp
      ? '<div class="review-time timeout"><strong>⏰ 時間切れ</strong></div>'
      : `<div class="review-time"><strong>回答時間:</strong> ${this.timeLimit - answer.timeRemaining}秒</div>`

    // 問題タイプの表示
    const questionType = question.multipleChoice
      ? '<span class="question-type multiple">複数選択</span>'
      : '<span class="question-type single">単一選択</span>'

    item.innerHTML = `
            <div class="review-question">
                <strong>問題 ${answer.questionIndex + 1}:</strong> ${question.question}
                ${questionType}
            </div>
            <div class="review-answer user">
                <strong>あなたの回答:</strong> ${userAnswerText}
            </div>
            <div class="review-answer correct">
                <strong>正解:</strong> ${correctAnswerText}
            </div>
            <div class="review-answer ${resultClass}">
                <strong>結果:</strong> ${resultText}
            </div>
            ${timeInfo}
            <div class="review-explanation">
                <strong>解説:</strong> ${this.formatQuestionText(question.explanation)}
            </div>
        `

    return item
  }

  restartQuiz () {
    // 復習モードをリセット
    this.isReviewMode = false
    this.incorrectQuestions = []
    this.originalUserAnswers = []
    this.originalQuestions = []

    // 復習モード表示要素を削除
    const reviewIndicator = document.querySelector('.review-mode-indicator')
    if (reviewIndicator) {
      reviewIndicator.remove()
    }

    const reviewHeader = document.querySelector('.review-mode-header')
    if (reviewHeader) {
      reviewHeader.remove()
    }

    const reviewCompleteMessage = document.querySelector('.review-complete-message')
    if (reviewCompleteMessage) {
      reviewCompleteMessage.remove()
    }

    // 問題数は現在の選択を維持
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
    const invalidQuestions = allQuestions.filter((q) => {
      // 基本的な必須フィールドのチェック
      if (!q.id || !q.category || !q.question || !q.options || !Array.isArray(q.options) || !q.explanation) {
        return true
      }

      // 複数選択問題の場合
      if (q.multipleChoice) {
        // 選択肢は6個、正解は配列
        if (q.options.length !== 6 || !Array.isArray(q.correct)) {
          return true
        }
        // 正解の配列の各要素が有効な範囲内かチェック
        return q.correct.some(answer => typeof answer !== 'number' || answer < 0 || answer >= 6)
      } else {
        // 単一選択問題の場合（従来通り）
        if (q.options.length !== 4) {
          return true
        }
        return typeof q.correct !== 'number' || q.correct < 0 || q.correct >= 4
      }
    })

    if (invalidQuestions.length > 0) {
      console.warn('⚠️ Invalid questions found:', invalidQuestions)
    } else {
      console.log('✅ All questions are valid')
    }

    // カテゴリ別の問題数を表示（単一選択・複数選択別）
    const categories = {}
    const multipleChoiceCount = {}
    allQuestions.forEach((q) => {
      categories[q.category] = (categories[q.category] || 0) + 1
      if (q.multipleChoice) {
        multipleChoiceCount[q.category] = (multipleChoiceCount[q.category] || 0) + 1
      }
    })
    console.log('📊 Questions by category:', categories)
    console.log('📊 Multiple choice questions by category:', multipleChoiceCount)
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

// 複数選択問題の結果表示関数をQuizGameクラスに追加
QuizGame.prototype.showMultipleChoiceResults = function (question, correctAnswers, selectedAnswers, isCorrect) {
  // 結果の詳細を作成
  const resultSummary = this.createMultipleChoiceResultSummary(
    question, correctAnswers, selectedAnswers, isCorrect
  )

  // 解説と結果を表示
  this.explanationContainer.style.display = 'block'
  this.explanationText.innerHTML = `
    ${resultSummary}
    <div class="explanation-divider"></div>
    <strong>解説:</strong><br>
    ${this.formatQuestionText(question.explanation)}
  `
}

QuizGame.prototype.createMultipleChoiceResultSummary = function (question, correctAnswers, selectedAnswers, isCorrect) {
  const resultClass = isCorrect ? 'result-correct' : 'result-incorrect'
  const resultIcon = isCorrect ? '✅' : '❌'
  const resultText = isCorrect ? '正解' : '不正解'

  let summary = `
    <div class="multiple-choice-result ${resultClass}">
      <h4>${resultIcon} ${resultText}</h4>
  `

  // 正解の選択肢を表示
  const correctOptions = correctAnswers.map(index => `• ${question.options[index]}`).join('<br>')
  summary += `
    <div class="result-section">
      <strong>正解:</strong><br>
      <div class="correct-answers">${correctOptions}</div>
    </div>
  `

  // ユーザーの選択を表示
  if (selectedAnswers.length > 0) {
    const selectedOptions = selectedAnswers.map(index => {
      const isCorrectChoice = correctAnswers.includes(index)
      const icon = isCorrectChoice ? '✅' : '❌'
      return `${icon} ${question.options[index]}`
    }).join('<br>')

    summary += `
      <div class="result-section">
        <strong>あなたの選択:</strong><br>
        <div class="user-answers">${selectedOptions}</div>
      </div>
    `
  } else {
    summary += `
      <div class="result-section">
        <strong>あなたの選択:</strong><br>
        <div class="user-answers no-selection">選択なし</div>
      </div>
    `
  }

  // 見逃した正解があるかチェック
  const missedCorrect = correctAnswers.filter(index => !selectedAnswers.includes(index))
  if (missedCorrect.length > 0) {
    const missedOptions = missedCorrect.map(index => `• ${question.options[index]}`).join('<br>')
    summary += `
      <div class="result-section missed-correct">
        <strong>見逃した正解:</strong><br>
        <div class="missed-answers">${missedOptions}</div>
      </div>
    `
  }

  // 間違って選択した選択肢があるかチェック
  const wrongSelections = selectedAnswers.filter(index => !correctAnswers.includes(index))
  if (wrongSelections.length > 0) {
    const wrongOptions = wrongSelections.map(index => `• ${question.options[index]}`).join('<br>')
    summary += `
      <div class="result-section wrong-selections">
        <strong>間違って選択:</strong><br>
        <div class="wrong-answers">${wrongOptions}</div>
      </div>
    `
  }

  summary += '</div>'
  return summary
}

// 派手な演出関数
QuizGame.prototype.showCelebration = function (isCorrect, message = '') {
  // 既存の演出を削除
  this.removeCelebration()

  // オーバーレイを作成
  const overlay = document.createElement('div')
  overlay.className = 'celebration-overlay'
  overlay.id = 'celebration-overlay'

  const content = document.createElement('div')
  content.className = 'celebration-content'

  const mainText = document.createElement('div')
  mainText.className = isCorrect ? 'celebration-correct' : 'celebration-incorrect'
  mainText.textContent = isCorrect ? '🎉 正解！' : '❌ 不正解'

  const messageText = document.createElement('div')
  messageText.className = 'celebration-message'
  messageText.textContent = message || (isCorrect ? 'よくできました！' : '次は頑張りましょう！')

  content.appendChild(mainText)
  content.appendChild(messageText)
  overlay.appendChild(content)

  // 正解時は紙吹雪を追加
  if (isCorrect) {
    this.createConfetti(overlay)
  }

  document.body.appendChild(overlay)

  // 画面フラッシュ効果
  const quizScreen = document.getElementById('quiz-screen')
  quizScreen.classList.add(isCorrect ? 'screen-flash-correct' : 'screen-flash-incorrect')

  // 演出を自動削除
  setTimeout(() => {
    this.removeCelebration()
    quizScreen.classList.remove('screen-flash-correct', 'screen-flash-incorrect')
  }, 2000)
}

QuizGame.prototype.createConfetti = function (container) {
  const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f']

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'confetti'
    confetti.style.left = Math.random() * 100 + '%'
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDelay = Math.random() * 3 + 's'
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's'
    container.appendChild(confetti)
  }
}

QuizGame.prototype.removeCelebration = function () {
  const existing = document.getElementById('celebration-overlay')
  if (existing) {
    existing.remove()
  }
}

QuizGame.prototype.animateOption = function (option, isCorrect) {
  option.classList.add(isCorrect ? 'correct-animation' : 'incorrect-animation')

  setTimeout(() => {
    option.classList.remove('correct-animation', 'incorrect-animation')
  }, 1000)
}

QuizGame.prototype.playSound = function (type) {
  // Web Audio APIを使用した簡単な音効果
  if (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    const audioContext = new AudioContextClass()

    if (type === 'correct') {
      // 正解音: 上昇する音階
      this.playTone(audioContext, 523.25, 0.1) // C5
      setTimeout(() => this.playTone(audioContext, 659.25, 0.1), 100) // E5
      setTimeout(() => this.playTone(audioContext, 783.99, 0.2), 200) // G5
    } else if (type === 'incorrect') {
      // 不正解音: 下降する音
      this.playTone(audioContext, 392.00, 0.3) // G4
      setTimeout(() => this.playTone(audioContext, 329.63, 0.3), 150) // E4
    }
  }
}

QuizGame.prototype.playTone = function (audioContext, frequency, duration) {
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = frequency
  oscillator.type = 'sine'

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration)
}
