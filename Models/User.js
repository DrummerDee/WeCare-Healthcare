import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)