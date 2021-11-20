import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: localStorage.getItem("theme") || "light",
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
