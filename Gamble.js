var amount = 100;
var noOfBets = 0;
var winCount = 0;
while (amount > 0 && amount <= 200) {
    var outcome = Math.floor(Math.random() * 2);
    if (outcome == 0) {
        amount--;
    }
    else {
        amount++;
        winCount++;
    }
    noOfBets++;
}
console.log(winCount);
console.log(noOfBets); 