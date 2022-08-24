const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];


for(let i = 0; i < tasks.length; i++) {
	if (tasks[i] === 'Задача 2') {
		continue;
	}
	console.log(tasks[i]);
}
console.log('-----')
for(let i = 0; i < tasks.length; i++) {
	if (tasks[i] === 'Задача 2') {
		break;
	}
	console.log(tasks[i]);
}