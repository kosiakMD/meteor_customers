import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

//DB
import { Customers } from '../api/customers.js';

import './customerForm.html';
import '../partials/modal.html';


Template.customerForm.onCreated(function(){
	// const _id = FlowRouter.getParam('_id');
	// 	var self = this;
	// 	self.autorun(function() {
	// 		self.subscribe('customerForm', _id);
	// 		if (Template.instance().subscriptionsReady()) {
	// 			$('.input-field input').each(function(){
	// 				if( $(this).val() ){
	// 					console.log($(this).val())
	// 					$(this).next().addClass('active')
	// 				}
	// 			});
	// 		}
	// 	})
	// const _id = FlowRouter.getParam('_id');
	// var self = this;
	// self.autorun(()=> {
	// 	// var _id = FlowRouter.getParam('_id');
	// 	self.subscribe('customerForm', _id);
	// });

});

Template.customerForm.onRendered(function() {
	$('.modal-trigger').leanModal();

	$('.input-field input').each(function(){
		if( $(this).val() ){
			$(this).next().addClass('active')
		}
	});

});

Template.customerForm.helpers({
	customer(){
		const _id = FlowRouter.getParam('_id');
		return Customers.findOne( {_id:_id}, {
		});
		// return Customers.find({},{_id:_id});
	},
});

Template.customerForm.events({
	'submit .new-customer'(event) {
		// Prevent default browser form submit
		event.preventDefault();


		// Get value from form element
		const target = event.target;
		const customer = {};

		_id = target._id.value;

		customer.name = target.name.value;
		customer.email = target.email.value;
		customer.telephone = target.telephone.value;
		customer.address = target.address.value;
		customer.street = target.street.value;
		customer.city = target.city.value;
		customer.state = target.state.value;
		customer.zip = target.zip.value;

		// Insert a customers into the collection
		// Customers.insert({
		// 	text,
		// 	createdAt: new Date(), // current time
		// });
		if(_id){
			Meteor.call('customers.update', _id, customer);
			FlowRouter.go('/customer/'+_id);
		}else{
			Meteor.call('customers.insert', customer, function(error, result){
				result && FlowRouter.go('/customer/'+result);
			});
		}

		// Clear form
		clearForm(event.target);

	},
	'click .action_delete'() {
		$('.modal-trigger').leanModal();
		// Customers.remove(this._id);
		},
	'click .action_yes'(){
		Meteor.call('customers.remove', FlowRouter.getParam('_id'));
		FlowRouter.go('/');
	},
});

	function clearForm(target){
		target.name.value = '';
		target.email.value = '';
		target.telephone.value = '';
		target.address.value = '';
		target.street.value = '';
		target.city.value = '';
		target.state.value = '';
		target.zip.value = '';
	}