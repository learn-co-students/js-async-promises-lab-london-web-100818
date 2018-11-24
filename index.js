const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let promise = new Promise(function(resolve){});
const questionContainer = document.querySelector(".question-container");
const buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')

function appendQuestion(question) {
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  for (const q of questions) {
    if(q.questionText === questionContainer.innerText) {
      question = q;
    }
  }
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve()
    }, time )
  })
}

function removeQuestion() {
  return new Promise(function(){
    questionContainer.innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion); 
}

function trueAndFalseButtons() {
  return buttons;
}

function toggleTrueAndFalseButtons() {
  for (const b of buttons) {
    if (b.classList.contains('hide')) { b.classList.remove('hide');
    } else {
      b.classList.add('hide')
    }
  }
}

function displayQuestionOnClick() {
  
}