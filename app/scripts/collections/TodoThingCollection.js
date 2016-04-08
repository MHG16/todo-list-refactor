import Backbone from 'backbone';
import TodoThingModel from './models/TodoThingModel';

export default Backbone.Collection.extend({
	model: TodoThingModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/mhgrossmann/todolist'
});



