if (
  barrel1.x > (peach.x - 8) && barrel1.x < (peach.x + 8)
   )
    // peach.x === barrel2.x ||
    // peach.x === barrel3.x ||
    // peach.x === barrel4.x ||
    // peach.x === barrel5.x ||
    // peach.x === barrel6.x ||
    // peach.x === barrel7.x ||
    // peach.x === barrel8.x ||
    // peach.x === barrel9.x ||
    // peach.x === barrel10.x)
    {
  peach.lives -= 1;
  console.log(peach.lives);
}
