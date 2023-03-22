import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    //Definindo o que um post precisa ter 
   {
    title: String,
    message: String, 
    creator: String, 
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//Transformando o Schema em um model com mongoose, para poder fazer CRUD
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;