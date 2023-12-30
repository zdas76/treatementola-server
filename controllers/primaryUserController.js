
const db = require('../models')

// create main Model
const PrimaryUser = db.primaryUsers


//main work

//1. create Primary user 
const addPrimaryUser = async (req, res) =>{

    let data = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        contact: req.body.contact,
        reason: req.body.reason,
        status: req.body.status
    }
    
    let primaryUser = {};
    try{
       primaryUser = await PrimaryUser.create(data);
       res.status(200).send({data:primaryUser})
    }catch (error) {
        res.status(404).send({messages: "User Not Reg." + error})  
    }
}

// 2. get all primary user

const getAllPrimaryUsers = async (req, res) =>{

    try{
        let primaryUsers = await PrimaryUser.findAll({})
        res.status(200).send(primaryUsers)
    }catch(error){
        res.status(404).send({messages: "User Not get" + error})
    }
}

// 3. get single Primary User
const getOnePrimaryUser = async (req, res) =>{
    try{
        let id = req.params.id
        let primaryUser = await PrimaryUser.findOne({where:{id: id}})
        res.status(200).send(primaryUser)
    }catch(error){
        res.status(404).send({messages: "User Not get" + error})
    }
}

// 4. update Primary User 
const UpdatePrimaryUser = async (req, res) =>{
    let id = req.params.id

    const updatedprimaryUser = await PrimaryUser.update( req.body, {where:{id: id}})
    res.status(200).send(updatedprimaryUser)

}

// 5. delete Primary User by id
const delatePrimaryUser = async (req, res) =>{
    let id = req.params.id

    let primaryUser = await PrimaryUser.destroy({where:{id: id}})
    res.status(200).send("Primary User is transfer")
}

// 6. get take new Request user

const newPrimaryUser = async (req, res) =>{
    let servedprimaryUser = await PrimaryUser.findAll({where:{status: Pending}})
    res.status(200).send("Primary User is transfer")
}

// 7. Get All served Users
const getDonePrimaryUsers = async (req, res) =>{
    let servedprimaryUser = await PrimaryUser.findAll({where:{status: Done}})
    res.status(200).send("Primary User is transfer")
}


module.exports  = {
    addPrimaryUser,
    getAllPrimaryUsers,
    getOnePrimaryUser,
    UpdatePrimaryUser,
    delatePrimaryUser,
    newPrimaryUser,
    getDonePrimaryUsers
}