let history = [];


let historyMad = document.forms[0];


historyMad.addEventListener("submit", tellHistory);

function tellHistory (ev) {
	ev.preventDefault(); 
	let objHistory = {
		noun : historyMad.elements.noun.value, adjective : historyMad.elements.adjective.value, person : historyMad.elements.person.value,
        verb : historyMad.elements.verb.value, place : historyMad.elements.place.value,
	}
	historyMad.push(objHistory);
	console.log(history)
}


let btndisplay = document.getElementById('lib-button');
btndisplay.addEventListener("click", displayHistory);

function displayHistory () {
	let div = document.getElementById("story");
	for (let i = 0; i<history.length; i++){
		let eachword = history[i];
		let tell = document.createElement("article");
		let text = document.createTextNode(`${eachword["noun"]} : ${eachword["adjective"]} : ${eachword["person"]} : ${eachword["verb"]}: ${eachword["place"]}`)
		tell.appendChild(text);
		text.appendChild(tell)
	}
	text.appendChild(tell)
}

