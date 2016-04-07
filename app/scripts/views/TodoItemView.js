//TodoItemView is a view created for each Todo Item

const TodoItemView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'toggleCompletion'  //event listener when element gets clicked run toggleCompletion function
	},
	className: 'incomplete', //a class for the toggling the complete/incomplete
	initialize: function(thingToDo) {  //intialize - make sure that information is available inside render
		this.item = thingToDo;   //making thingToDo available to render.  Assigning thingToDo to this.item	
		this.render();  //run a new function on your object called render
		
	},

	render: function () {  //renders job is to make this thing look like it should.  Render is a method
		this.$el.html(this.item); //html here replaces anything in the li with the item.  
	},

	toggleCompletion: function() {  //if on turn it off, if off, turn on.  This is for strike through of completed items

		console.log('test');
		this.$el.toggleClass('.incomplete complete');  //
	}

});

export default TodoItemView;  //necessary to link TodoItemView to entry.js









