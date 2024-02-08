export default class Final {
  constructor(correctAnswers, totalAmount) {
    // ! ---------- Varaibles
    this.score = document.querySelector(".score");
    this.again = document.querySelector(".again");
    this.render(correctAnswers, totalAmount);
    // ! ---------- Events
    this.again.addEventListener("click", this.startAgain);
  }
    // ! ---------- Functions
  render(correctAnswers, totalAmount) {
    this.score.innerText = `You Answered ${correctAnswers} Out Of ${totalAmount}`;
  }
  startAgain = () => {
    window.location.reload();
  }
}