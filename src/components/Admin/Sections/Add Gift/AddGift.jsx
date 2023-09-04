import React, {useEffect, useState} from 'react';
import g from "../AdminSectionsGlobal.module.css"
import s from "./AddGift.module.css"
import {setState} from "@/utils/changeStateFunctions/setState";
import {addGiftValidation} from "@/utils/validations/addGift";
import giftsReq from "@/axios/admin/gifts/giftsReq";
import {useDispatch, useSelector} from "react-redux";
import {isLoading, loadingEnd} from "@/redux/slices/loading";
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup";
import categoryReq from "@/axios/admin/category/categoryReq";

function AddGift(props) {
    const dispatch = useDispatch()
    const [categoryData, setCategoryData] = useState(null)
    useEffect(() => {
        dispatch(isLoading())
        categoryReq.getCategories().then((data) => {
            setCategoryData(data.data)
            dispatch(loadingEnd())
        })
    },[])


    const [title, setTitle] = useState({
        text:"",
        err:false
    })
    const [description, setDescription] = useState({
        text:"",
        err:false
    })
    const [price, setPrice] = useState({
        text:"",
        err:false
    })
    const [count, setCount] = useState({
        text:"",
        err:false
    })
    const [categoryText, setCategoryText] = useState({
        text:"",
        err:false
    })
    const [categoryResult, setCategoryResult] = useState([])
    const [successMessage, setSuccessMessage] = useState(false)

    return (
        <div className={g.wrapper}>
            {successMessage && <SuccessPopup text={"Gift Added"} />}
            <h2>Add Gift</h2>
            
            <div className={g.inputsBlock}>
                <div className={g.inputBlock}>
                    <span>Title</span>
                    <div>
                        <input type="text" value={title.text} onChange={(e) => {setState(title,setTitle,e)}}/>
                        <span className={g.err}>{title.err}</span>
                    </div>

                </div>
                <div className={g.inputBlock}>
                    <span>Description</span>
                    <textarea name="description" value={description.text} onChange={(e) => {setState(description,setDescription,e)}}></textarea>
                </div>
                <div className={g.inputBlock}>
                    <span>Price</span>
                    <div>
                        <input type="number" value={price.text} onChange={(e) => {setState(price,setPrice,e)}}/>
                        <span className={g.err}>{price.err}</span>
                    </div>

                </div>
                <div className={g.inputBlock}>
                    <span>Count</span>
                    <div>
                        <input type="number" value={count.text} onChange={(e) => {setState(count,setCount,e)}}/>
                        <span className={g.err}>{count.err}</span>
                    </div>

                </div>
                <div className={g.inputBlock}>
                    <span>Category</span>
                    <div>
                        {/*<div>*/}
                        {/*    {category.length === 0 && <p className={s.noCategory}>No Category</p>}*/}
                        {/*    {category.map((item) => {*/}
                        {/*        return (*/}
                        {/*            <p key={item.id } className={s.categoryItem}>{item.text} <span onClick={() => {*/}
                        {/*                setCategory(category.filter((stateItem) => {*/}
                        {/*                    return item.id !== stateItem.id*/}
                        {/*                }))*/}
                        {/*            }}>x</span></p>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}
                        <div className={s.selectCategories}>
                            {categoryData?.map((category) => {
                                return (
                                    <div className={categoryResult.includes(category?._id) ? s.categoryItem + " " + s.selectedItem : s.categoryItem} key={category._id} onClick={() => {
                                        if(categoryResult.includes(category._id)){
                                            setCategoryResult(categoryResult.filter((item) => {
                                               return item !== category._id
                                            }))
                                        } else {
                                            setCategoryResult([
                                                ...categoryResult,
                                                category._id

                                            ])
                                        }

                                    }}>{category.name}</div>
                                )
                            })}
                        </div>
                        {/*<input type="text" placeholder={"Type... and press Enter for add category"} value={categoryText.text} onChange={(e) => {setState(categoryText,setCategoryText,e)}} onKeyDown={(e) => {*/}
                        {/*    if(e.code === "Enter"){*/}
                        {/*        setCategory([...category,{id:Math.random(),text:categoryText.text}])*/}
                        {/*        setCategoryText({*/}
                        {/*            ...categoryText,*/}
                        {/*            text: ""*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*}}/>*/}
                    </div>

                </div>
                <div>
                    <button onClick={() => {
                        if(addGiftValidation(title,price,count,setTitle,setPrice,setCount)){
                            const data = {
                                title:title.text,
                                description:description.text,
                                price:price.text,
                                count:count.text,
                                category:categoryResult,
                            }
                            dispatch(isLoading())
                            giftsReq.addGift(data).then((res) => {
                                setTitle({
                                    text:"",
                                    err:false
                                })
                                setDescription({
                                    text:"",
                                    err:false
                                })
                                setPrice({
                                    text:"",
                                    err:false
                                })
                                setCount({
                                    text:"",
                                    err:false
                                })
                                setCategoryText({
                                    text:"",
                                    err:false
                                })
                                setCategoryResult([])
                                dispatch(loadingEnd())
                                setSuccessMessage(true)
                                setTimeout(() => {
                                    setSuccessMessage(false)
                                },1000)
                            })
                        }
                    }}>ADD</button>
                </div>

            </div>
        </div>
    );
}

export default AddGift;