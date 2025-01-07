import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";

const actionGetPost = createAsyncThunk(
    "posts/actionGetPost",
    async (id: string, thunkAPI) => {

        const { rejectWithValue } = thunkAPI;
        try {
            const postsRef = collection(db, "posts");
            const q = query(postsRef, where("id", "==", id));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                let postData = null;
                querySnapshot.forEach((doc) => {
                    postData = { id: doc.id, ...doc.data() };
                });
                return postData;
            } else {
                throw new Error("Document not found");
            }
        } catch (error) {
            return rejectWithValue(axiosError(error));
        }
    }
);

export default actionGetPost;
