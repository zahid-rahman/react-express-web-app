var express = require('express');
var router = express.Router()
var clientModel = require('../models').client;
var HttpStatus = require("http-status-codes");
var multer = require("multer");
var upload = multer();


// save client records 
router.post('/add', upload.array(),function(req,res){
    clientModel.create(req.body)
    .then(function(clientInstance){
        res.status(HttpStatus.CREATED);
		res.send(clientInstance.dataValues);
	})
	.catch(function(err){
		if(err){
			console.error(err.stack);
		}
		res.status(HttpStatus.INTERNAL_SERVER_ERROR);
		res.send({ message: err });
	});
})

// get all client list 
router.get('/clientList',(req,res)=>{
	clientModel.findAll()
	.then(client=>{
        res.status(HttpStatus.OK);
		res.json(client);
	})
	.catch(error=>{
		console.log(error);
	})
})

//delete client
router.delete('/delete/:id',(req,res)=>{
	var {id} = req.params
	clientModel.destroy({
		where:{
			id:id
		}
	})
	.then((deleteClient)=>{
		res.status(HttpStatus.OK)
		 res.json(deleteClient);
		
	})
	.catch((error)=>{
		console.log(error);
	})
})

// find single client 
router.get('/edit/:id',(req,res)=>{
	var {id} = req.params;
	clientModel.findAll({
		where:{
			id:id
		}
	})
	.then((clientData)=>{
		res.status(HttpStatus.OK);
		res.json(clientData)
	})
	.catch((error)=>{
		console.log(error)
	})
})

// update client information 
router.put('/update/:id',upload.array(),(req,res)=>{
	var { id } = req.params

	clientModel.update(
		req.body,
		{
			where:{
				id:id
			}
		}
	)
	.then((updateValue)=>{
		res.status(HttpStatus.OK);
		res.json(updateValue)
		
	})
	.catch((error)=>{
		console.log(error);	
	})
})


module.exports = router;
