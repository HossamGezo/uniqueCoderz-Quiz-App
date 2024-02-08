import Final from "./final.js";
import Question from "./question.js";

export default class Quiz {
  constructor(quizElement, amount, questions) {
    // ! ---------- Variables
    this.quizElement = quizElement;
    // Count Element
    this.currentElement = document.querySelector(".current");
    this.totalElement = document.querySelector(".total");
    // Next Button
    this.nextBtn = document.querySelector(".submit-question");
    // Final Element
    this.finalElement = document.querySelector(".final");
    // Global Variables
    this.totalAmount = amount;
    this.answeredAmount = 0;
    
    // ! ---------- Events
    this.nextBtn.addEventListener("click", this.nextQuestion);
    
    // ! ---------- Calling Functions
    this.questions = this.setQuestion(questions);
    this.renderQuestion();
  }
    // ! ---------- Functions
  setQuestion(questions) {
    return questions.map(question => new Question(question)); 
  }

  renderQuestion() {
    this.questions[this.answeredAmount].render();
    this.currentElement.innerText = this.answeredAmount;
    this.totalElement.innerText = this.totalAmount;
  }

  nextQuestion = () => {
    const checkElement = this.questions[this.answeredAmount].answers.querySelectorAll("label");
    for (let i = 0; i < checkElement.length; ++i) {
      if (checkElement[i].lastElementChild.checked) {
        this.questions[this.answeredAmount].answer(checkElement[i].firstElementChild);
        this.answeredAmount++;
        this.answeredAmount < this.totalAmount ? this.renderQuestion() : this.endQuizApp();
      } 
    }
  }

  endQuizApp() {
    this.quizElement.style.display = "none";
    this.finalElement.style.display = "block";
    const correct = this.countCorrectAnswers();
    new Final(correct, this.totalAmount);
  }

  countCorrectAnswers() {
    let count = 0;
    this.questions.forEach(ele => {
      if (ele.isCorrect) ++count;
    });
    return count;
  }
}