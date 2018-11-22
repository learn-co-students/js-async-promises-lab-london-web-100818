const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]


let question;
let questionbox = document.querySelector(".question-container")


questionbox.appendChild(que);

function appendQuestion (question) {
    
    questionbox.innerText = question['questionText']
    }

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(question)}
    ,time)
})
}
    
function removeQuestion() {
  return new Promise(function (resolve) {
  questionbox.innerText = ''})
}

function askQuestionThenRemoveQuestion (time) {
return askQuestionThen(time).then(removeQuestion)

}

function trueAndFalseButtons() {
return document.querySelector('.true-false-list').querySelectorAll('.btn')

}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a')
  btn.addEventListener('click', function () {
    toggleTrueAndFalseButtons() 
    askQuestionThenRemoveQuestion (5000)
  })
}