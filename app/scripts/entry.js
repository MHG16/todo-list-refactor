// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import $ from 'jquery';

import TodoListView from './views/TodoListView'
//a lot of logic is abstracted away in TodoItemView 

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

let personalTodoList = new TodoListView();


$('body').append(personalTodoList.$el);



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



