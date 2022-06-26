//Excercise 1
//Store your favorite food into a variable.

//Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

//Console.log I eat <favorite food> at every <favorite meal>
let favoriteFood='chocolate';
let favoriteMeal='dinner';
//console.log('I eat '+ favoriteFood + ' at every '+ favoriteMeal);

//Excercise 2
//Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries;  
//console.log(myWatchedSeriesLength);

//Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//For example : black mirror, money heist, and the big bang theory
let myWatchedSeriesSentence = myWatchedSeriesLength
//console.log('I watched 3 series:'+ myWatchedSeriesSentence);

//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2, 1, 'friends');
//console.log(myWatchedSeries)
//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push('breaking bad')
//console.log(myWatchedSeries)

//Delete the series “black mirror”.
myWatchedSeries.splice(0, 1);
//console.log(myWatchedSeries);

//Console.log the third letter of the series “money heist”.
//console.log(myWatchedSeries[2][6])
//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
//console.log(myWatchedSeries)

//Excercise 3
let celsius=25
let farenheit= celsius/5*9+32
console.log(celsius+ ' °C temperature ' + 'is in '+ farenheit + '°F' )

//Excercise 4
let c;
let a = 34;
let b = 21;
console.log(a+b) //first expression
// Prediction: It will output 55, because a and b are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because a is equal to 2 and b is a numbers
// Actual:23

console.log(3 + 4 + '5');
    // Prediction: It will output 75, because it will sum 3+4 that are numbers plus add the 5 that is a 'text'
    // Actual: 75


