// 🌟 Exercise 1 : Users
// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// let divRet = document.getElementById ("container");
// console.log(divRet);


// let text = document.querySelectorAll("list")[1];
// text = 'Richard';
// console.log(text);


// let li1 = document.querySelectorAll(".list")
// li1.forEach(element => {
//     console.log (element)  
//     element.firstChild.innerHTML = 'David'
// });
// li1[0].firstElementChild.innerHTML = 'David'



// let rem1 = document.querySelectorAll('.list')[1]
// rem1.removeChild(rem1.children[1])
// console.log(rem1)




// 🌟 Exercise 2 : Users And Style
// Instructions

// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.

// Do not display the <li> that contains the text node “John”.

// Add a border to the <li> that contains the text node “Pete”.

// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let background = document.querySelectorAll ("div")[1]
console.log(background)
background.style.backgroundColorc = "light blue"
background.style.padding = "10px";

let selec = document.querySelectorAll ('ul')[2];
selec.removeChild(selec.children [0]);  
console.log(selec)

let bord = document.querySelectorAll("ul")[2]
console.log(bord)
    bord.style.border = 'thick solid black'

// Exercise 3 : Change The Navbar
// Instructions


// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// let navBar1=document.getElementById("navBar").id = "socialNetworkNavigation";
// console.log(navBar1)


var newLi = document.createElement("li");
  var newContent = document.createTextNode("Test");
  newLi.appendChild(newContent); 
  var currentLi = document.getElementById("navBar");
  document.body.insertBefore(newLi, currentLi);