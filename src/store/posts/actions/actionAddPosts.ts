import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TPosts } from "../../../types";
import { axiosError } from "../../../utils/axiosError";

type TRespone = TPosts


const actionAddPosts = createAsyncThunk("posts/actionAddPosts", async (postItem: TPosts, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const response = await axios.post<TRespone>("https://crud-frontend-bg55sbscc-abdallas-projects-eef2bc41.vercel.app/api/posts.json", postItem);
        console.log(response.data);

        return response.data;
    } catch (error) {
        return rejectWithValue(axiosError(error));
    }
}
);


export default actionAddPosts