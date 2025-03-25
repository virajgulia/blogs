import { configureStore } from "@reduxjs/toolkit";
import { blogApiSlice } from "./apiSlices/blogApiSlics";
import { tagApiSlice } from "./apiSlices/tagApislice";


export const store = configureStore({
    reducer: {
        [blogApiSlice.reducerPath]: blogApiSlice.reducer,
        [tagApiSlice.reducerPath]: tagApiSlice.reducer,
    },
    middleware: pre =>
        pre()
            .concat(blogApiSlice.middleware)
            .concat(tagApiSlice.middleware)

})