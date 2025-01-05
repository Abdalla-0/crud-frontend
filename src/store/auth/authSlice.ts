import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user?: any; id: string, isLoggedIn: boolean 
}

const initialState: IAuthState = { id: "1", isLoggedIn: true };

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})


export default authSlice.reducer;
