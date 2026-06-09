const express = require("express");
const app = express();
const routes = require('./route/auth.route.js');
const PORT = 3000;

app.use(express.json());

const {sql,config} = require('./db');
sql.connect(config);
console.log('database connected');

app.get('/',(req,res)=>{
    res.send('Home page');
})

app.use('/api',routes);
app.listen(PORT,() =>{
    console.log(`Server is listenning on PORT ${PORT}`);
})
