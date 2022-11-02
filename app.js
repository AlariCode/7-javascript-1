'use strict';

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	// document.querySelector('.notification').classList.add('notification_active');
	// document.querySelector('.notification').classList.remove('notification_hidden');
	console.log(document.querySelector('.notification').getAttribute('class'));
	document.querySelector('.notification').setAttribute('class', 'notification')
	document.querySelector('.notification').setAttribute('key', 1);
	document.querySelector('.notification').setAttribute('user-id', 1);
	console.log(Number(document.querySelector('.notification').getAttribute('user-id')));
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm()
	}
}