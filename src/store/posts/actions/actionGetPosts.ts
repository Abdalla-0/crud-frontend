import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../fireBase";
import { axiosError } from "../../../utils/axiosError";

const actionGetPosts = createAsyncThunk(
  "posts/actionGetPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const postsRef = collection(db, "posts");

      // ترتيب البوستات من الأحدث إلى الأقدم
      const q = query(postsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const posts: any[] = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });

      return posts;
    } catch (error) {
      return rejectWithValue(axiosError(error));
    }
  }
);

export default actionGetPosts;
