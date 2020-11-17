// Set up MySQL connection.
const mysql = require("mysql");
let connection;

// JAWDB connection
if (process.env.JAWSDB_URL) 
{
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "w82zrk97vfumxse7",
    password: "js4sz85xm6v8n9a5",
    database: "isnb9c6vp7hb1tjd"
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
