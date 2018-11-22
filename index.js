const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
function askQuestion() {
  return questions[0]
}

function appendQuestion(question) {
  const questionEl = document.querySelector('.question-container')
  questionEl.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  const questionEl = document.querySelector('.question-container')
  return new Promise (function() {
    questionEl.innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
  
}

function toggleTrueAndFalseButtons() {
  let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  btns.forEach((btn) => {
    btn.classList.toggle('hide')
  })
}

function displayQuestionOnClick() {
  btn = document.querySelector('.waves-effect')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

