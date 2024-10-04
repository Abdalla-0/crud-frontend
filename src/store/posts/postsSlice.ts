import { createSlice } from '@reduxjs/toolkit';
import { isString, TLoading, TPosts } from "../../types";
import actionGetPosts from './actions/actionGetPosts';



interface IPostsState {
    data: TPosts[],
    loading: TLoading,
    error: string | null,

}

const initialState: IPostsState = {
    data: [],
    loading: 'idle',
    error: null,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get data 
        builder.addCase(actionGetPosts.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actionGetPosts.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            if (action.payload) {
                state.data = action.payload
            }

        })
        builder.addCase(actionGetPosts.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})
export { actionGetPosts }
export default postsSlice.reducer;