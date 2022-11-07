const sql = require("mssql")

var config = {
  server: "localhost\\SQLEXPRESS01", // or "localhost"
  options: {},
  authentication: {
    type: "default",
    options: {  
      userName: "sa",
      password: "",
    }
  }
};

var connection = new Connection(config);

// Setup event handler when the connection is established. 
connection.on('connect', function(err) {
  if(err) {
    console.log('Error: ', err)
  }else{
    executeStatement();
    console.log("connection successful");
  }
  // If no error, then good to go...
 
});

function executeStatement() {
    request = new Request("select 42, 'hello world'", function(err, rowCount) {
      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
      }
    });

    request.on('row', function(columns) {
      columns.forEach(function(column) {
        console.log(column.value);
      });
    });

    connection.execSql(request);
  }

// Initialize the connection.
connection.connect();