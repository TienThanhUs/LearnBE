const express = require("express");
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");


const SECRET_KEY = "SECRET";



app.use(express.json());

app.post('/register',(req,res) =>{
    const info = req.body;
    if(!info)
    {
        res.status(401).send("Missing body");
        return null;
    }
    const token = jwt.sign({
        email : info.email,
        password : info.password
    },SECRET_KEY);
    res.status(200).json({
        token : token
    }
    );
});


app.listen(PORT,() =>{
    console.log(`server is listening on PORT ${PORT}`);
})
