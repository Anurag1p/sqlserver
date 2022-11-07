const sql = require('mssql')
const express = require('express');

// Create and configure an HTTP server
const server = express();
server.set('port', (process.env.PORT || 5000));

// Register Express routes / middleware
// server.use('/api/user', require('./api/user'));

const sqlConfig = {
  user: "DESKTOP-KKA58HP\Admin",
  password: "admin",
  database: "trinetra",
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

function executeStatement() {

  sql.connect(sqlConfig.database, err => {
    if (err) {
      console.log('Failed to open a SQL Database connection.', err.stack);
    }
    server.listen(server.get('port'), () => {
      console.log('Node app is running at http://127.0.0.1:' + server.get('port'));
    });
  });
  
  sql.on('error', err => console.log(err.stack));
//  try {
//   // make sure that any items are correctly URL encoded in the connection string
//   console.log("trying to connet.......")
//   sql.connect(sqlConfig)
//   console.log("connetion established")
//   // let value = 1
//   // const result =  sql.query`select * from Item`
//   // console.log("query wxe")
//   // console.dir(result)
//  } catch (err) {
//     console.log(err)
//   // ... error checks
//  }
}

executeStatement();