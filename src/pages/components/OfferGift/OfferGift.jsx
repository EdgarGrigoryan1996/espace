import React from 'react';
import s from "./OfferGift.module.css"
import offerGiftImage from "../../../assets/images/offerGift.webp"
import Image from "next/image";

function OfferGift(props) {
    return (
        <div className={s.offerGiftWrapper}>
            <div className={s.aboutOfferGift}>
                <div>
                    <h2>Gift Name</h2>
                    <p>Gift Description</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className={s.imageBlock}>
                <Image src={offerGiftImage} alt={"OfferGift"}  layout={'fill'}/>
            </div>
        </div>
    );
}

export default OfferGift;