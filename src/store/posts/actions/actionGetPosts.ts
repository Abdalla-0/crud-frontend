import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";

const actionGetPosts = createAsyncThunk("posts/actionGetPosts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {

        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            createdAt: doc.data().createdAt.toDate().toISOString(),
        }));

        return posts;
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
});

export default actionGetPosts;
