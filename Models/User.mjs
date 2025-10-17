import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { jwtSecret } from '../Config/environment.mjs';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
    type:String,
    required:true,
    unique:true
},
    password: {
    type:String,
    required:true,
    minLength: 8
},
tokens: {
    default: [],
    type: []
}   
})

userSchema.pre('save',function(next){
    const user=this
    if(user.isModified('password')){
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(user.password,salt);
        user.password =hash;
    }
    next()
})
userSchema.methods.comparePassword=function(password){
     const user = this
    console.log('db password', user.password)
    console.log('frontend password', password)
    return bcrypt.compareSync(password, user.password)
  
}

userSchema.methods.generateToken = function() {
    const { _id } = this
    const token = jwt.sign({ _id }, jwtSecret)
     return token
   
}


const User = mongoose.model('User', userSchema);
export default User;