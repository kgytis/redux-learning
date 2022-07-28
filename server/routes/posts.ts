import express, { Router } from "express";

//Controller imports
import { getPosts, createPost } from "../controllers/postsController.js";
const postRouter: Router = express.Router();

postRouter.get("/", getPosts).post("/", createPost);

export default postRouter;
