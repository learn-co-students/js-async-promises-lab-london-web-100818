const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

const askButton = document.querySelector("#ask-button")
const questionContainer = document.querySelector(".question-container")
const trueButton = document.querySelector("#true")
const falseButton = document.querySelector("#false")

let question;


function appendQuestion(){
  questionContainer.innerHTML = questions[0].questionText;

}

function askQuestionThen(time){
  question = questions[0];
  appendQuestion();
  return new Promise((resolve) => {
    setTimeout(()=>resolve(question),time);
  });
}

function removeQuestion(){
  toggleTrueAndFalseButtons();
  return new Promise(function(){
    
    questionContainer.innerHTML = ''
    
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time)
          .then(removeQuestion);
}

function trueAndFalseButtons(){
  return [trueButton, falseButton]
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach( (button) => {
    if(button.classList.contains("hide")){
      button.classList.remove("hide")
    } else {
      button.classList.add("hide")
    }
  });
}

function displayQuestionOnClick(){
  return askButton.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  })
}
