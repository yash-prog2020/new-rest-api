// imporing the express library
const express=require('express');

// set the port
const port = 5006;

// import the mongoose library
const mongoose=require('mongoose');

const app=express();

// connect to the DB

mongoose.connect('mongodb://127.0.0.1:27017/restApiDB', {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('MongoDB is connected to the app!');
}).catch((err)=>{
    console.log(`Error found in connecting DB ${err}`);
});



app.listen(port, (err)=>{
    if(err){
        console.log(`Error found in connecting the server ${err}`);
    }
    console.log(`Server is running successfully on the port ${port}`);
})