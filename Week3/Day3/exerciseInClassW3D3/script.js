//Exercise1

// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

let colors = ["blue", "yellow", "green", "pink"];

function addButton(){
	let div = document.getElementById("containerbtn") //La ubicacion del ID en esta caso DIV
	for (let i = 0; i<colors.length; i++){ //loop para traer todo los colores
		let btn = document.createElement("button"); //en cada vuelta crea un boton
		let text = document.createTextNode(colors[i]); //en cada boton pone los colores de let colore
		btn.classList.add("btn-big"); //agrega la clase que esta en css para darle formato a cada boton
		btn.addEventListener("click", changeBackground); //agrega un evento en cada boton que usa la funcion de changeBackground abajo
		btn.appendChild(text); //agrega al boton el texto del nombre del boton ej blue, red
		div.appendChild(btn) //agrega el boton al div que invocamos al principo
	}
}

addButton()//pone la funcion en html


function changeBackground (ev){ //funcion que usamos para cambiar el color de fondo
	let colorBtn = ev.target.textContent //busca el target en la consol.log y agrega el texto de colors
	document.body.style.backgroundColor = colorBtn; //el texto di es blue lo transforma en blue
}

// Exercise 2

let pics = [
	"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

//1. retrieve the button
let btnImage = document.getElementById("btnimg"); //buscamos el boton de html
let div = document.getElementById("container"); //buscamos el ID

btnImage.addEventListener("click", addImages) //agregamos al boton un eventolistener

function addImages(){ //la funcion va a traer las imagenes
	for (let i = 0; i<pics.length; i++) { //loop que usa para traer todas las imagenes del let pics	
		let newimg = document.createElement("img");//crea la imagen (elemento in hmtl)
		newimg.classList.add("img-small") //agrega la clase para que se linkea a css
		newimg.setAttribute("src", pics[i]);// trae el src de let pic 

		//create a deletebutton
		let btndelete =  document.createElement("button"); //crea el boton delete
		let textbtn = document.createTextNode(`delete pic ${i+1}`)
		btndelete.appendChild(textbtn)
		btndelete.addEventListener("click", deleteImg)

		div.appendChild(btndelete)
		div.appendChild(newimg);
	}
}


function deleteImg(ev){
	// console.log(ev.target) //button we clicked
	// console.log(ev.target.nextElementSibling) //image that is a next sibling of the button
	let imgsibling = ev.target.nextElementSibling;
	imgsibling.remove()
}