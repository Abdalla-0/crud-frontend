import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user?: any; id: string, isLoggedIn: boolean
}

const initialState: IAuthState = { id: "1", isLoggedIn: false };

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        actionLogin: (state) => {
            state.isLoggedIn = true;
        },
        actionLogout: (state) => {
            state.isLoggedIn = false;
        },
    }
})

export const { actionLogin, actionLogout } = authSlice.actions
export default authSlice.reducer;
