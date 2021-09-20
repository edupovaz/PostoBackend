const express = require('express');
const server = express()
const Posto = require('./modules/dbHelper')
const port = process.env.PORT || 5000;
const cors = require('cors')

server.use(express.json())

server.use(cors({origin: 'http://localhost:3000'}));


server.get('/', (req,res) => {
    res.json({message: "RUNNING"})
})

server.get('/fornecedores', (req,res) => {
    Posto.findFornecedor().then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive fornecedores"})
    })
})

server.get('/funcionario/:nome', (req,res) => {
    const { nome } = req.params

    Posto.findFuncionarioByName(nome)
    .then(posto =>{
        if(posto){
            res.status(200).json(posto)
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.get('/loja', (req,res) => {
    Posto.findLoja().then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive loja"})
    })
})

server.get('/loja/:produto', (req,res) => {
    const { produto } = req.params

    Posto.findLojaByName(produto)
    .then(posto =>{
        if(posto){
            res.status(200).json(posto)
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.get('/oleos', (req,res) => {
    Posto.findOleo().then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive oleo"})
    })
})

server.get('/precos', (req,res) => {
    Posto.findPreco().then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive preco"})
    })
})

server.get('/tanques', (req,res) => {
    Posto.findTanque().then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive tanque"})
    })
})

server.post('/funcionario', (req,res) => {
    Posto.addFuncionario(req.body).then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add funcionario"})
    })
})

server.post('/fornecedores', (req,res) => {
    Posto.addFornecedores(req.body).then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add fornecedor"})
    })
})

server.post('/loja', (req,res) => {
    Posto.addProdutoLoja(req.body).then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add produto"})
    })
})

server.post('/oleos', (req,res) => {
    Posto.addOleo(req.body).then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add oleo"})
    })
})

server.post('/precos', (req,res) => {
    Posto.addPrecos(req.body).then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add preco"})
    })
})

server.post('/tanques', (req,res) => {
    Posto.addTanque(req.body).then(posto => {
        res.status(200).json(posto)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add tanque"})
    })
})

server.patch('/fornecedores/:id', (req,res) =>{
    const { id } = req.params
    const changes = req.body

    Posto.updateFornecedores(id,changes)
    .then(posto => {
        if(posto){
            res.status(200).json(posto)
        }else{
            res.status(404).json({message:"Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message:"Unable to perform operation"})
    })
})

server.patch('/precos/:id', (req,res) =>{
    const { id } = req.params
    const changes = req.body

    Posto.updatePrecos(id,changes)
    .then(posto => {
        if(posto){
            res.status(200).json(posto)
        }else{
            res.status(404).json({message:"Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message:"Unable to perform operation"})
    })
})

server.patch('/tanques/:id', (req,res) =>{
    const { id } = req.params
    const changes = req.body

    Posto.updateTanques(id,changes)
    .then(posto => {
        if(posto){
            res.status(200).json(posto)
        }else{
            res.status(404).json({message:"Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message:"Unable to perform operation"})
    })
})

server.patch('/loja/:id', (req,res) =>{
    const { id } = req.params
    const changes = req.body

    Posto.updateLoja(id,changes)
    .then(posto => {
        if(posto){
            res.status(200).json(posto)
        }else{
            res.status(404).json({message:"Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message:"Unable to perform operation"})
    })
})

server.patch('/oleos/:id', (req,res) =>{
    const { id } = req.params
    const changes = req.body

    Posto.updateOleo(id,changes)
    .then(posto => {
        if(posto){
            res.status(200).json(posto)
        }else{
            res.status(404).json({message:"Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message:"Unable to perform operation"})
    })
})

server.delete('/fornecedores/:id', (req,res) =>{
    const {id} = req.params

    Posto.removeFornecedores(id)
    .then(count =>{
        if(count > 0){
            res.status(200).json({message: "successfully deleted"})
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.delete('/funcionarios/:id', (req,res) =>{
    const {id} = req.params

    Posto.removeFuncionarios(id)
    .then(count =>{
        if(count > 0){
            res.status(200).json({message: "successfully deleted"})
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.delete('/loja/:id', (req,res) =>{
    const {id} = req.params

    Posto.removeProdutoLoja(id)
    .then(count =>{
        if(count > 0){
            res.status(200).json({message: "successfully deleted"})
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.delete('/oleos/:id', (req,res) =>{
    const {id} = req.params

    Posto.removeOleo(id)
    .then(count =>{
        if(count > 0){
            res.status(200).json({message: "successfully deleted"})
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.listen(port)



server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
