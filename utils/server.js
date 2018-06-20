const express = require('express');



var app = express();

app.get('/',(req,res)=>{

    res.send('Hello world');

})


app.listen(5000,()=>{
    console.log("server opened at 5000")
});


module.exports.app = app;