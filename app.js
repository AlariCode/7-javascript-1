'use strict';
// IIFE

function init() {
	console.log('Start');
}
init();

(function() {
	console.log('Start IIFO');
	const a = 1;
})();

console.log(a);