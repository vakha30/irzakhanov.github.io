var makeElement = function (tagName, className) {
	var element = document.createElement(tagName);
	element.classList.add(className);
	return element;
}

var list = document.querySelector('.blocks');
var isWidth = true;
var width = 20;
var isElips = false;

var btnSize = document.getElementById('size-block');
var btnElips = document.getElementById('elips');
var btnSizeEnter = document.getElementById('size-enter');
var modalElement = document.querySelector('.modal-input');

var btnModalEnter = document.getElementById('modal-enter-btn');

var input = document.getElementById('size-input');

var btnClear = document.getElementById('clear-content');

let elipsText = document.getElementById('elips-text');
let sizeText = document.getElementById('size-text');
let text = 'Квадрат';

let polzunok = document.getElementById('polzunok');

width = polzunok.value;


function polz() {
	width = polzunok.value;
	sizeText.innerHTML = width;

}

btnClear.onclick = function() {
	if (list.children.length > 0) {
		list.children[list.children.length - 1].remove();
	}
}

btnModalEnter.onclick = function () {
	modalElement.style.display = "none";
	width = input.value;
	sizeText.innerHTML = width;
	polzunok.value = width;
}


btnSizeEnter.onclick = function () {
	modalElement.style.display = 'block';
}



btnElips.onclick = function () {
	if(isElips) {
		isElips = false;
		text = 'Квадрат';
	}
	else {
		isElips = true;
		text = 'Круг';
	}
	elipsText.innerHTML = text;
}


btnSize.onclick = function () {
	if (isWidth) {
		width = 40;
		isWidth = false;
	}
	else {
		width = 20;
		isWidth = true;
	}
	sizeText.innerHTML = width;
	polzunok.value = width;
}
elipsText.innerHTML = text;
sizeText.innerHTML = width;

var addBlock = function () {
		var block = makeElement('li', 'block');
		list.appendChild(block);
		block.style.width = width + 'px';
		block.style.height = width + 'px';
		if (!isElips) {
			block.style.borderRadius = '0';
		}
		else {
			block.style.borderRadius = '50%';
		}
} 


