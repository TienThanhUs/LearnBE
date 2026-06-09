const sql = require("mssql");

const config ={
    user:"sa",
    password:"thanh06azdz",
    server:"localhost", 
    database:"userManagement", 
    options:{
        trustServerCertificate:true
    }
}

module.exports = {sql,config};
