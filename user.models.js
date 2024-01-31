import mongoose from "mongoose"

const userSchema = new mongoose.userSchema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:/^\S+@\S+\.\S+$/
    },
    password:{
        type:String,
        required: true,
        minlength: 8
    }
},
{timestamps:true})

export const User = mongoose.model("User",userSchema)