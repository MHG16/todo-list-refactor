import Backbone from 'backbone';

const TodoItemModel = Backbone.Model.extend({
	defaults: {
		todoitem: 'No todo items available'
		
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/mhgrossmann/todolist'
	idAttribute: '_id'
});



export default TodoItemModel;