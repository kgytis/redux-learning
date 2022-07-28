import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { getAllPosts } from "./postsAPI";

export interface PostsState {}

const initialState: PostsState = {};

// @decsription : Get all posts reducer

export const allPostsAsync = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await getAllPosts();
  return response;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
