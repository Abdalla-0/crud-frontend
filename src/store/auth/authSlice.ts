import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user?: any; id: string, isLoggedIn: boolean
}

const initialState: IAuthState = { id: "1", isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") || "false"), };

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        actionLogin: (state) => {
            const isLoggedIn = true;
            localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
            state.isLoggedIn = isLoggedIn;
        },
        actionLogout: (state) => {
            const isLoggedIn = false;
            localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
            state.isLoggedIn = isLoggedIn;
        },
    },
})

export const { actionLogin, actionLogout } = authSlice.actions
export default authSlice.reducer;
