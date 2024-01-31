import mongoose from "mongoose"
 
const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0,
        required:true
    },
    worksInHospital:[
    {
        type:mongoose.Schema.types.ObjectId,
        ref:"Hospital"
    }
],
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"],
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    }
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)