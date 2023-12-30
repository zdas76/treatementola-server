const db = require('../models')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

const Employee = db.employee

const loginHandler = async (req, res) => {

    let userName = req.body.userName;
    let password = req.body.password;
    
    const Salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, Salt);
    
    const findUser = await Employee.findOne({
            where:{
                userName: userName
            }

    }).catch((error) =>{
        res.json(error)
    })
    console.log(findUser);

    if(!findUser) {
        res.json({error: "User Doesn't Exist"})
    } 
    
    const isMatch = await bcrypt.compare(password, findUser.password)

    if(!isMatch) {
        return res.json({message: "UserName or Password Doesn't Exist"})
    }
        
    const jwtToken = jwt.sign(
    { id: findUser.id, userName: findUser.userName, role:findUser.role},
    process.env.JWT_SECRET, 
    // {expiresIn:'15m'}
    );
    res.cookie("Token", jwtToken);
    return res.json({ message: "Success", jwtToken});
          
}

const varifyToken = async (req, res)=>{
    console.log(req.user);
    return res.json({Status: "Success", user:req.user})
}

module.exports  = {
    loginHandler,
    varifyToken
}