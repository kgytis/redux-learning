import express from "express";
//Controller imports
import { getPosts, createPost } from "../controllers/postsController.js";
const postRouter = express.Router();
postRouter.get("/", getPosts).post("/", createPost);
export default postRouter;
