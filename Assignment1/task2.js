function add(n1, n2) {
    return n1 + n2;
}
var a = add(10, 20);
console.log("sum of two numbers using normal function: " + a);
console.log("Arrow function");
var b = function (a, b) { return a + b; };
console.log(b(10, 20));
console.log("CAPITALIZE LETTERS IN STRING");
var str = function (s) { return s.toLocaleUpperCase(); };
console.log(str('akrivia'));
function capitalize(s) {
    console.log(s.toLocaleUpperCase());
}
capitalize('akrivia company');
