export const addGiftValidation = (title,price,count,setTitle,setPrice,setCount) => {
    let status = true

    if(title.text.trim() === ""){
        status = false
        setTitle({
            ...title,
            err:"Title is required"
        })
    } else {
        setTitle({
            ...title,
            err:""
        })
    }
    if(price.text.trim() === ""){
        status = false
        setPrice({
            ...price,
            err:"Price is required"
        })
    } else {
        setPrice({
            ...price,
            err:""
        })
    }
    if(count.text.trim() === ""){
        status = false
        setCount({
            ...count,
            err:"Count is required"
        })
    } else {
        setCount({
            ...count,
            err:""
        })
    }

    return status

}