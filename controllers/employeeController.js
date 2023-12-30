const db = require('../models')
const bcrypt = require('bcrypt')

const Employee = db.employee


const Salt =  bcrypt.genSaltSync(10);

const addEmployee = async (req, res) =>{
   
    const {userName, password, name, role} = req.body;
    
        const existUsername = await Employee.findOne({where: {userName: userName}}).catch((error) =>{
        console.log(error);
    })
    if(existUsername){
        return res.json({message:"User Name already exists"})
    }
    
    try{
       let employee = await Employee.create({
        userName, 
        password:bcrypt.hashSync(password, Salt), 
        name, 
        role
       });
        res.status(200).send({data:employee})

    }catch (error) {
        res.status(404).send({messages: error})  
    }
}

// 

// 2. get all primary user

const getAllEmployee = async (req, res) =>{
    let employees = await Employee.findAll({})
    res.status(200).send(employees)
}

module.exports  = {
    addEmployee,
    // loginHandler,
    getAllEmployee,
}