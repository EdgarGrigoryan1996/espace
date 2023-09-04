import React from 'react';
import {useDispatch} from "react-redux";
import {exit} from "@/redux/slices/auth";

function UserPersonalArea(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{props.user.fullName}</h2>


            <div>
                <button onClick={() => {
                    dispatch(exit())
                }}>Exit</button>
            </div>
        </div>
    );
}

export default UserPersonalArea;