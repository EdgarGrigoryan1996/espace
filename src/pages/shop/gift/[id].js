import React, {useEffect} from 'react';
import GiftPage from "@/components/GiftPage/GiftPage";
import {useRouter} from "next/router";
import {fetchGetGiftPageData} from "@/redux/slices/gifts";
import {useDispatch} from "react-redux";

function Index(props) {
    const dispatch = useDispatch()
    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    useEffect(() => {
        if(id !== undefined){
            dispatch(fetchGetGiftPageData(id))
        }

    },[id])
    return (
        <div>
            <GiftPage />
        </div>
    );
}

export default Index;