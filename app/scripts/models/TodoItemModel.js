import Backbone from 'backbone';

const TodoItemModel = Backbone.Model.extend({
	
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/mhgrossmann',
	idAttribute: '_id'
});



export default TodoItemModel;