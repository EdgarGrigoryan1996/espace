import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Auth from "@/axios/auth/authReq";

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
    const { data } = await Auth.signIn(params)
    return data
})
export const fetchSignUp = createAsyncThunk('auth/SignUp', async (params) => {
    const { data } = await Auth.signUp(params)
    return data
})

const initialState = {
    data: null,
    status: "loading"
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuthUser(state, action){
            state.data = action.payload
        },
        exit(state){
          state.data = null
        }
    },
    extraReducers:{
        [fetchAuth.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchAuth.rejected]: (state) => {
            state.status = 'loading'
            state.data = null
        },

        [fetchSignUp.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchSignUp.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchSignUp.rejected]: (state) => {
            state.status = 'loading'
            state.data = null
        },
    }
})
export const {exit} = authSlice.actions
export const authReducer = authSlice.reducer