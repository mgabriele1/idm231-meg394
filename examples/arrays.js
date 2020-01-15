//Arrays
const myArray = [];

console.log('myArray legnth is: ' + myArray.length);

myArray[0] = 'hello';
myArray[1] = 'world';

console.log('myArray legnth is: ' + myArray.length);
console.log('myArray[0] is ' + myArray[0]);

const flagColors = ['red', 'white', 'blue'];
console.log(flagColors[2]);

console.log(flagColors);
//remove white
flagColors.splice(1, 1);
console.log(flagColors);
