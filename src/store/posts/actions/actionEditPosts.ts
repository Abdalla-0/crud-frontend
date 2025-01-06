import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";

type TItem = { id: string; title: string; description: string };

const actionEditPosts = createAsyncThunk(
    "posts/actionEditPosts",
    async (item: TItem, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const docRef = doc(db, "posts", item.id);

            // تحديث البيانات في المستند
            await updateDoc(docRef, {
                title: item.title,
                description: item.description,
            });

            // جلب البيانات المحدّثة
            const updatedDoc = await getDoc(docRef);


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
