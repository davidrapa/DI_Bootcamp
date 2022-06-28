//🌟 Exercise 1 : List Of People
let people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
console.log(people.slice(1, 5));
// Write code to replace “James” to “Jason”.
let index = people.indexOf('James');

if (index !== -1) {
    people[index] = 'Jason';
}
console.log(people)
// Write code to add your name to the end of the people array.
people.push("David");
console.log(people)

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.

people.splice(1, 1); 
console.log(people)
// Create a variable called last which value is the last element of the array.
console.log(people.slice(-1))
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for (i of people){
console.log(i)
if (i==='Jason')
break
console.log(i)
}
//🌟 Exercise 2 : Your Favorite Colors
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
let colors = ["blue", "orange", "yellow", "green"]
for (let i=0; i<colors.length; i++) {
console.log ("My favorite" + (i+1)+ " "+ colors[i])

}

// let color = ["Blue ", "Orange", "Violet", "Yellow "];

// function Ordinal(n)
//  {
//  let o = ["th","st","nd","rd"],
//  x = n%100;
//  return x+(o[(x-20)%10]||o[x]||o[0]);
//  }

// for(n = 0; n < color.length; n++){
//  let ordinal = n + 1;

//  let output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

// console.log(output);
// }

// // 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// While the number is smaller than 10 continue asking the user for a new number.
let num;
do {
    num = parseInt(prompt('Give me a number'));
}
while(num < 10 || Number.isNaN(num));

// Exercise 4 : Building Management
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log (building.numberOfFloors)
console.log(building["numberOfAptByFloor"]["firstFloor"])
console.log(building["numberOfAptByFloor"]["thirdFloor"])

console.log(building["nameOfTenants"][1]+building["numberOfRoomsAndRent"]['dan'][0])

if (building.numberOfRoomsAndRent['sarah'][1]+building.numberOfRoomsAndRent['david'][1] > building.numberOfRoomsAndRent['dan'][1]){
    
    console.log(building.numberOfRoomsAndRent['dan'][1]=1200)

}
// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
let family = {
father : "David",
mother : 'Diana',
son : 'Jack',
daughter : 'Maria',
    }

    for (i in family){
        console.log(i+" "+family[i])
    }