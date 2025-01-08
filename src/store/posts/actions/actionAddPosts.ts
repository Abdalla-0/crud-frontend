import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPosts } from "../../../types";
import { axiosError } from "../../../utils/axiosError";
import { collection, addDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../fireBase";



const actionAddPosts = createAsyncThunk("posts/actionAddPosts", async (postItem: TPosts, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {

        const docRef = await addDoc(collection(db, "posts"), {
            id: postItem.id,
            title: postItem.title,
            description: postItem.description,
            createdAt: serverTimestamp(),
        });

        const addedDoc = await getDoc(docRef);
        const data = addedDoc.data();


        if (data && data.createdAt) {
            data.createdAt = data.createdAt.toDate().toISOString();
        }

        console.log("data", data);

        return data;
    } catch (error) {
        console.log("error", error);

        return rejectWithValue(axiosError(error));
    }
});


export default actionAddPosts