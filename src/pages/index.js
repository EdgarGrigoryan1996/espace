import React from 'react';
import Head from "next/head";
import s from "./Home.module.css"
import OfferGift from "@/pages/components/OfferGift/OfferGift";




function Index() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className={s.homeWrapper}>
                <OfferGift />
            </div>
        </>

    );
}

export default Index;