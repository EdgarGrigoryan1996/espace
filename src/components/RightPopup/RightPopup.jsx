import React from 'react';
import Bag from "@/components/Bag/Bag";
import s from "./RightPopup.module.css"
import Auth from "@/components/Auth/Auth";

function RightPopup(props) {
   return (
       <>
           <div className={props.bagIsShow ? s.popupBlock + " " + s.showPopup : s.popupBlock}>
               <div className={s.bagClose}>
                   <h3 onClick={() => {
                       props.setBagIsShow("")
                   }}>X</h3>
               </div>
               {props.mode === "BAG" && <Bag />}
               {props.mode === "LOGIN" && <Auth />}
           </div>
       </>

   )
}

export default RightPopup;