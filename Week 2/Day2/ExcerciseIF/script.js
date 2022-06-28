/*let driverAge= prompt('what your age?') 

if (driverAge == 18) {
console.log('Congratulations on your first year of driving. Enjoy the ride!')
} else if (driverAge < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off")
} else {
    console.log("Powering On. Enjoy the ride!")
    
}
*/

let userCartLog = {
	username : "Johnny1",
	password: 123455,
	isUserSignedIn : true,
};

// if (userCartLog['isUserSignedIn'] == true) {
//     console.log(userCartLog['username'],userCartLog['password'])
// }else if (userCartLog['isUserSignedIn'] ==false) {
//     console.log("you need to sign in")
    
// }


if ((userCartLog['username'] == 'Johnny') && (userCartLog['password'] == 12345)) {
    console.log("You are signed in")
}else if ((userCartLog['username'] == 'Johnny') && (userCartLog['password'] == 1234)) {
        console.log("One credential is false")
    }else {
        console.log("you need to sign in")
}
    
//PART I
//1. If the user is SignedIn - show him his name and password
//2. If not - alert the user "you need to sign in"
//PART II
//2nd exercise
//1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
//2. If the user is Johnny OR his password is 1234 - alert him "One credential is false"
//3. Else,alert the user "you need to sign in
