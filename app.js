'use strict';

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	document.querySelector('.notification').classList.remove('notification_hidden');
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm()
	}
}

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;
document.querySelector('.test').appendChild(newElement);