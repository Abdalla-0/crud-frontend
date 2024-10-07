import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosError } from "../../../utils/axiosError";
import axios from "axios";
import { TPosts } from "../../../types";

type TRespone = TPosts

const actionGetPost = createAsyncThunk("posts/actionGetPost", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.get<TRespone>(`http://localhost:5005/posts/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
});

export default actionGetPost