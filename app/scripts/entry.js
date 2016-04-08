// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import $ from 'jquery';

//a lot of logic is abstracted away in TodoItemView 
import TodoListView from './views/TodoListView'

import personalTodoListCollection from './collections/TodoItemCollection';

import TodoItemView from './views/TodoItemView' 
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

// let personalTodoListCollection = new TodoItemCollection();

$('body').append(personalTodoList.$el);

var settings = {
	success: function() {
		personalTodoListCollection.forEach((todo) => {
			console.log(todo.get('text'));
			let newPersonalTodoListView = new TodoItemView(
				todo.get('text')
			);
			$('.todo-list1').append(newPersonalTodoListView.el);
		});
	}
};
personalTodoListCollection.fetch(settings);






