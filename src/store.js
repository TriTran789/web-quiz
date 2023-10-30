import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './slice/registerSlice'

export default configureStore({
    reducer: {
        register: registerReducer
    }
})