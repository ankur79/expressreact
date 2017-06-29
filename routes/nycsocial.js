var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';



router.get('/', (req, res, next) => {
  const results = [];
  const q = req.query;
  
  const qtext = Object.keys(q).length < 1 ? 'SELECT * FROM nycsocial;' : "SELECT * FROM nycsocial where "+ Object.keys(q)[0] +"='"+ q[Object.keys(q)[0]] +"'";
  console.log(qtext)
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query(qtext);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});



module.exports = router;