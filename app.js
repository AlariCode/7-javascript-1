'use strict';

function changeBalance() {
	let balance = 0;
	let key = 'asd';
	return function(sum) {
		balance += sum;
		key = 'adsf';
		console.log(`Баланс: ${balance}`);
	}
}

const change = changeBalance();
change(100);
change(-50);
change(200);
console.dir(change);

const change2 = changeBalance();
change2(100);
console.dir(change2);