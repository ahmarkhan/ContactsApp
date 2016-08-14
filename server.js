// This is Node Server which needs to be restarted whenever it changes  - node server

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db  = mongojs('contacts',['contacts']);
var bodyParser = require('body-parser');


// app.get('/',function(req,res){
// 	res.send("Hello World..");
// });



app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

 app.get('/contactList',function(req,res){
 	console.log(' get request received');
	db.contacts.find(function(err,docs){
		console.log('data received--',docs)
		res.json(docs);		
	});

 });

 app.post('/contactList',function(req,res){
 	console.log('object to be added')
 	console.log(req.body);

 	db.contacts.insert(req.body,function(err,doc){
 		res.json(doc);
 	});	


 });

 app.delete('/contactList/:id',function(req,res){
 	console.log('object to be removed');
 	console.log(req.params.id);
 	var id = req.params.id;

 	db.contacts.remove({_id:mongojs.ObjectId(id)}, function(err,doc){
 		res.json(doc);
 	});	


 });

 app.get('/contactList/:id',function(req,res){
 	console.log('object to be updated');
 	var id = req.params.id;
	db.contacts.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
		console.log('data received--',docs)
		res.json(docs);		
	});

 });

 app.put('/contactList/:id',function(req,res){
 	console.log('object to be updated');
 	var id = req.params.id;
	db.contacts.findAndModify({query : {_id : mongojs.ObjectId(id)},
		update : {$set:{name:req.body.name,email:req.body.email,contact:req.body.contact}},
		new : true}, function(err,doc){
			res.json(doc);
	});

 });

app.listen(3000);
console.log("Server runnning on 300 port#");