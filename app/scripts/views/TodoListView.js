import $ from 'jquery';
import Backbone from 'backbone';
import TodoItemView from './TodoItemView'


//TodoListView is a view that is created for the form which has an input field, a submit button 
//and an unordered list that is the todo-list

const TodoListView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element for the TodoListView
	events: {
		'submit .add-todo': 'addTodo' //event listener.  Submit on the add-todo class and then calls the
		//addTodo function   
	},
	initialize: function() {
		this.render();
	},
	render: function() {  //code to put the elements needed into the root element
		const template = `
		<form class="add-todo">
			<input type="text" class="todo-text">
			<button type="submit">Add Todo</button>
		</form>
		<ul class="todo-list1"></ul>`; 
		this.$el.html(template);  //html here replaces anything in the section with the template.

	},
	addTodo: function(e) {  //function that runs when user submits form.  
		e.preventDefault();  //prevents the default behavior 
		let thingToDo = this.$('.todo-text').val(); //this.$ only searches the specific view I am in
		let item = new TodoItemView(thingToDo);  //instantiate a TodoItemView 
		this.$('.todo-list1').append(item.$el);  //adds a todo item to the page
	}

});

export default TodoListView;  //necessary to link to entry.js

