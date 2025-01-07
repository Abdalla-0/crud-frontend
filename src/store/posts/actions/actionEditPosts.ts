import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";

type TItem = { id: string; title: string; description: string };

const actionEditPosts = createAsyncThunk(
    "posts/actionEditPosts",
    async (item: TItem, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {

            const q = query(collection(db, "posts"), where("id", "==", item.id));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                throw new Error("Post not found");
            }
            const postDoc = querySnapshot.docs[0];
            const postRef = doc(db, "posts", postDoc.id);
            await updateDoc(postRef, {
                title: item.title,
                description: item.description,
            });


            const updatedDoc = await getDoc(postRef);


            if (updatedDoc.exists()) {
                return { id: item.id, ...updatedDoc.data() };
            } else {
                throw new Error("Document not found after update");
            }
        } catch (error) {
            return rejectWithValue(axiosError(error));
        }
    }
);

export default actionEditPosts;
