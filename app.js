console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);

let a = 'Марина';
const username = a || 'Петя';
console.log(username);

const isAdmin = true;
const filename = isAdmin && 'file.mp4';
console.log(filename);