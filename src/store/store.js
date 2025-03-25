import { configureStore } from "@reduxjs/toolkit";
import { blogApiSlice } from "./apiSlices/blogApiSlics";


export const store = configureStore({
    reducer: {

        [blogApiSlice.reducerPath]: blogApiSlice.reducer,
    },
    middleware: pre =>
        pre()
            .concat(blogApiSlice.middleware)

})