import React from 'react';
import s from "@/components/Admin/Sections/Users/Users.module.css";

function DeletePopup(props) {
    return (
        <div className={s.deletePopup}>
            <div className={s.deletePopupBlock}>
                <button onClick={() => {
                    props.delete(props.deletePopupStatus.user)
                    props.setDeletePopupStatus({
                        status:false,
                        user:null
                    })
                }}>DELETE</button>
                <button onClick={() => {
                    props.setDeletePopupStatus({
                        status:false,
                        user:null
                    })
                }}>CANCEL</button>
            </div>
        </div>
    );
}

export default DeletePopup;