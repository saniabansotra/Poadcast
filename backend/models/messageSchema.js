import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    name:{
        type:String,
        requried:[true,"Name Required!"],
        minLength:[3,"Name must contain atleast 3 characters!"],
    },
    email:{
        type:String,
        requried:[true,"Email Required!"],
       validate:[validator.isEmail,"Please provide valid email"]
    },
    subject:{
        type:String,
        requried:[true,"Subject Required!"],
        minLength:[5,"Subject must contain atleast 3 characters!"],
    },
    message:{
        type:String,
        requried:[true,"Message Required!"],
        minLength:[10,"Message must contain atleast 3 characters!"],
    },

});
export const Message = mongoose.model("Message",messageSchema);