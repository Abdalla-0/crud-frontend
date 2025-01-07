import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";

const actionDeletePost = createAsyncThunk(
    "posts/actionDeletePost",
    async (id: string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            // استعلام عن البوست باستخدام الـ id
            const postsRef = collection(db, "posts");
            const q = query(postsRef, where("id", "==", id));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {

                let postRef = null;
                querySnapshot.forEach((doc) => {
                    postRef = doc.ref;
                });

                if (postRef !== null) {

                    await deleteDoc(postRef);
                }

                return id;
            } else {
                throw new Error("Post not found");
            }
        } catch (error) {
            return rejectWithValue(axiosError(error));
        }
    }
);

export default actionDeletePost;
