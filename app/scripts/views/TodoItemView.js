const TodoItemView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'toggleCompletion'  //when element gets clicked run toggleCompletion function
	},
	className: 'incomplete', 
	initialize: function(thingToDo) {  //intialize - make sure that information is available inside render
		this.item = thingToDo;   //making thingToDo available to render.  Assigning thingToDo to this.item	
		this.render();  //run a new function on your object called render
		
	},

	render: function () {  //renders job is to make this thing look like it should.  Render is a method
		this.$el.html(this.item); //get item and put it into my element
	},

	toggleCompletion: function() {  //if on turn it off, if off, turn on.  This is for strike through of completed items

		console.log('test');
		this.$el.toggleClass('.incomplete complete');  
	}

});

export default TodoItemView;  //necessary to link TodoItemView to entry.js









