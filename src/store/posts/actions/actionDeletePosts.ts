import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosError } from "../../../utils/axiosError";
import axios from "axios";
import { TPosts } from "../../../types";

type TRespone = TPosts[]

const actionDeletePosts = createAsyncThunk("posts/actionDeletePosts", async (postID: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        await axios.delete<TRespone>(`http://localhost:5005/posts/${postID}`)
        return postID
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
});

export default actionDeletePosts