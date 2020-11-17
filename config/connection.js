// Set up MySQL connection.
const mysql = require("mysql");

// JAWDB connection
if (process.env.JAWSDB_URL) 
{
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "js4sz85xm6v8n9a5",
    database: "burgers_db"
  });

};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
