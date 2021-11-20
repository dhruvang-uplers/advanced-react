import { getAuth } from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

export const googleAuthSlice = createSlice({
    name: "googleAuth",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
    },
    reducers: {
        setGoogleAuth: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user;
            state.error = action.payload.error;
        },
    }
})

export const { setGoogleAuth } = googleAuthSlice.actions;
export default googleAuthSlice.reducer;