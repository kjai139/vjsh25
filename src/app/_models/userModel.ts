import { Schema } from 'mongoose'
import mongoose from 'mongoose'


const UserSchema = new Schema({
    name: {
        type:String,
        unique:true,
    },
    googleId: {
        type:String,
        unique:true
    },
    coins: {
        type:Number,
        default: 0,

    }

})

export default mongoose.models.User || mongoose.model('User', UserSchema)