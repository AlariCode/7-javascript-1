/*
	Задача вывести в консоль строку "Я люблю JS !" из массива,
	проходя циклом в обратном порядке, не используя метод reverse.
	const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArray = [];

for(let i = arr.length - 1; i >= 0 ; i--) {
	resultArray.push(arr[i]);
}
console.log(resultArray.join(' '));

console.log(arr.reverse().join(' '));
