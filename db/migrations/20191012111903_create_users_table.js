exports.up = knex => knex.schema.createTable('users', (t) => {
  t.increments('id')
    .unsigned()
    .primary();
  t.string('name', 50).notNull();
  t.string('email', 100).notNull();
  t.string('mobile_no', 15)
    .notNull()
    .unique()
    .index();
  t.enu('gender', ['male', 'female', 'other']);
  t.text('address');
  t.boolean('is_admin').defaultTo(false);
  t.timestamp('updated_at').defaultTo(knex.fn.now());
  t.timestamp('created_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('users');
