'use strict';
/*
	Создайте объект пользователя с паролем.
	С помощью функции ниже удалить пароль сделав
	функцию сброса пароля
 */

function removePassword(reset) {
	if (reset) {
		this.password = undefined;
	} else {
		this.password = '1';
	}
}

const user = {
	login: 'a@a.ru',
	password: '12345'
};

const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user);