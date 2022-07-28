import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// Routes imports
import postRouter from "./routes/posts.js";
const app = express();
const PORT = process.env.PORT || 8000;
const URI = process.env.CONNECT_URI;
app.use(bodyParser.json({ limit: "30mb" })); // As photo's can be uploaded and some of those could weight more than 30mb
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // As photo's can be uploaded and some of those could weight more than 30mb, thus sended information won't be larger than expected
app.use(cors());
app.use("/posts", postRouter);
// Conncetion to mongoDB
mongoose
    .connect(URI)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`[server] : Server is running at https://localhost:${PORT}`);
    });
})
    .catch((error) => console.log(error.message));
// mongoose.set("useFindAndModify", false);
