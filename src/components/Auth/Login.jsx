import React, {useState} from 'react';
import s from "@/components/Auth/Auth.module.css";
import {setState} from "@/utils/changeStateFunctions/setState";
import {useDispatch} from "react-redux";
import {fetchAuth, fetchSignUp} from "@/redux/slices/auth";
import loginValidation from "@/utils/validations/login";
import signUpValidation from "@/utils/validations/signUp";

function Login() {
    const dispatch = useDispatch()
    const [loginMode, setLoginMode] = useState(true)
    const [loginStatus, setLoginStatus] = useState("")

    const [email, setEmail] = useState({
        text:"",
        errMsg:""
    })
    const [password, setPassword] = useState({
        text:"",
        errMsg:""
    })

    // SIGN UP State
    const [fullName, setFullName] = useState({
        text:"",
        errMsg:""
    })
    const [number, setNumber] = useState({
        text:"",
        errMsg:""
    })
    const [address, setAddress] = useState({
        text:"",
        errMsg:""
    })
    return (
        <>
            <div className={loginMode ? s.authSlide + " " + s.authSignIn : s.authSlide + " " + s.authSignUp}>
                <div className={s.signIn}>
                    <div>
                        <h2>Sign In</h2>
                        <div className={s.inputBlock}>
                            <input type="text" value={email.text} placeholder={"Type your email"} onChange={(e) => {setState(email,setEmail,e)}}/>
                            <span className={s.errMsg}>{email.errMsg}</span>
                        </div>
                        <div className={s.inputBlock}>
                            <input type="password" value={password.text} placeholder={"Type your password"} onChange={(e) => {setState(password,setPassword,e)}}/>
                            <span className={s.errMsg}>{password.errMsg}</span>
                            <span className={s.errMsg}>{loginStatus}</span>
                        </div>
                        <div>
                            <button onClick={() => {
                                const user = {
                                    email:email.text,
                                    password:password.text
                                }
                                if(loginValidation(email, password, setEmail,setPassword)){
                                    dispatch(fetchAuth(user)).then((data) => {
                                        if(data.meta.requestStatus !== "fulFilled"){
                                            setLoginStatus("Wrong email or password")
                                        }
                                    })
                                }

                            }}>SIGN IN</button>
                        </div>
                        <div>
                            <p onClick={ () => {
                                setLoginMode(false)
                            }}>SIGN UP</p>
                        </div>
                    </div>

                </div>


                <div className={s.signUp}>
                    <div>
                        <h2>Sign Up</h2>
                        <div className={s.inputBlock}>
                            <input type="text" value={fullName.text} placeholder={"Type your full name"} onChange={(e) => {setState(fullName,setFullName,e)}}/>
                            <span className={s.errMsg}>{fullName.errMsg}</span>
                        </div>
                        <div className={s.inputBlock}>
                            <input type="text" value={email.text} placeholder={"Type your email"} onChange={(e) => {setState(email,setEmail,e)}}/>
                            <span className={s.errMsg}>{email.errMsg}</span>
                        </div>
                        <div className={s.inputBlock}>
                            <input type="password" value={password.text} placeholder={"Type your password"} onChange={(e) => {setState(password,setPassword,e)}}/>
                            <span className={s.errMsg}>{password.errMsg}</span>
                        </div>
                        <div className={s.inputBlock}>
                            <input type="number" value={number.text} placeholder={"Type your phone number"} onChange={(e) => {setState(number,setNumber,e)}}/>
                            <span className={s.errMsg}>{number.errMsg}</span>
                        </div>
                        <div className={s.inputBlock}>
                            <input type="text" value={address.text} placeholder={"Type your address"} onChange={(e) => {setState(address,setAddress,e)}}/>
                            <span className={s.errMsg}>{address.errMsg}</span>
                        </div>
                        <div>
                            <button onClick={ () => {
                                const user = {
                                    email: email.text,
                                    fullName: fullName.text,
                                    password: password.text,
                                    mobile: number.text,
                                    address: address.text,

                                }
                                if(signUpValidation(fullName, email, password, number, address, setFullName, setEmail, setPassword, setNumber)){
                                    dispatch(fetchSignUp(user))
                                }

                            }} >SIGN UP</button>
                        </div>
                        <div>
                            <p onClick={ () => {
                                setLoginMode(true)
                            }}>SIGN IN</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Login;