import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice";
import googleAuthReducer from "../features/auth/googleAuthSlice"
export default configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        googleAuth: googleAuthReducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});