import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosError } from "../../../utils/axiosError";
import axios from "axios";
import { TPosts } from "../../../types";


type TRespone = TPosts

const actionAddPosts = createAsyncThunk("posts/actionAddPosts", async (postItem: { id: string, title: string, description: string, userId: string }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { auth } = getState()
    console.log(auth);

    postItem.userId = auth.id
    try {
        const response = await axios.post<TRespone>(`http://localhost:5005/posts`, postItem)
        return response.data
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
});

export default actionAddPosts