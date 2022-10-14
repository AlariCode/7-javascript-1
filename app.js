const userFullName = 'Вася Пупкин Васильевич';
console.log(userFullName.split(' '));
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);
console.log(familyName);
console.log(lastName);
const arr = ['Ты', 'знаешь', 'JS'];
console.log(arr.join(' '))