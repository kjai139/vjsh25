import { Schema } from 'mongoose'
import mongoose from 'mongoose'



const TransactionSchema = new Schema({
    stripeSessionId: {
        type:String,
        unique:true,
        required:true
    },
    userRef: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true

    },
    amount: {
        type:Number,
        required:true
    },
    type: {
        type:String,
        enum: ['Coins', 'Cash'],
        default: 'Coins'
    },
    productId: {
        type:String,
        required: true
    },
    coins: {
        type:Number,
        default: 0
    }

})

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema)