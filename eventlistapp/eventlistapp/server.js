var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('eventlist',['eventlist']);
var bodyParser=require('body-parser');

app.use(express.static(__dirname+"/public/"));
app.use(bodyParser.json());

app.get('/eventlist',function(req,res){
	console.log('I received GET request')

	db.eventlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});
app.post('/eventlist',function(req,res){
	console.log(req.body);
	db.eventlist.insert(req.body, function(err,doc){
		res.json(doc);
	})
});
app.delete('/eventlist/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.eventlist.remove({_id: mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	})
});
app.get('/eventlist/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.eventlist.findOne({_id: mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	})
});
app.put('/eventlist/:id',function(req,res){
	var id=req.params.id;
	console.log(req.body.Title);
	db.eventlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set: {Title: req.body.Title, From: req.body.From, To: req.body.To, Location: req.body.Location, Description:req.body.Description, Participants: req.body.Participants}},
		new: true},function(err,doc){
			res.json(doc);
		})
});
app.listen(3003);
console.log('server running on port 3003');