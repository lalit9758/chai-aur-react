import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishyear:{
            type:Number,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        updatedAt:{
            type:Date,
            default:Date.now
            },

    }
)

export const Book = mongoose.model('book',bookSchema);