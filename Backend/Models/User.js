import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
    },
    password:{
        type: String,
        required: true,
        maxlength: [200 ]
    }
})

export default mongoose.model.User || mongoose.model(User,UserSchema)