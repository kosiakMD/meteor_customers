import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { ReactiveDict } from 'meteor/reactive-dict';

import { Customers } from '../api/customers.js';

import './customerList.html';
import '../partials/customer.html';

Template.customerList.onCreated(function bodyOnCreated() {
	this.state = new ReactiveDict();

});

Template.customerList.helpers({
	customers() {const instance = Template.instance();
		// if (instance.state.get('hideCompleted')) {
		// 	// If hide completed is checked, filter customers
		// 	return Customers.find({ checked: { $ne: true } }, { sort: { text: 1 }, caseInsensitive : false  });
		// }
		// Otherwise, return all of the customers
		// Show newest customers at the top
		return Customers.find( {}, {
			name: 1,
			email: 1,
			sort: { name: 1 },
		});
	},
	// customerDetail(){
	// 	return Customers.find({}, { sort: { name: 1 } });
	// },
	incompleteCount() {
		return Customers.find({ checked: { $ne: true } }).count();
	},
});

Template.customerList.events({
	'click .toggle-checked'() {
		// Set the checked property to the opposite of its current value
		// Customers.update(this._id, {
		// 	$set: { checked: ! this.checked },
		// });
		Meteor.call('customers.setChecked', this._id, !this.checked);
	},
	'click .collection-item'(e){
		$('.collection-item.active').removeClass('active');
		$(e.currentTarget).addClass('active');
		$('#content').css({'z-index':10});
		$('.customerList').css({'z-index':5});
	},
});