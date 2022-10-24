'use strict';

const user = {
	firstName: 'Вася',
	lastName: 'Пупкин',
	age: 20,
	getUserInfo: function() {
		console.log(this);
		console.log(`${this.firstName} ${this.lastName}`);

		const canDrink = () => {
			if (this.age >= 18) {
				console.log('Может уже пить!');
			} else {
				console.log('Не может пить!');
			}
		}
		// const self = this;
		// function canDrink() {
		// 	if (self.age >= 18) {
		// 		console.log('Может уже пить!');
		// 	} else {
		// 		console.log('Не может пить!');
		// 	}
		// }
		canDrink();
	},
	getUserInfoArrow: () => {
		console.log(this);
		console.log(`${this.firstName} ${this.lastName}`);
	}
};

user.getUserInfo();
// user.getUserInfoArrow();