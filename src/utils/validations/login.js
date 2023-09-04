const loginValidation = (email, password, setEmail, setPassword) => {
    let status = true
    const re = /\S+@\S+\.\S+/;
    if(email.text.trim() === ""){
        setEmail({
            ...email,
            errMsg:"Email is required"
        })
        status = false

    } else if (!re.test(email.text)){
        setEmail({
            ...email,
            errMsg: "Email is not valid"
        })
        status = false
    } else {
        setEmail({
            ...email,
            errMsg: ""
        })
    }


    if(password.text.trim() === ""){
        setPassword({
            ...password,
            errMsg:"Password is required"
        })
        status = false
    } else {
        setPassword({
            ...password,
            errMsg:""
        })
    }


    return status

}

export default loginValidation