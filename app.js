const express = require("express");
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");
const SECRET_KEY = "HCMUS";

const token_temp = jwt.sign({id : 1},SECRET_KEY);
console.log(token_temp);

app.use(express.json());
const users = [{id : 1, name :"Nguyen Tien Thanh",job: "AI Backend Engineer"},
            {id : 2, name :"Duong Nhat Tam", job: "Software Architecture"}];
app.get('/',(req,res) =>{
    res.send('HOME PAGE');
})

app.get('/users',(req,res) =>{
    res.status(200).json(users);
})

app.get('/about',(req,res) =>{
    res.send('About page'); 
})

app.post('/users',(req,res) =>{
    const {name,job} = req.body; 
    users.push({id :users.length + 1, name : name, job : job});
    const token = jwt.sign({id : users.length},SECRET_KEY);

    res.status(200).json({token : token});

})

app.put('/users',(req,res) =>{
    res.send('Cap nhat danh sach user thanh cong');
})

app.patch('/users',(req,res) =>{
    res.send('Cap nhat 1 phan thong tin user thanh cong');
})


app.get('/me',(req,res) =>{
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token,SECRET_KEY);
    const id = decode.id;
    const user = users.find((u) =>  u.id == id);
    res.status(200).json(user);
})



app.listen(PORT,()=>{
    console.log(`Server is listenning on PORT ${PORT}`);
})
