
FlowRouter.route('/', {
	action: function(params) {
		params.homeLink = 'active';
		BlazeLayout.render("mainLayout", {
			content: "customerList",
			params: params
		});
		$('.button-collapse').sideNav('hide');
	}
});

FlowRouter.route('/customer/edit/:_id', {
	action: function(params) {
		params.edit = true;
		params.path = this.path;
		BlazeLayout.render("mainLayout", {
			content: "customerForm",
			params: params
		});
		$('.button-collapse').sideNav('hide');

	},
	triggersExit: function() {

	},
});

FlowRouter.route('/customer/:_id', {
	// subscriptions: function(params) {
	// 	console.log("subscribe and register this subscription as 'myPost'");
	// 	this.register('myPost', Meteor.subscribe('blogPost', params._id));
	// },
	action: function(params) {
		BlazeLayout.render("mainLayout", {
			content: "customerDetails",
			params: params
		});
		$('.button-collapse').sideNav('hide');
	},
	triggersEnter: function() {
		// console.log('Router Enter');
	},
	triggersExit: function() {
		// console.log('Router Exit');

	},
});

FlowRouter.route('/new', {
	action: function(params) {
		params.newLink = 'active';
		BlazeLayout.render("mainLayout", {
			content: "customerForm",
			params: params
		});
		$('.button-collapse').sideNav('hide');
	}
});