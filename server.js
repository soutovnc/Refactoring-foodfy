const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const receitas = require("./data");


server.use(express.static('public'));
server.set("view engine", "njk");


nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {
    return res.render("home")
});

server.get("/receitas", function(req, res) {
    return res.render("receitas", { items: receitas })
});

server.get("/sobre", function(req, res) {
    return res.render("sobre")
});

server.get("/receita", function(req, res) {
    const id = req.query.id

    const receita = receitas.find(function(receita) {
        return receita.id == id
    })

    if (!receita) {
        return res.send("recipe not found!")
    }

    return res.render("receita", { item: receita })
})


server.listen(3333, function() {
    console.log("server is running")
});
