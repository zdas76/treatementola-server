const jwt = require("jsonwebtoken");
const db = require('../models')
const Employee = db.employee

async function authenticate (req, res, next) {
try {
    let token = req.headers.authorization;
    // let token = localStorage.getItem.token;
    if(!token){
        return res.status(401).json({Message: "You are unAuthoried"})
    } 

    token = token.split(' ') [1];
     
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Employee.findOne(
        {where:{id: decoded.id}}
    )

    if(!user){
            return res.status(401).json({Message: "You are unAuthoried"})
        }
        req.user = user;
        next();
        
} catch (error) {
    return res.status(400).json({message: 'Invalid Token'})
}

    }

    module.exports = authenticate;


