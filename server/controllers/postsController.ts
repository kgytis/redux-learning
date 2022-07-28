import { Response, Request, ErrorRequestHandler } from "express";
// Model imports
import PostMessage from "../models/postMessage.js";
// Type imports

const getPosts = async (req: Request, res: Response) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error: any) {
    // according to TS error anotation should be any or unknown
    res.status(404).json({ message: error.message });
  }
  res.json({ message: "GetPost route" });
};

const createPost = async (req: Request, res: Response) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

export { getPosts, createPost };
