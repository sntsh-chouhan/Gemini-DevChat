import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLenght: [6, 'Email should be at least 6 character long'],
        maxLenght: [50, 'Email should not be longer than 50 character']
    },
    password:{
        type: String,
        select: false,
    }
})

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

userSchema.method.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


userSchema.methods.generateJWT = function (){
    return jwt.sign({emial: this.email}, process.env.JWT_SECRET);
}

const User = mongoose.model('user', userSchema);

export default User;