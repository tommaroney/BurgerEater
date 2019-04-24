const connection = require("./connection.js");


const ORM = {

    selectAll: function(tableName, cb) {

        let queryString = "select * from " + tableName;

        return connection.query(queryString, (err, results, fields) => {
            if(err) {
                throw err;
                return;
            }
            cb(results);
        });
    },

    insertOne: function(tableName, rowObj, cb) {

        let queryString = "insert into " + tableName + " set ? "

        connection.query(queryString, rowObj, (err, results, fields) => {
            if(err) {
                throw err;
                return;
            }
            cb(results);
        });
    },

    updateOne: function(tableName, rowObj, cb) {

        let variableArr = [];

        let valuesArr = [];

        let columnHeaders = Object.keys(rowObj);

        let queryString = "update " + tableName + " set ";
        
        for(i = 0; i < columnHeaders.length; i++) {
            if(columnHeaders[i] != "id") {
                variableArr.push(columnHeaders[i] + " = ?");
                valuesArr.push(rowObj[columnHeaders[i]]);
            }
        }

        queryString += variableArr.join(", ");

        queryString += " where id = ?" 
        
        valuesArr.push(rowObj.id);

        connection.query(queryString, valuesArr, (err, results, fields) => {
            if(err) {
                throw err;
                return;
            }
            
            cb(results);
        });
    }
}

module.exports = ORM;