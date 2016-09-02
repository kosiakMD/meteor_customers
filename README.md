
install npm:
https://docs.npmjs.com/getting-started/installing-node

install meteor:
https://www.meteor.com/install

`<addr>`
$ git clone https://github.com/kosiakMD/meteor_customers.git

$ cd meteor_customers

$ meteor npm install

$ meteor add reactive-dict fourseven:scss materialize:materialize@=0.97.6 aldeed:simple-schema kadira:flow-router kadira:blaze-layout zimme:active-route

$ meteor

For fast add examples start with Mongo DB and write the next:

$ meteor mongo

$ db.customers.insert({name: 'Bill Gates', email: 'bill@microssoft.com', telephone: '380123456789'})
