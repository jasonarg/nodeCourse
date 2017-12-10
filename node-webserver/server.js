const express = require('express');

var app = express();

app.get('/', (req, res)=>{
/*
    res.send('<h1>Hello Express!</h1>');
*/
res.send({
    name: 'Jason',
    likes: [
        'Pizze',
        'Harney'
    ]
});
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// /bad  - send back json with errorMessage

app.get('/bad', (req, res) =>{
   res.send({
       errorMessage: 'unable to handle request'
   });
});


app.listen(3000);