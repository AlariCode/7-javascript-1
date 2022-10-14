const arr = [1, 2, 3, 4, 5];

console.log(new Array(1, 2, 3, 4, 5));
const arr2 = new Array(5);
console.log(arr2);
arr2.fill(1, 0, 3);
arr2.fill(2, 3, 5);
console.log(arr2);

const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(arr3)