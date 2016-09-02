Meteor project example - "Customers".

Example project with customers' list, possibilities of adding, editing, deleting.

install npm:
https://docs.npmjs.com/getting-started/installing-node

install meteor:
https://www.meteor.com/install

`$ git clone https://github.com/kosiakMD/meteor_customers.git`

`$ cd meteor_customers`

`$ meteor npm install`

`$ meteor add reactive-dict fourseven:scss materialize:materialize@=0.97.6 aldeed:simple-schema kadira:flow-router kadira:blaze-layout zimme:active-route

`$ meteor`

For fast add examples start with MongoDB console:

`$ meteor mongo` 

  and write the next:

`$ db.customers.insert({name: 'Bill Gates', email: 'bill@microssoft.com', telephone: '380123456789'})`
