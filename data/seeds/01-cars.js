
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: "Honda", model: 'Accord', vin: "1234a", mileage: 20000 },
        {make: "Audi", model: 'A4', vin: "4321b", mileage: 30000 },
        {make: "Toyota", model: 'Tundra', vin: "12345c", mileage: 50000 },
        
      ]);
    });
};
