// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();


// 1. Use an event listener and event handler to console.log whatever is in the input box whenever 
//the button is clicked.
// 2. Create an empty array. Whenever the button is clicked, whatever is in the input box should be 
//added to the array.
// 3. Create a function called render that clears out all of the html inside of the section.
// 4. Inside your render function, after the contents of your section is cleared, iterate over your
// array and build up a HTML string that contains all of the todo items in your array. Then set that
// newly created string to the contents of your section.


//1. Target the element we're trying to listen for the event on
//2. Tell a function to run when that event happens
//3. Create the function  

var arr = [];
var buttonEl = document.querySelector('.btnSubmit');
buttonEl.addEventListener('click', textLogger);

//Inputs: None
//Outputs: None

function textLogger() {
	console.log(document.querySelector('.txtInput').value);
	//push whatever is in the input box to the array
	arr.push(document.querySelector('.txtInput').value);
	document.querySelector('.txtInput').value = '';
	render(arr);
}


//render clears out all of the html inside of the section 
//and then iterates over the array and builds up an html string that contains all the todo 
//items in the array.
//Then set that newly created string to the contents of the section.  

//Inputs: array
//Outputs:  None

function render(arr) {
	var todoItems = '';

	document.querySelector('.txtArea').innerHTML = '';
	for (var i = 0; i < arr.length; i++) {
	
	todoItems = (todoItems + arr[i].toString() + '<br>');  
	}
	document.querySelector('.txtArea').innerHTML = todoItems; 
}

