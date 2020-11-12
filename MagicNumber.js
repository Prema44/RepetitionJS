const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Think of a number between 1 and 100(Y/N)', (answer) => {
  if (answer == 'Y') {
    checkNum(50);
  }
});

var checkNum = function (num) {
  rl.question('Is number equal to ' + num, function (answer) {
    if (answer == 'Y') {
      console.log("Magic number is : " + num);
      rl.close();
    }
    else if (answer == 'N') {
      rl.question('Is number greater than ' + num + ' ?(Y/N)', function (answer) {
        if (answer == 'Y') {
          checkNum(Math.floor(num + (num / 2)));
        }
        else if (answer == 'N') {
          checkNum(Math.floor(num - (num / 2)));
        }
      });
    }
  });
}