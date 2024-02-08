import Quiz from "./quiz.js";

export default class Settings {
  constructor() {
    this.quiz = document.querySelector(".quiz");
    this.number = document.querySelector(".num-questions input");
    this.category = document.querySelector("select");
    this.difficulty = document.getElementsByName("quiz");
    this.submit = document.querySelector(".submit");
    this.quizQues = document.querySelector(".quiz-questions");
    this.submit.addEventListener("click", this.startQuizApp);
    this.quizApp = {};
  }
  startQuizApp = async () => {
    let numberOfQuestions = this.number.value;
    let category = this.category.options[this.category.options.selectedIndex].value;
    let difficulty;
    for (let i = 0; i < this.difficulty.length; ++i) {
      if (this.difficulty[i].checked) {
        difficulty = this.difficulty[i].value;
        break;
      }
    }
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`;
    try {
      let {results} = await this.fetchData(url);
      // ! Quiz File We Take [quiz Element, Number Of Questions, Results]
      this.quiz.style.display = "none";
      this.quizQues.style.display = "block";
      this.quizApp = new Quiz (this.quizQues, numberOfQuestions, results);
    } catch (err) {
      alert(err);
    }
  }
  fetchData = async (url) => {
    let myResult = await (await fetch(url)).json();
    return myResult;
  }
}