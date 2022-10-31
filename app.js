'use strict';

/* 
	Сделать функицю пользовтеля, которая берёт за основу
	userInfo и за счёт замыкания создаёт новый объект, с
	котором можно работать как user1().increse(100)
*/

const userInfo = {
	balance: 0,
	operations: 0,
	increse(sum) {
		this.balance +=sum;
		this.operations++;
	}
}

function user() {
	const userObj = {
		balance: 0,
		operations: 0,
		increse(sum) {
			this.balance +=sum;
			this.operations++;
		}
	};
	return function() {
		return userObj;
	}
}

const user1 = user();
user1().increse(100);
user1().increse(100);
console.log(user1());

const user2 = user();
user2().increse(100);
console.log(user2());