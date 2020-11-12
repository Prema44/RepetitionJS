var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);
var myArray =[];
for (var i = num1; i <= num2; i++) {
    if (isPrime(i)) {
        myArray.push(i);
    }
}
console.log(myArray);
function isPrime(num) {
    if (num == 1) {
        return false;
    }
    else if (num == 2) {
        return true;
    }
    else {
        for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}