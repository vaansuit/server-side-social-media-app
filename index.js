import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";
import postRoutes from './routes/posts.js';

const app = express();

//setando limite de tamanho de imagem
app.use('/posts', postRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://devCraftsman:craftsman123@cluster0.chj69lz.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error.message));

