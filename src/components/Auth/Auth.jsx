import React, {useEffect, useState} from 'react';
import s from "./Auth.module.css"
import {useSelector} from "react-redux";
import UserPersonalArea from "@/components/Auth/UserPersonalArea";
import Login from "@/components/Auth/Login";


function Auth(props) {

    const isAuth = useSelector((state) => {
        return state.auth.data
    })
    return (
        <div className={s.authBlock}>
            {isAuth ? <UserPersonalArea user={isAuth}/> : <Login />}

        </div>
    );
}

export default Auth;