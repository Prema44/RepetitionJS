var num = process.argv[2];
var factorial = 1 ;
for(var i = num ; i >= 1 ; i--){
    factorial *= i ;
}
console.log("Factorial of " + num + " is " + factorial);