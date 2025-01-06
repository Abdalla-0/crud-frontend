import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";


const actionGetPosts = createAsyncThunk("posts/actionGetPosts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = querySnapshot.docs.map(doc => doc.data());

        return posts;
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
});

export default actionGetPosts