import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";

const actionDeletePost = createAsyncThunk(
    "posts/actionDeletePost",
    async (id: string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const postRef = doc(db, "posts", id);
            await deleteDoc(postRef);
            return id;

        } catch (error) {
            return rejectWithValue(axiosError(error));
        }
    }
);

export default actionDeletePost;
