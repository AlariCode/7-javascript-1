const operations = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations) {
// 	balance += operation;
// }


const finalBalance = operations.reduce((acc, operation, i) => {
	console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`);
	return acc += operation;
}, 0);

console.log(finalBalance);

const minElement = operations.reduce((acc, operation) => {
	if (operation > acc) {
		return acc;
	} else {
		return operation
	}
}, 0);
console.log(minElement);

// 0 - acc = 0, value = 100
// 1 - acc = 100, value = -20