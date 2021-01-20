const express =require('express');
const ejs = require('ejs');
//const mongoose = require('mongoose');
require('dotenv').config();
var nodemailer = require('nodemailer');



//config
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static('./public'));
//listen
app.listen(process.env.PORT,(err)=>{
    if(err)throw err;
    else{
        console.log(`App runnning on ${process.env.PORT}`);
    }
    })


    //Main
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/mail',(req,res)=>{
    
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS
    },
    tls:{

    }
  });
  
  var mailOptions = {
    from: 'aravindk6066@gmail.com',
    to: 'aravindk6066@gmail.con',
    subject: 'You have a message',
    text: req.body.message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      //console.log('Email sent: ' + info.response);
      res.redirect('/');
    }
  })
  
})
