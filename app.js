'use strict';

const panelText = document.querySelector('.panel').innerText;
console.log(panelText);
document.querySelector('.panel').innerText = 'New text';
document.querySelector('.input').value = 'Text';