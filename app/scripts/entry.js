// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import $ from 'jquery';
import Backbone from 'Backbone';
import TodoItemView from './views/TodoItemView'  //need ./ or it will look in node_modules

//a lot of logic is abstracted away in TodoItemView 


const TodoListView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element for the TodoListView
	events: {
		'submit .add-todo': 'addTodo'
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		const template = `
		<form class="add-todo">
			<input type="text" class="todo-text">
			<button type="submit">Add Todo</button>
		</form>
		<ul class="todo-list1"></ul>`; 
		this.$el.html(template);

	},
	addTodo: function(e) {
		e.preventDefault();
		let thingToDo = $('.todo-text').val();
	}

});

let workTodoList = new TodoListView();

$('body').append(workTodoList.$el);

// $('#add-todo').on('submit', (e) => {  
// 	e.preventDefault();
// 	let thingToDo = $('#todo-text').val();  
// 	let item = new TodoItemView(thingToDo);
// 	$('#todo-list1').append(item.$el);
// });



// let item1 = new TodoItemView('Wash car');  //here we are instantiating a TodoItemView
// let item2 = new TodoItemView('Do dishes');  //item1 and item2 are objects which are backbone views.
// console.log(item1);

// $('#todo-list1').append(item1.$el); //taking the view and appending it to the element on the page
// $('#todo-list1').append(item2.$el);














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

// const TodoForm = Backbone.View.extend ({
// 	tagName: 'section',
// 	className: 'todoform',
// 	todoItems: [],
// 	events: {
// 		'click .btnSubmit': 'onSubmitClick'
// 	},
	

// 	initialize: function() {
// 		this.tdItems;  
// 		this.render();  
// 	},

// 	//code to build the element
// 	render: function () {  

// 		//adds a text input, button and text area to the page
// 		const template = `
// 			<div class="container">
// 				<input class="txtInput" type="text">
// 				<div>
//  					<button class="btnSubmit">Add to List</button>
//  				</div>
//  				<p class="txtArea">${this.tdItems}</p>
//  			</div>
// 		`;

// 		this.$el.append(template);
// 	},

// 	onSubmitClick: function() {

// 		//create event listener
// 		let buttonEl = document.querySelector('.btnSubmit');
// 		buttonEl.addEventListener('click', textLogger);

// 		function textLogger() {
// 		 	console.log(document.querySelector('.txtInput').value);
// 		 	//	push whatever is in the input box to the array
// 			todoItems.push(document.querySelector('.txtInput').value);
// 			document.querySelector('.txtInput').value = '';
// 			displayResults(todoItems);
// 		}

// 		//adds items from array to text area 
// 		function displayResults(arr) {
			
// 			let tdItems = '';
// 			document.querySelector('.txtArea').innerHTML = '';
// 			for (var i = 0; i < arr.length; i++) {
	
// 			tdItems = (tdItems + arr[i].toString() + '<br>');  
// 			}
// 			document.querySelector('.txtArea').innerHTML = tdItems; 
// 		}	

// 	}

// });


// 	let newTodoForm = new TodoForm(val.tdItems);
// 	$('todo-list').append(newTodoForm.$el);





