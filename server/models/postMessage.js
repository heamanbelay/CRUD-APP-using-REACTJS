import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    Name: String,
    Id: String,
    quantity: String,
})


export default PostMessage;