/*
	Дан список задач
	const tasks = ['Задача 1'];
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию 
	Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];

function Add(task) {
	tasks.push(task);
}

function Remove(task) {
	const index = tasks.indexOf(task);
	if (index === -1) {
		return;
	}
	return tasks.splice(index, 1);
}

function Prioritize(task) {
	const result = Remove(task);
	if (!result) {
		return;
	}
	tasks.unshift(result[0]);
}

Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 2');
console.log(tasks);
Prioritize('Задача 3');
console.log(tasks);
