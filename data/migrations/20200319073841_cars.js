
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('make')
        .notNullable()
        
      tbl.decimal('vin')
      .notNullable()
      .unique()
      tbl.decimal('mileage')
      .notNullable()  
      tbl.string('model')
      .notNullable()
      
      tbl.string('transmission type')
      
      tbl.string('status')
      
      
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  
};
