import React, {useEffect, useState} from 'react';
import s from "./Header.module.css"
import {AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import {BsFillBagFill} from "react-icons/bs";
import Navbar from "@/components/Header/Navbar/Navbar";
import Bag from "@/components/Bag/Bag";
import RightPopup from "@/components/RightPopup/RightPopup";

function Header() {

    const [activePopup, setActivePopup] = useState("")

    return (
        <>
            <header>
                <div className={s.headerWrapper}>
                    <div className={s.shopName}>
                        <h1><span>E</span>SPACE</h1>
                        <h6>Your Emotion Space</h6>
                    </div>
                    <div className={s.headerButtons}>
                        <ul>
                            <li><AiOutlineSearch /></li>
                            <li onClick={ () => {
                                setActivePopup("LOGIN")
                            }}><AiOutlineUser /></li>
                            <li onClick={ () => {
                                setActivePopup("BAG")
                            } }><BsFillBagFill /></li>
                        </ul>
                    </div>
                </div>
                <Navbar />
            </header>
            {activePopup !== "" &&
                <div className={s.bagWrapper} onClick={() => {
                    setActivePopup("")
                }}>

                </div>

            }
            <RightPopup mode={activePopup} bagIsShow={activePopup} setBagIsShow={setActivePopup}/>
            {/*<Bag bagIsShow={bagIsShow} setBagIsShow={setBagIsShow}/>*/}

        </>

    );
}

export default Header;