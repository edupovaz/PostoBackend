//const knex = require('knex')
//const config = require('../knexfile')
//const db = knex(config.development)

const db = require('../deConfig')

module.exports = {
    addFornecedores,
    addFuncionario,
    addProdutoLoja,
    addOleo,
    addTanque,
    addPrecos,
    findFornecedor,
    findFornecedorById,
    findFuncionarioByName,
    findOleo,
    findLojaByName,
    findLoja,
    findPreco,
    findTanque,
    updateFornecedores,
    updatePrecos,
    updateTanques,
    updateLoja,
    updateOleo,
    removeFornecedores,
    removeFuncionarios,
    removeOleo,
    removeProdutoLoja
}

async function addFornecedores(fornecedores_data){
    const [id] = await db('fornecedores').insert(fornecedores_data)
    return id
}

async function addFuncionario(funcionario_data){
    const [id] = await db('funcionarios').insert(funcionario_data)
    return id
}

async function addProdutoLoja(loja_data){
    const [id] = await db('loja').insert(loja_data)
    return id
}

async function addOleo(oleo_data){
    const [id] = await db('oleos').insert(oleo_data)
    return id
}

async function addTanque(tanque_data){
    const [id] = await db('tanques').insert(tanque_data)
    return id
}

async function addPrecos(precos_data){
    const [id] = await db('precos').insert(precos_data)
    return id
}

async function findFornecedor(){
    return db('fornecedores')
}

async function findOleo(){
    return db('oleos')
}

async function findFornecedorById(id){
    return db('fornecedores')
    .where({id})
    .first()
}

async function findFuncionarioByName(nome){
    return db('funcionarios')
    .where({nome})
    .first()
}

async function findLojaByName(produto){
    return db('loja')
    .where({produto})
    .first()
}

async function findLoja(){
    return db('loja')
}

async function findPreco(){
    return db('precos')
}

async function findTanque(){
    return db('tanques')
}

async function updateFornecedores(id,changes){
    return(
        db('fornecedores')
        .where({id})
        .update(changes)
        .then(() => {
            return findFornecedorById(id)
        })
    )
}

async function updatePrecos(id,changes){
    return(
        db('precos')
        .where({id})
        .update(changes)
        .then(() => {
            return findPreco()
        })
    )
}

async function updateTanques(id,changes){
    return(
        db('tanques')
        .where({id})
        .update(changes)
        .then(() => {
            return findTanque()
        })
    )
}

async function updateLoja(id,changes){
    return(
        db('loja')
        .where({id})
        .update(changes)
        .then(() => {
            return findLoja()
        })
    )
}

async function updateOleo(id,changes){
    return(
        db('oleos')
        .where({id})
        .update(changes)
        .then(() => {
            return findOleo()
        })
    )
}

async function removeProdutoLoja(id){
    return db('loja')
    .where({id})
    .del()
}

async function removeOleo(id){
    return db('oleos')
    .where({id})
    .del()
}

async function removeFornecedores(id){
    return db('fornecedores')
    .where({id})
    .del()
}

async function removeFuncionarios(id){
    return db('funcionarios')
    .where({id})
    .del()
}