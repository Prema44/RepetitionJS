  var num = process.argv[2];
var result = 0;
for (var i = 1; i <= num; i++) {
    result += 1 / i;
}
console.log("Nth Harmonic number is : " + result);