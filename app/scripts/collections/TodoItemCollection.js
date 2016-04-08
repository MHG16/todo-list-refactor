import Backbone from 'backbone';
import TodoItemModel from './models/TodoItemModel';

const ToDoItemCollection = Backbone.Collection.extend({
	model: TodoItemModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/mhgrossmann/todolist'
});



export default TodoItemCollection;