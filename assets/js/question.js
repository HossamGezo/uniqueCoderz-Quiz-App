export default class Questions {
  constructor(question) {
    // ! ------------------ Variables
    this.question = document.querySelector(".question");
    this.answers = document.querySelector(".chooses");
    this.submitQuestion = document.querySelector(".submit-question");
    // ! ------------------ Question Object
    this.questionHead = question.question;
    this.correctAnswer = question.correct_answer;
    this.incorrectAnswer = question.incorrect_answers;
    this.allAnswers = [this.correctAnswer, ...this.incorrectAnswer];
    this.isCorrect = false;
  }
  answer(checkElement) {
    this.isCorrect = checkElement.textContent === this.correctAnswer ? true : false;
  }
  render() {
    // ! Question Head
    this.question.innerHTML = this.questionHead;
    // ! Question Answers
    this.answers.innerHTML = "";
    let index = this.randomIndex();
    for (let i = 0; i < 4; ++i) {
      this.answers.innerHTML += `
        <label for="q${i+1}" class="ques">
          <h3>${this.allAnswers[index[i]]}</h3>
          <input type="radio" name="choose" id="q${i+1}">
        </label>
      `;
    }
  }
  randomIndex() {
    let index = [];
    while (true) {
      let idex = Math.trunc(Math.random() * 4);
      if (!index.includes(idex)) index.push(idex);
      if (index.includes(0) && index.includes(1) && index.includes(2) && index.includes(3)) {
        return index;
      } 
    }
  }
}