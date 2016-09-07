exports.up = function (knex, Promise) {
	knex.schema.createTable('users', function (table) {
		table.increments();
		table.string('name');
		table.string('email');
		table.string('password');
		table.timestamps();
	});
	
	knex.schema.createTable('exercises', function (table) {
		table.increments();
		table.string('name');
		table.table.timestamps();
	});
};

exports.down = function (knex, Promise) {
	knex.schema.dropTable('users');
	knex.schema.createTable('exercises');
};
