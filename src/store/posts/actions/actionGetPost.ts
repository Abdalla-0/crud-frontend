import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";
import { TPosts } from "../../../types";

type TResponse = TPosts;

const actionGetPost = createAsyncThunk(
    "posts/actionGetPost",
    async (id: string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() } as TResponse;
            } else {
                throw new Error("Document not found");
            }
        } catch (error) {
            return rejectWithValue(axiosError(error));
        }
    }
);

export default actionGetPost;
