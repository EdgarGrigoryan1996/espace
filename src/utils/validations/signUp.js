const signUpValidation = (fullName, email, password, number, address, setFullName, setEmail, setPassword, setNumber, setAddress) => {
    let status = true

    const re = /\S+@\S+\.\S+/;
    if(fullName.text.trim() === ""){
        setFullName({
            ...fullName,
            errMsg:"Name is required"
        })
        status = false
    } else if(fullName.text.length < 4){
        setFullName({
            ...fullName,
            errMsg:"Min 3 symbols"
        })
        status = false
    } else {
        setFullName({
            ...fullName,
            errMsg:""
        })
    }


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
    } else if(password.text.length < 6) {
        setPassword({
            ...password,
            errMsg:"min 6 symbols"
        })
        status = false
    } else {
        setPassword({
            ...password,
            errMsg:""
        })
    }

    if(number.text.trim() === ""){
        setNumber({
            ...number,
            errMsg:"Number is required"
        })
        status = false
    } else if(number.text.length !== 9 && number.text.length !== 11) {
        setNumber({
            ...number,
            errMsg:"not valid number"
        })
        status = false
    } else {
        setNumber({
            ...number,
            errMsg:""
        })
    }


    return status

}

export default signUpValidation