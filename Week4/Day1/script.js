let text = "Hello";

function checkText (){
	console.log("In the function",text); 
	text += " World"; //this modified the let
	console.log("Still in the function",text);
}

console.log("before the function", text); //the let still hello

checkText() //invoke the function

console.log("after the function", text); //the let text now is world because the function and global variable

let friend = "Harry";

function checkfriend (){
	let friend = "Alice"; // new variable, in the scope, its not the same as the global variable
	console.log("In the function",friend); 
	friend += " Smith"; //change the local variable to add smith
	console.log("Still in the function",friend);
}

console.log("before the function", friend); //will console log harry

checkfriend() //invoke the function

console.log("after the function", friend); //still the same because the variable hasnt change, just the local 

// ## Exercise 1:
// 1. Greet the user with his name, the user's name is a parameter. Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

const david = function calculo (x){
let square = x*x
console.log(square)
}

david(3)

const david1 = (x) => x*x
let result = david1(2);
console.log(result)