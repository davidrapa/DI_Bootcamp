let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};
userCart["lastname"] = "Smith";
userCart.prices['pear']*=1.17;
let userAnswer = prompt ('What fruit do you want? between Apple, Banana and Pear').toLowerCase();
console.log(userAnswer)
console.log(userCart['prices'][userAnswer]);


//1. Add the lastname Smith to the object
//2. Change the price of the pear, so it will contain the Taxes. (17%)
//3. Ask the user for the fruit he wants between Apple, Banana and Pear.
//Make sure that your code accept all type of strings,
//for example "Banana" or "banana" or "BaNaNA"
//4. Console.log the price for the specific fruit the user wants