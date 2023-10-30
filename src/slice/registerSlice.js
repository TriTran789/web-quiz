import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        value: false
    },
    reducers: {
        setState(state, action) {
            state.value = action.payload
        }
    }
})

export const { setState } = registerSlice.actions

export default registerSlice.reducer