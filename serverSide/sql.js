const mysql=require('mysql');
const util=require("util");

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'new_hmo',
    multipleStatements: true
});

const promiseQuery=(sql)=>
{
    return util.promisify(mysqlConnection.query)
.call(mysqlConnection,sql);
}
module.exports = {mysqlConnection,promiseQuery}