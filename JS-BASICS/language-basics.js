// variables
let myVariable;
myVariable = 'Bob';
// same line
let myVariable = 'Bob';
myVariable;
// changing variable
let myVariable = 'Bob';
myVariable = 'Steve';
// differents values variables may hold
// String
let myVariable = 'Bob';
// Number
let myVariable = 10;
//  Boolean
let myVariable = true;
// Array
let myVariable = [1, 'Bob', 'Steve', 10]
// Array myVariable[0], myVariable[1]
// Object
let myVariable = document.querySelector('h1');
// Comments these are comments
/*
    multiline comment
*/

// Operators
// Addition
6 + 9;
'Hello' + 'World!'
// Subtraction, Multiplication, Division
9 - 3
8 * 2
9 / 3
// Assignment
let myVariable = 'Bob';
// Strict equality
let myVaribale = 3;
myVariable === 4;
// Not, Does not equal
let myVariable = 3;
!(myVariable === 3);
let myVariable - 3;
myVariable !== 3;

// Conditionals
// if...else
let iceCream = 'choclate';
if(iceCream === 'choclate') {
    alert('Yay i love choclate ice cream!')
} else {
    alert('Awww, but choclate is my favorite...')
}

// Functions 
// Ones we have seen
let myVariable = 'Bob';
alert('hello!');
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
multiply(4,7)
multiply(20, 20)
multiply(0.5, 3)

// Events
document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
});
// Equivalent to 
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});
// Arrow example
document.querySelector('html').addEventListener('click', () => {
    alert('Ouch! Stop poking me!');
});