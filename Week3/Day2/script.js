let uls = document.getElementsByTagName('ul');
// <li> 7 </li>

let li = document.createElement('li');
li.textContent = '7'; //innerText innerHTML
// li.className.add('my_class_name');
li.setAttribute('id','myli');
li.style.color = 'red';

uls[0].appendChild(li);

let _old = uls[0].children[4];

let _new = uls[0].children[uls[0].children.length-1];


uls[0].replaceChild(_new,uls[0].children[4]);
uls[0].appendChild(_old)