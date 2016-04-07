import $ from 'jquery';
import Backbone from 'backbone';
import TodoItemView from './views/TodoItemView';


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
		let thingToDo = this.$('.todo-text').val(); //this.$ only searches the specific view I am in
		let item = new TodoItemView(thingToDo);
		this.$('.todo-list1').append(item.$el);  //adds all todo-list1s to the page
	}

});

export default TodoListView;

