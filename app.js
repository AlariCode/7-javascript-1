const user = {
	name: 'Вася',
	surname: 'Пупкин',
	age: 24,
	skills: [
		'Программирование',
		'Готовка'
	],
	eduBasic: 'Школа 10',
	eduPro: 'МФТИ'
};
console.log(user.city);
console.log(user.skills);
console.log(user['skills']);
const level = 'Pro'
console.log(user['edu' + level]);

// const res = prompt('Введите свойство');
user.city = 'Москва';
user['city'] = 'Москва';
console.log(user.city);

user.age = 30;
user['age'] = 30;
console.log(user);