import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//DB
import { Customers } from '../api/customers.js';

//Router
import './router.js';

import './customerList.js';
import './customerForm.js';
import './customerDetails.js';
import '../partials/navigation.html';
import '../partials/preloader.html';
import '../partials/footer.html';
import './body.html';


Template.body.onCreated(function bodyOnCreated() {
	this.state = new ReactiveDict();


});

Template.navigation.onRendered(function() {
	$(".button-collapse").sideNav();
	// var arr = location.pathname.split('/');
	// var link = arr[0] + '/' + arr[1];
	// $("#nav-mobile li.active").removeClass('active');
	// $("#nav-mobile li a").each(function(){
	// 	var href = $(this).attr("href");
	// 	href.match(link) && $(this).parent().addClass('active');
	// });

});
Template.body.onRendered(function() {
	$('input#adress').characterCounter();

});


Template.body.helpers({

});

Template.body.events({
	// 'change .hide-completed input'(event, instance) {
	// 	instance.state.set('hideCompleted', event.target.checked);
	// },
});
