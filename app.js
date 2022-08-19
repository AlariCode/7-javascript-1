const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);

const arrLenght = users.push('Никита');
console.log(users);
console.log(arrLenght);

users.unshift('Вася');
console.log(users);

const el = users.pop();
console.log(el);
console.log(users);

const el2 = users.shift();
console.log(el2);
console.log(users);
