const authService = require("../service/auth.service.js");

async function AuthController(req,res){
    const {username,password} = req.body;
    const token = await  authService.login(username,password);

    if(!token)
    {
        return null;
    }

    res.status(201).json({"token":token});
}

module.exports = {AuthController};
