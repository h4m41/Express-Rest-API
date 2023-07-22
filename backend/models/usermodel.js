const mongoose = require('mongoose')


const userSchema = mongoose.Schema({


    email: {type: String, required:[true, 'please add a email']},
    password: {type: String, required:[true, 'please add a password']},
    name: {type: String, required:[true, 'please add a name']},


})


module.exports = mongoose.model('User', userSchema)