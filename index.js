const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/html/index.html");
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname+"/html/sobre.html");
})

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog em node!");
})

app.get("/ola/:nome/:cargo", function(req,res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2>Seu cargo é: "+req.params.cargo+"</h2>");
    
})


app.listen(PORT, HOST);