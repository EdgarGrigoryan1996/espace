import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "@/redux/slices/auth";
import {loadingReducer} from "@/redux/slices/loading";
import {giftsReducer} from "@/redux/slices/gifts";

const store = configureStore({
    reducer:{
        auth : authReducer,
        loading:loadingReducer,
        gifts:giftsReducer
    }
})

export default store