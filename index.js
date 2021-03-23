const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res)
{
    res.send('Hola mundo desde express')
});

app.get('/usuarios', function(req, res)
{
    res.send('Usuario: Edson')
});

app.listen(port,() => 
{
    console.log(`Server started - Port ${port}`);
})

