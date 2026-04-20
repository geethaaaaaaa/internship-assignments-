function calculate(a, operator, b) {

switch(operator) {
case '+':
console.log(a + b);
break;

case '-':
console.log(a - b);
break;

case '*':
console.log(a * b);
break;

case '/':
console.log(a / b);
break;

default:
console.log("Invalid operator");
}
}
