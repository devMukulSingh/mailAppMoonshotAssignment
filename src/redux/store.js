import { configureStore } from "@reduxjs/toolkit";
import mailBodySlice from "./slice.js";

export const store = configureStore({

    reducer:{
        mailBody:mailBodySlice,
    }

})