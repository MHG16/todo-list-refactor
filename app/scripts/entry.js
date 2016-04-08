// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import $ from 'jquery';

//a lot of logic is abstracted away in TodoItemView 
import TodoListView from './views/TodoListView'

import TodoItemCollection from './collections/TodoItemCollection';


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
//instantiate a TodoListView
let personalTodoList = new TodoListView();


$('body').append(personalTodoList.$el);

let personalTodoList = new TodoItemView();
var settings = {
	success: function() {
		personalTodoList.forEach((todo) => {
			//console.log(todo.get('caption'));
			let newPersonalTodoListView = new TodoItemView(
				todo.get('todoitem'),
			);
			$('.todo-list').append(newPersonalTodoListView.el);
		});
	}
};
personalTodoList.fetch(settings);

$('.image-form').on('submit', (e) => {
	e.preventDefault();
	let newPersonalTodoList = {
		todo: $('.src').val(),
	};
	personalTodoList.create(newPersonalTodoList);
	let newTodoListView = new TodoItemView(
		newPersonalTodoList.todoitem;
	);
	$('.image-list').append(newpersonalTodoListView.el);
});





