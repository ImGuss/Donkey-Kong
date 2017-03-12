$(document).ready(function(){
  var newDiv;

  for (x = 0; x < 20; x++) {
    for (i = 0; i < 20; i++) {
      newDiv = document.createElement('div');
      $(newDiv).addClass('grid-cell');
      $(newDiv).attr('id', 'cell-' + x + '-' + i);
      $('#grid').prepend(newDiv);
    }
  }
});
