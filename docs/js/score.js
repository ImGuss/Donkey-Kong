// setInterval(function() {
//   localStorage.setItem("highScore", peach.highScore);
//   if (peach.score >= peach.highScore) {
//     peach.highScore = peach.score;
//     changeHighScore();
//   } else {
//     peach.highScore = localStorage.highScore;
//     changeHighScore();
//   }
//   localStorage.setItem("highScore", peach.highScore);
// }, 0);

function setHighScore() {
  console.log(peach.highScore);
  if (peach.highScore === 0) {
    peach.highScore = peach.score;
    localStorage.highScore = peach.highScore;
  } else if (localStorage.highScore > peach.highScore) {
    return;
  } else if (localStorage.highScore < peach.highScore) {
    peach.highScore = localStorage.highScore;
  }

}
