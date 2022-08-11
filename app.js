function logName(name, surname) {
	console.log(`Моё имя ${name} ${surname}`);
}

logName('Антон', 'Ларичев');

function countDepositSum(depositInUSD, month, rate) {
	return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

console.log(countDepositSum(1000, 48, 0.10));

