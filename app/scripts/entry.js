// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import $ from 'jquery';
import Backbone from 'Backbone';


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


/**************************************************
Refactor your vanilla js todo list from day 14 to use backbone views, models and collections. 
Break down your todo list as follows:

src/scripts/main.js should hold your _instantiated _ collection of todo items. It should also 
instantiate your todo item views (see below).

It should have a render method.
It should listen for click events.
When a click event occurs, it should update the model to toggle the completed status.
It should listen for change events to the model.
When a model change event occurs it should re-render the item.

**************************************************/

const TodoForm = Backbone.View.extend ({
	tagName: 'form',
	className: 'todoform',
	todoItems: [],
	events: {
		'click .btnSubmit': 'onSubmitClick'
	},
	

	initialize: function() {

		this.render();  
	},

	//code to build the element
	render: function () {  

		const template = `
			<input class="txtInput" type="text">
			<div>
 				<button class="btnSubmit">Add to List</button>
 			</div>
 			<p class="txtArea" ${this}></p>
		`;



		this.$el.append(template);
	},

	onSubmitClick: function() {

		let buttonEl = document.querySelector('.btnSubmit');
		buttonEl.addEventListener('click', textLogger);

		function textLogger() {
		 	console.log(document.querySelector('.txtInput').value);
		 	//	push whatever is in the input box to the array
			arr.push(document.querySelector('.txtInput').value);
			document.querySelector('.txtInput').value = '';
			render(arr);
		}

		function render(arr) {
			let todoItems = '';

			document.querySelector('.txtArea').innerHTML = '';
			for (var i = 0; i < arr.length; i++) {
	
			todoItems = (todoItems + arr[i].toString() + '<br>');  
			}
			document.querySelector('.txtArea').innerHTML = todoItems; 
		}	

	};




	let newTodoForm = new TodoForm(this.);
	$('todo-list').append(newImageView.$el);
});






// var arr = [];
// var buttonEl = document.querySelector('.btnSubmit');
// buttonEl.addEventListener('click', textLogger);

// //Inputs: None
// //Outputs: None

// function textLogger() {
// 	console.log(document.querySelector('.txtInput').value);
// 	//push whatever is in the input box to the array
// 	arr.push(document.querySelector('.txtInput').value);
// 	document.querySelector('.txtInput').value = '';
// 	render(arr);
// }


//render clears out all of the html inside of the section 
//and then iterates over the array and builds up an html string that contains all the todo 
//items in the array.
 //Then set that newly created string to the contents of the section.  

// //Inputs: array
// //Outputs:  None

// function render(arr) {
// 	var todoItems = '';

// 	document.querySelector('.txtArea').innerHTML = '';
// 	for (var i = 0; i < arr.length; i++) {
	
// 	todoItems = (todoItems + arr[i].toString() + '<br>');  
// 	}
// 	document.querySelector('.txtArea').innerHTML = todoItems; 
// }

