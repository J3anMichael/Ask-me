const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");
// database

connection
.authenticate()
.then(() => {
    console.log('Conexao feita com o banco de dados!')
})
.catch((msgErro) => {
    console.log('msgErro');
})

// estou dizendo para o express usar o EJS como view engine.
app.set('view engine', 'ejs');
app.use(express.static('public')); // serve para chamar css e javascript 

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get("/",(req ,res) => {
    res.render("index");
  
});

app.get("/perguntar",(re, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req ,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario recebido! titulo: " + titulo +  " "  + "descricao:" + descricao);
});

app.listen(1414,()=>{console.log("App rodando!");});