function changeLives() {
  $('#lives-span').html(peach.lives);
}

function changeScore() {
  $('#score-span').html(peach.score);
}

$('#button').click(function() {
  $('.begin-game').addClass('game-won-block');
  startGame();
});
