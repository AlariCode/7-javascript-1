/*
	Есть выгрузка операций пользователя
	const operations = [1000, -700, 300, -500, 10000];
	а так же начальный баланс в 100$
	Необходимо сделать функции расчёта:
	- Итогового баланса
	- Наличия отрицательного баланса (если после очередной операции
		баланс < 0, то выдавать false)
	- Расчёта среднего расхода и среднего дохода
*/
const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initailBalance) {
	let balance = initailBalance;
	for (const element of arrayOfOperations) {
		balance += element;
	}
	return balance;
}

console.log(getBalance(operations, startingBalance));

function checkOperations(arrayOfOperations, initailBalance) {
	let balance = initailBalance;
	let isOk = true;
	for (const element of arrayOfOperations) {
		balance += element;
		if (balance < 0) {
			isOk = false;
			break;
		}
	}
	return isOk;
}

console.log(checkOperations(operations, startingBalance));

function avarageOperations(arrayOfOperations) {
	let positiveCount = 0;
	let positiveSum = 0;
	let negativeCount = 0;
	let negativeSum = 0;
	for (const element of arrayOfOperations) {
		if (element > 0) {
			positiveCount++;
			positiveSum += element;
		}
		if (element < 0) {
			negativeCount++;
			negativeSum += element;
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(avarageOperations(operations));