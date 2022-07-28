var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Model imports
import PostMessage from "../models/postMessage.js";
// Type imports
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postMessages = yield PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch (error) {
        // according to TS error anotation should be any or unknown
        res.status(404).json({ message: error.message });
    }
    res.json({ message: "GetPost route" });
});
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        yield newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
});
export { getPosts, createPost };
