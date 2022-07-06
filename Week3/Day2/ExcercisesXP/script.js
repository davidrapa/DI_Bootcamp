
// Using DOM methods, remove the last paragraph in the <article> tag.




// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.getElementsByTagName('h1')
    console.log(h1[0])
    
    // Using DOM methods, remove the last paragraph in the <article> tag.
    let p = document.getElementsByTagName('p')
    document.body.children[0].lastElementChild.remove()
    let h2 = document.getElementsByTagName('h2')[0]
    h2.addEventListener('click', function(){
    document.getElementsByTagName('h2')[0].style.backgroundColor='red'
    })
    // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
    let h3 = document.getElementsByTagName('h3')[0]
    console.log(h3)
    h3.onclick = function(){
        document.getElementsByTagName('h3')[0].style.display = "none";
    }

    
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
    let button=document.createElement('button')
    let article =document.body.children[0]
    console.log(article)
    article.appendChild(button)
    button.innerHTML+='click'
    button.addEventListener('click', function(){
        let ps =document.getElementsByTagName('p')
        // console.log(bold)
        for(let i=0; i<ps.length; i++){
        ps[i].style.fontWeight = "900";
    }})

