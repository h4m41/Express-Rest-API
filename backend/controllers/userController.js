const jwt =  require('jsonwebtoken')
const bcrypt =  require('bcryptjs')
const aysncHandler =  require('express-async-handler')
const User =  require('../models/usermodel')



const registerUser = aysncHandler (async(req,res) =>{
   
    const {email, name, password} = req.body;
    if (!email || !name || !password){

        res.status(400)
        throw new Error('please add all fields')
    }

// Hash password

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt);

// Create user

const user = await User.create({name, email, password : hashedPassword})
    
if(user){
    res.status(201).json({
   
    _id : user.id,
    name : user.name,
    email : user.email,
password: user.password  })

}else{
    res.status(400)
    throw new Error('Invalid User Data ')
}

})


const loginUser = aysncHandler(async(req,res) =>{
    res.json({message: "login user command"})
})

const getMe =aysncHandler( async(req,res) =>{
    res.json({message: "User Data Display command"})
})

module.exports = {registerUser, loginUser , getMe}