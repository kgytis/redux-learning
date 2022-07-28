import axios from "axios";
const URL = "http://localhost:8000/posts";

const fetchPosts = () => axios.get(URL);

export { fetchPosts };
