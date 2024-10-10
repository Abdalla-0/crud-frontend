import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosError } from "../../../utils/axiosError";
import axios from "axios";
import { TPosts } from "../../../types";


type TRespone = TPosts
type TItem = { id: string, title: string, description: string }

const actionEditPosts = createAsyncThunk("posts/actionEditPosts", async (item: TItem, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.patch<TRespone>(`http://localhost:5005/posts/${item.id}`, item)
        return response.data

    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
});

export default actionEditPosts