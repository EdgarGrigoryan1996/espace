import React, {useState} from 'react';
import s from "./GiftPage.module.css"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useSelector} from "react-redux";
import {BsFillBagPlusFill} from "react-icons/bs";
import {TbCurrencyDram} from "react-icons/tb";

function GiftPage(props) {

    const giftPageData = useSelector(state => state.gifts.giftPageData)
    const [count, setCount] = useState(1)

    return (
        <div className={s.giftPageWrapper}>
            <div className={s.imageBlock}></div>
            <div className={s.contentBlock}>
                <div className={s.title}>
                    <h2>{giftPageData?.title}</h2>
                </div>
                <div className={s.description}>
                    <p>{giftPageData?.description}</p>
                </div>
                <div className={s.price}>
                    <h2>{giftPageData?.price}<TbCurrencyDram /></h2>
                </div>

                    {giftPageData?.category.length > 0 && (
                        <div className={s.categoryWrapper}>
                            <h5>Categories</h5>
                            <ul className={s.categoryList}>
                        {giftPageData?.category?.map((item) => {
                            return (
                            <li key={item._id}>
                        {item.name}
                            </li>
                            )
                        })}
                            </ul>
                        </div>
                    )}



                <div className={s.count}>
                    <span className={s.minus} onClick={() => {
                            if(count > 1){
                                setCount(count - 1)
                            }
                        }
                    }><AiOutlineMinus /></span>
                    <span className={s.result}> {count} </span>
                    <span className={s.plus} onClick={() => {
                        if(count < giftPageData.count){
                            setCount(count + 1)
                        }
                    }
                    }><AiOutlinePlus /></span>
                </div>
                <div className={s.addButton}><button><BsFillBagPlusFill /> Add</button></div>
            </div>
        </div>
    );
}

export default GiftPage;