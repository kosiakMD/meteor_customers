import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';

//DB
import { Customers } from '../api/customers.js';

import './customerDetails.html';
import '../partials/modal.html';


Template.customerDetails.onCreated(function(){
	const _id = FlowRouter.getParam('_id');
	var self = this;
	self.autorun(()=> {
		self.subscribe('customerDetails', _id);
		$('.modal-trigger').leanModal();
	});
});

Template.customerDetails.onRendered(function() {

	$('.modal-trigger').leanModal();
});

Template.customerDetails.helpers({
	customer(){
		const _id = FlowRouter.getParam('_id');
		return Customers.findOne( {_id:_id}, {
		});
	},
});

Template.customerDetails.events({
	'click .action_delete'() {
		$('.modal-trigger').leanModal();
	},
	'click .action_yes'(){
		Meteor.call('customers.remove', FlowRouter.getParam('_id'));
		FlowRouter.go('/');
	},
});
