import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Customers = new Mongo.Collection('customers');

var Schemas = {};
Schemas.Customer = new SimpleSchema({
	name: {
		type: String,
		label: 'Name',
		max: 100,
		min: 3
	},
	email: {
		type: String,
		label: "Email",
		regEx: SimpleSchema.RegEx.Email,
		min: 5
	},
	telephone: {
		type: String,
		label: 'Telephone',
		max: 200,
	},
	address: {
			type: String,
			label: 'Address',
			max: 200,
		},
	street: {
			type: String,
			label: 'Street',
			max: 200,
		},
	city: {
			type: String,
			label: 'City',
			max: 200,
		},
	state: {
			type: String,
			label: 'State',
			max: 200,
		},
	zip: {
			type: String,
			label: 'Zip',
			max: 200,
		},
});

Meteor.methods({
	'customers.insert'(customer, callback) {
		// Check
		// check(text, String);
		check(customer, Schemas.Customer);

		// Make sure the user is logged in before inserting a customers
		// if (! this.userId) {
		// 	throw new Meteor.Error('not-authorized');
		// }
		id = Customers.insert({
			// customer,
			name: customer.name,
			email: customer.email,
			telephone: customer.telephone,
			address: customer.address,
			street: customer.street,
			city: customer.city,
			state: customer.state,
			zip: customer.zip,
			createdAt: new Date(),
			// owner: this.userId,
			// username: Meteor.users.findOne(this.userId).username,
		});
		// console.log(id, arguments)
		return id;
	},
	'customers.update'(customerId, customer){
		Customers.update(
			{ _id: customerId },
			customer,
			{ upsert: false }
		)
	},
	'customers.remove'(customerId) {
		check(customerId, String);

		Customers.remove(customerId);
	},
	// 'customers.setChecked'(customerId, setChecked) {
	// 	check(customerId, String);
	// 	check(setChecked, Boolean);
	//
	// 	Customers.update(customerId, { $set: { checked: setChecked } });
	// },
});