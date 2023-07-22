const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')


const getGoals = asyncHandler (async (req,res) => {
    
    const goals = await Goal.find()

    res.status(200).json({ goals})})

const createGoals =  asyncHandler (async  (req,res) => {
    
    if (!req.body.text){res.status(400)
    throw new Error('please add a text field')}

    const goal = await Goal.create({text: req.body.text})
    res.status(200).json({message: 'Create Goals'})}
    )

const updateGoal= asyncHandler (async  (req,res) => {
    
    const goal = await Goal.findById(req.params.id); 
    if (!goal){
        res.status(400)
        throw new Error('goal not found')

    }
    const userExists = await User.findOne({email})

if(userExists){
    res.status(400)
    throw new Error('user already exists')
}

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new: true})



    res.status(200).json({updatedGo})})

const deleteGoal =asyncHandler ( async (req,res) => {
    
    const goal = await Goal.findById(req.params.id); 
    if (!goal){
        res.status(400)
        throw new Error('goal not found')
    }

  await goal.deleteOne()
    
    res.status(200).json({id: req.params.id})})



module.exports = {getGoals , updateGoal, deleteGoal, createGoals}