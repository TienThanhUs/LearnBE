const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/',(req,res) =>{
    res.send("200 OK");
})

app.get('user',(req,res) =>{
    res.send("User");
})

app.get('/task',(req,res) =>{
    res.status(401).send("task");
})
app.listen(PORT,()=>{
    console.log(`Server is listenning on PORT ${PORT}`);
})
