const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]
let question
let questionContainer=document.querySelector('.question-container')

function appendQuestion(question){
  let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText;
}
function askQuestionThen(time) {
  question=questions[0]
  appendQuestion(question)
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      question=" "
    },time)
    resolve(question)
})
}
function removeQuestion() {
  questionContainer.innerHTML=""
}
function trueAndFalseButtons() {
  let buttons = document.querySelectorAll(`.btn.center-align`)
  buttons[0].innerText='TRUE'
  buttons[1].innerText='FALSE'
  return buttons

}

function displayQuestionOnClick(){
  let ask=document.querySelector(`.waves-effect.waves-light.btn`)
  ask.addEventListener("click", function(){
    container.innerHTML = questions[0].questionText;
});
}
function toggleTrueAndFalseButtons(){
  for (element of trueAndFalseButtons()){
    if (element.classList.contains("hide")){
    element.classList.remove("hide");
  }
  else {
    element.classList.add("hide");

  }
  }
}



function askQuestionThenRemoveQuestion() {
  question=questions[0]
appendQuestion(question)
return new Promise(function(resolve, reject){
  setTimeout(function(){
    question=" "
  },1000)
  resolve(question)
})
}
