import { createSlice } from "@reduxjs/toolkit";

interface IAuthState { id: string, isLoggedIn: boolean }

const initialState: IAuthState = { id: "1", isLoggedIn: false };

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})


export default authSlice.reducer;
