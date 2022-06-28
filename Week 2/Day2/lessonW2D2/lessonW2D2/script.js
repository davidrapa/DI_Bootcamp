// Nested arrays
let tshirts = [["tshirt1", "M", 12], ["tshirt2", "L", 10]];

// objects

// let variableName = {
//   property: value,
//   property: value,    
// };

// array is an ordered list
let colors = ["blue", "red", "yellow"];
let favoriteColor = colors[1]

let tshirt1 = {
	size : "M",
	price: 12,
}

// syntax to retrieve data from an object
// dot notation
// objectName.keyName
// square bracket notation
// objectName["keyName"]

let priceShirt = tshirt1.price;
let priceShirtOther = tshirt1["price"];

// console.log(priceShirt) //12
// console.log(priceShirtOther) //12
// console.log(tshirt1.price, tshirt1.size)

// add the color of the shirt
tshirt1["color"] = "red";
// console.log(tshirt1)

// modify a value
tshirt1["size"] = "L";
console.log(tshirt1)

let family = {
	lastname : "Smith",
	members : 4,
	hasADog : true,
	nameOfMembers : ["Lea", "David", "Mom", "Dad"],
	friends : {
		name : "Jack",
		lastname : "ABC",
		age : 12,
		favoriteColors : ["blue", "red"],
	}
};

//1 Name of the family
// console.log(family.lastname);
console.log(family["lastname"]);

//2. name of 2nd member of the family
console.log(family["nameOfMembers"][1]);

//3. Age of the friend
console.log(family["friends"]["age"]);
//the same as
console.log(family.friends.age);

//4. Display the first favorite color of Jack
console.log(family["friends"]["favoriteColors"][0]);
// same
console.log(family.friends.favoriteColors[0]);


// I want to sell 3 tshirst
// each one has a size, a color, a price

// a list of tshirt, I need an array

// let shopping = [<1>, <2>, <3>];
// an array of object
let shopping = [
	{ 
		price: 12,
		size: "M",
		color: "red"
	}, 
	{
		price: 14,
		size: "L",
		color: "blue"
	}, 
	{
		price: 20,
		size: "S",
		color: "yellow"
	}
];

console.log(shopping)
// how to get the price of the 2nd tshirt
console.log(shopping[1]["price"])
// same
console.log(shopping[1].price)

let list = ["red", "blue"]


// let allT = {
// 	tshirt1 : {

// 	},
// }