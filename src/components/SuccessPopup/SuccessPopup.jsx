import React from 'react';
import g from "../../global.module.css"

function SuccessPopup(props) {
    return (
        <div className={g.popupWrapper}>
            <div className={g.popupBlock}>
                {props.text}
            </div>
        </div>
    );
}

export default SuccessPopup;