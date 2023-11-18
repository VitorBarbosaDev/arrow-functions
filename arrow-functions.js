/**
 * To run this file , use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
/*
function addtwonumbers(x, y) {
	// code block
	return x + y;
}
let sum = addtwonumbers(3, 5);
console.log(sum);
*/
// Arrow Function With Parameters
const addtwonumbers =(x, y) => 
{
	// code block
	return x + y;
}

let sum = addtwonumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addtwonumbers2 =(x, y) => x + y;
let sum2 = addtwonumbers2(3, 5);
console.log(sum2);

// Implicit Returns
const saySomething = message=> console.log(message);
saySomething('Hello World');
const sayHello = () => console.log('Hello World');
sayHello();
// Returning Multiple Lines

const returnMultipleLines = () => (
	`<p>
		Hello World
	</p>`
)

console.log(returnMultipleLines());
