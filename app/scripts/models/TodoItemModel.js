import Backbone from 'backbone';

const TodoItemModel = Backbone.Model.extend({
	defaults: {
		src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Comic_image_missing.png',
		caption: 'No image available'
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/mhgrossmann/todolist'
	idAttribute: '_id'
});

export default ImageModel;






export default TodoItemModel;