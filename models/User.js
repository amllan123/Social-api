const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
  username:{
   type:String,
   require:true,
   min:3,
   max:20,
   unique:true
  },
  email:{
    type:String,
    require:true,
    max:50,
    unique:true

  },
  password:{
    type:String,
    require:true,
    min:4
  },
 profilePicture:{
     type:String,
     default:""
 },
 coverPicture:{
    type:String,
    default:""

 },
 followers:{
    type:Array,
    default:[]
 },
 following:{
    type:Array,
    default:[]
 },

 desc:{
    type:String,
    default:"",
    max:200
 }



},
{timestamps:true}


)

module.exports=mongoose.model("User",UserSchema);