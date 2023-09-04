import React from 'react';
import s from "./Bag.module.css"

function Bag(props) {
    return (

            <div className={s.bagHead}>
                <div className={s.bagCount}>
                    <h3>BAG</h3>
                    <div>0</div>
                </div>
            </div>


    );
}

export default Bag;