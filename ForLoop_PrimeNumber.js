const prompt = require('prompt-sync')();
let primeInput = prompt("Enter the positive number: ");
function isPrime(primeInput){
    for (var i = 2; i < Math.sqrt(parseInt(primeInput)); i++) {
        if (primeInput % i == 0) {
            return false;
        }
    }
    return true;
}
if (primeInput > 1) {
    if (isPrime(primeInput)) {
        console.log(primeInput + " is a prime number");
    } else {
        console.log(primeInput + " is a not prime number");
    }
}else{
    console.log("Invalid input");
}