import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import frontGiftsReq from "@/axios/gifts/frontGiftsReq";


export const fetchGetGifts = createAsyncThunk('/gifts', async (params) => {
    const {data} = await frontGiftsReq.getGifts()
    return data
})
export const fetchGetGiftPageData = createAsyncThunk('/shop/gifts/:id', async (giftId) => {
    const {data} = await frontGiftsReq.getGiftById(giftId)
    return data
})

const initialState = {
    status:'loading',
    data: null,
    giftPageData:null
}
const giftsSlice = createSlice({
    name:'gifts',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchGetGifts.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchGetGifts.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchGetGifts.rejected]: (state) => {
            state.status = 'loading'
            state.data = null
        },

        [fetchGetGiftPageData.pending]: (state) => {
            state.status = 'loading'
            state.giftPageData = null
        },
        [fetchGetGiftPageData.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.giftPageData = action.payload
        },
        [fetchGetGiftPageData.rejected]: (state) => {
            state.status = 'loading'
            state.giftPageData = null
        },
    }
})

export const giftsReducer = giftsSlice.reducer