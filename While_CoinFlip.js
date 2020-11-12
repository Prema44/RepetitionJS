var headWins = 0;
var tailWins = 0;
var num = 0;
//While count of 11 wins is not reached
while (headWins < 11 && tailWins < 11) {
  num = Math.floor(Math.random() * 2);
  if (num == 0) {
    headWins++;
  }
  else {
    tailWins++;
  }
}
console.log(headWins);
console.log(tailWins); 