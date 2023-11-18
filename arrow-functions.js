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


// Challenge 1

let students = [
	{
		name: 'John',
		subjects: ['maths', 'english', 'cad'],
		teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
		results: {maths: 90, english: 75, cad: 87},
	},
	{
		name: 'Emily',
		subjects: ['science', 'maths', 'english', 'art'],
		teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
		results: {science: 93, maths: 95, english: 80, art: 95},
	},
	{
		name: 'Adam',
		subjects: ['science', 'maths', 'art'],
		teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
		results: {science: 63, maths: 79, art: 95},
	}
];

const averagePoints = (arr,subject) => {
	let total = 0;
	let count = 0;
	arr.forEach(student => {
		if (student.results[subject]) {
			total += student.results[subject];
			count++;
		}
	});
	return total / count;
}

// Declare a variable named averageMarks
let averageMarks = averagePoints(students, 'english'); 
// Log out the variable averageMarks to see its value
console.log(averageMarks);


