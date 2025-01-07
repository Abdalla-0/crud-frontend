import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPosts } from "../../../types";
import { axiosError } from "../../../utils/axiosError";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "../../../fireBase";



const actionAddPosts = createAsyncThunk("posts/actionAddPosts", async (postItem: TPosts, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            id: postItem.id,
            title: postItem.title,
            description: postItem.description,
        }
        );

        const addedDoc = await getDoc(docRef);
        const data = addedDoc.data();

        return data;
    } catch (error) {
        console.log("error", error);

        return rejectWithValue(axiosError(error));
    }
});


export default actionAddPosts