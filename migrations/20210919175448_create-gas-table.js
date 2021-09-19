
exports.up = function(knex) {
    return knex.schema.createTable('oleos', tbl => {
        tbl.increments('id').primary()
        tbl.string('produto', 128).notNullable()
        tbl.string('marca', 128).notNullable()
        tbl.float('preco',128).notNullable()
        tbl.integer('estoque',128).notNullable()
    })

    .createTable('fornecedores', tbl => {
        tbl.increments('id').primary()
        tbl.string('nome', 128).notNullable()
        tbl.string('telefone', 128).notNullable()
        tbl.string('email', 128).notNullable()
        tbl.string('endereco', 128).notNullable()
        tbl.date('data_de_vinda')
    })

    .createTable('precos', tbl => {
        tbl.increments('id').primary()
        tbl.string('tipo').notNullable()
        tbl.float('preco').notNullable()
    })

    .createTable('funcionarios', tbl =>{
        tbl.increments('id').primary()
        tbl.string('nome', 128).notNullable()
        tbl.string('telefone', 128).notNullable()
        tbl.string('endereco', 128).notNullable()
        tbl.string('email', 128).notNullable()
        tbl.integer('idade', 128).notNullable()
    })

    .createTable('loja', tbl => {
        tbl.increments('id').primary()
        tbl.string('produto', 128).notNullable()
        tbl.float('preco', 128).notNullable()
        tbl.string('fornecedor', 128).notNullable()
        tbl.string('estoque', 128).notNullable()
    })

    .createTable('tanques', tbl =>{
        tbl.increments('id').primary()
        tbl.string('tipo', 128).notNullable()
        tbl.float('quantidade', 128).notNullable()
        tbl.float('preco', 128).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('oleos')
  .dropTableIfExists('fornecedores')
  .dropTableIfExists('precos')
  .dropTableIfExists('funcionarios')
  .dropTableIfExists('loja')
  .dropTableIfExists('tanques')
};
