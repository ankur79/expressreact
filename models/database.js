const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE nycsocial(platform VARCHAR(40), agency VARCHAR(40), url VARCHAR(512), date_sampled DATE, likes INTEGER)');
query.on('end', () => { client.end(); });