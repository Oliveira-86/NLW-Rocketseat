const express = require("express")         //estamso pedidndo ao aqui arquivo express baixado pelo npm, vamos usar o express para começar o nosso servidor
const server = express()    

//pegar o banco de dados
const db = require("./database/db")

//configurar a pasta public
server.use(express.static("public"))


//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configuar caminhos da minha aplicação
//página inicial
//req: requisição
//res:resposta
server.get("/", (req, res) => {           //Estamos fazendo um pedido via "get" e vamos receber uma página pq o server está configurando um "caminho para aplicação"
    return  res.render("index.html", {title: "um titulo"})            //Get é um verbo HTTP, protocolo HTTP(localhost) são regras e uma dessas regras é trabalhar com verbos. Ou sej, estamos prucurando o "/" que é respondido como o "get". 
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows){
        if( err){
        return console.log(err)
        }
     return res.render("search-results.html", {places: rows})
    })
})



server.listen(3000)                        //ligar o servidor - No TERMINAL: $ node src/server.js - assim criamos