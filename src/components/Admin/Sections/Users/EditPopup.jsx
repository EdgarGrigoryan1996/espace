import React, {useState} from 'react';
import s from "@/components/Admin/Sections/Users/Users.module.css";
import usersReq from "@/axios/admin/users/usersReq";
import {useDispatch} from "react-redux";
import {isLoading, loadingEnd} from "@/redux/slices/loading";

function EditPopup(props) {
    const dispatch = useDispatch()
    const [fullName, setFullName] = useState(props?.user?.fullName)
    const [email, setEmail] = useState(props?.user?.email)
    const [mobile, setMobile] = useState(props?.user?.mobile)
    const [address, setAddress] = useState(props?.user?.address)


    return (
        <div className={props.popupStatus ? s.editPopup + " " + s.editPopupActive : s.editPopup}>
            <div className={props.popupStatus ? s.popupBlock + " " + s.popupBlockActive : s.popupBlock}>
                <span onClick={() => {
                    props.setPopupStatus(false)
                    props.setCurrentEditUser(null)
                }} className={s.close}>X</span>
                <div className={s.inputsGroup}>
                    <div className={s.inputBlock}>
                        <span>Full Name</span>
                        <input type="text" value={fullName} onChange={(e) => {setFullName(e.target.value)}}/>
                    </div>
                    <div className={s.inputBlock}>
                        <span>Email</span>
                        <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className={s.inputBlock}>
                        <span>Phone Number</span>
                        <input type="text" value={mobile} onChange={(e) => {setMobile(e.target.value)}}/>
                    </div>
                    <div className={s.inputBlock}>
                        <span>Address</span>
                        <input type="text" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                    </div>
                    <button onClick={() => {
                        dispatch(isLoading())
                        usersReq.updateUser({
                            id:props.user._id,
                            data:{
                                email,
                                fullName,
                                mobile,
                                address,
                            }
                        }).then(() => {
                            props.setPopupStatus(false)
                            props.setCurrentEditUser(null)
                            props.setUpdatePage(props.updatePage + 1)
                            dispatch(loadingEnd())
                        })
                    }}>SAVE</button>
                </div>

                <div>

                </div>

            </div>
        </div>
    );
}

export default EditPopup;