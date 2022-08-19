const roles = ['user', 'admin', 'manager'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);
const elIndex2 = roles.indexOf('superuser');
console.log(elIndex2);

if (roles.indexOf('admin') >= 0) {
	console.log('Доступ есть');
}

console.log(roles.includes('admin'));
console.log(roles.includes('superuser'));

if (roles.includes('admin')) {
	console.log('Доступ есть');
}