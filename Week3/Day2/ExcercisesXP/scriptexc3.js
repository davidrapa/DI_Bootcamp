// Declare a global variable named allBoldItems.
let allBoldItems;
// Create a function called getBold_items() that takes no parameter. This function should collect
// all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items(){
  allBoldItems = Array.from(document.querySelectorAll("p strong"));
}
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
  getBold_items();
  for(i in allBoldItems){
    allBoldItems[i].style.color = "blue";
  }
}
// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
  getBold_items();
  for(i in allBoldItems){
    allBoldItems[i].style.color = "black";
  }
}
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function return_normal() on-mouseout (ie. when the mouse pointer is moved out of the paragraph).
// Look at this example
document.getElementsByTagName("p")[0].addEventListener("mouseover", highlight);
document.getElementsByTagName("p")[0].addEventListener("mouseout", return_normal);