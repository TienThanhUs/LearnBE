const jwt = require("jsonwebtoken");
const SECRET_KEY = "AIENGINEER";
const {sql} = require("../db");

async function login(username,password)
{
    if(!username || !password)
    {
        return null;
    }
    await sql.query(
        `INSERT INTO users VALUES
        ('${username}','${password}')`
    )

    const token = jwt.sign({username:username,password:password},SECRET_KEY);
    console.log(`token_service:${token}`);
    return token;
}

module.exports = {login};
