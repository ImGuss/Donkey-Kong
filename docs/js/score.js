function setHighScore() {

  peach.highScore = localStorage.getItem("highScore");

  if (peach.highScore !== null) {
      if (peach.score > peach.highScore) {
          localStorage.setItem("highScore", peach.score);
      }
  }
  else {
      localStorage.setItem("highScore", peach.score);
  }

}
