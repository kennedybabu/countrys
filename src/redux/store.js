import { configureStore } from "@reduxjs/toolkit";
import countrysReducer from "./features/countrysSlice";


export default configureStore({
    reducer: {
        app: countrysReducer
    }
})