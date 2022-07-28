import axios from "axios";

const URL: string = "https://localhost:8000";
export const getAllPosts = async () => {
  try {
    await axios.get(`${URL}/posts`).then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};
