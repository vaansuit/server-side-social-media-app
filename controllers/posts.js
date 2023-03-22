import PostMessage from "../models/postMessage.js";


//Função assíncrona por conta do tempo de resposta que o servidor leva para responder com todos os posts da database.
export const getPosts = async (req, res) => {
    try {

        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, send) => {
    //criando o corpo da postagem
    const post = req.body;

    //Dizendo que a postMessage irá receber o body
    const newPost = new PostMessage(post);

    try {
        //salvando o post no servidor
        await newPost.save();

        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}