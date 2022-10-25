'use strict';

const b = 1;

const a = {
	b,
	getB: function () {
		return this.b;
	},
	getBAlt() {
		return this.b;
	}
}

console.log(a.getBAlt())
