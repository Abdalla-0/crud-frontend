import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosError } from "../../../utils/axiosError";
import axios from "axios";
import { TPosts } from "../../../types";

type TRespone = TPosts[]

const actionGetPosts = createAsyncThunk("posts/actionGetPosts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.get<TRespone>(`http://localhost:5000/posts`)
        return response.data
    } catch (error) {
        rejectWithValue(axiosError(error))
    }
});

export default actionGetPosts