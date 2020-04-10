var express = require('express');
var router = express.Router()
var clientModel = require('../models').client;
var HttpStatus = require("http-status-codes");
var multer = require("multer");
var upload = multer();

router.post('/add', upload.array(),function(req,res){
    // var { name, email } = req.body       
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

router.get('/viewAll',function(req,res){
    clientModel.findALl()
    .then(function(clientInstance){
        res.status(HttpStatus.OK);
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

module.exports = router;