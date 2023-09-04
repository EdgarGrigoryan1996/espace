import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status:false
}
const loadingSlice = createSlice({
    name:'globalLoading',
    initialState,
    reducers:{
        isLoading(state){
            state.status = true
        },
        loadingEnd(state){
            state.status = false
        }
    }

})


export const {isLoading, loadingEnd} = loadingSlice.actions
export const loadingReducer = loadingSlice.reducer