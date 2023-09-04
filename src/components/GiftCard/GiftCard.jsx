import React from 'react';
import s from "./GiftCard.module.css"
import {AiFillEye, AiFillHeart} from "react-icons/ai";
import {BsFillBagPlusFill} from "react-icons/bs";
import {TbCurrencyDram} from "react-icons/tb";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {fetchGetGiftPageData} from "@/redux/slices/gifts";
function GiftCard(props) {
    const dispatch = useDispatch()
    return (

        <div className={s.cardBlock}>
            <div className={s.favorite}><AiFillHeart /></div>
            <Link href={`/shop/gift/${props.gift._id}`} className={s.image} onClick={() => {

            }}>
                <div></div>
            </Link>
            <div className={s.content}>

                <div className={s.title}>{props.gift.title}</div>
                <div className={s.price}>{props.gift.price}<TbCurrencyDram /></div>
                <div className={s.addButton}><button><BsFillBagPlusFill /> Add</button></div>

                <div className={s.view}><AiFillEye /> {props.gift.viewsCount}</div>

            </div>
        </div>
    );
}

export default GiftCard;