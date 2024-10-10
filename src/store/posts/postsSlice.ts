import { createSlice } from '@reduxjs/toolkit';
import { isString, TLoading, TPosts } from "../../types";
import actionGetPosts from './actions/actionGetPosts';
import actionDeletePosts from './actions/actionDeletePosts';
import actionAddPosts from './actions/actionAddPosts';
import actionGetPost from './actions/actionGetPost';
import actionEditPosts from './actions/actionEditPosts';



interface IPostsState {
    data: TPosts[],
    post: TPosts | null,
    loading: TLoading,
    error: string | null,

}

const initialState: IPostsState = {
    data: [],
    post: null,
    loading: 'idle',
    error: null,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        clearPost: (state) => {
            state.post = null
        }
    },
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
        // get post 
        builder.addCase(actionGetPost.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actionGetPost.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            if (action.payload) {
                state.post = action.payload
            }

        })
        builder.addCase(actionGetPost.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
        // delete data 
        builder.addCase(actionDeletePosts.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actionDeletePosts.fulfilled, (state, action) => {
            state.loading = 'succeeded'

            if (action.payload) {
                state.data = state.data.filter((item) => item.id !== action.payload)
            }

        })
        builder.addCase(actionDeletePosts.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
        // add data 
        builder.addCase(actionAddPosts.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actionAddPosts.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            if (action.payload) {
                state.data.push(action.payload)
            }

        })
        builder.addCase(actionAddPosts.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
        // edit data
        builder.addCase(actionEditPosts.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actionEditPosts.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            if (action.payload) {
                state.post = action.payload
            }

        })
        builder.addCase(actionEditPosts.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})
export { actionGetPosts, actionDeletePosts, actionAddPosts, actionGetPost, actionEditPosts }
export const { clearPost } = postsSlice.actions
export default postsSlice.reducer;