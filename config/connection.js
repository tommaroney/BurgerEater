const mysql = require("mysql");

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "burgers_db"
});

connection.connect((err) => {
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;