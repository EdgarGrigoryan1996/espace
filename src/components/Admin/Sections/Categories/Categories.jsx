import React, {useEffect, useRef, useState} from 'react';
import g from "../AdminSectionsGlobal.module.css"
import s from "./Categories.module.css"
import {setState} from "@/utils/changeStateFunctions/setState";
import {useDispatch, useSelector} from "react-redux";
import categoryReq from "@/axios/admin/category/categoryReq";
import {isLoading, loadingEnd} from "@/redux/slices/loading";
import GlobalLoader from "@/components/Loaders/GlobalLoader";
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup";
import {AiFillDelete, AiFillEdit, AiOutlineClose} from "react-icons/ai";
import {MdDone} from "react-icons/md";

function Categories(props) {
    const loadingStatus = useSelector(state => state.loading.status)
    const dispatch = useDispatch()
    const [successMessage, setSuccessMessage] = useState(false)
    const [categoryList, setCategoryList] = useState(null)
    const [name, setName] = useState({
        text:"",
        err:false
    })

    const [editCategoryText, sesEditCategoryText] = useState("")
    const [editCategoryErr, setEditCategoryErr] = useState(null)
    const [editInputShow,setEditInputShow] = useState(null)
    const [updatePage, setUpdatePage] = useState(0)
    useEffect(() => {

            dispatch(isLoading())
            categoryReq.getCategories().then((res) => {
                setCategoryList(res.data)
                dispatch(loadingEnd())
            })


    },[updatePage])


    return (
        <div className={g.wrapper}>
            {loadingStatus && <GlobalLoader />}
            {successMessage && <SuccessPopup text={"Category Added"} />}
            <div><h2>Add Category</h2></div>
            <div className={g.inputsBlock}>
                <div className={g.inputBlock}>
                    <span>Category name</span>
                    <div>
                        <input type="text" value={name.text} onChange={(e) => {setState(name,setName,e)}}/>
                        <span className={g.err}>{name.err}</span>
                    </div>
                </div>
                <button onClick={() => {
                    if(name.text.trim() !== ""){
                        dispatch(isLoading())
                        categoryReq.addCategory({
                            name:name.text
                        }).then((res) => {
                            dispatch(loadingEnd())
                            setSuccessMessage(true)
                            setTimeout(() => {
                                setSuccessMessage(false)
                            },1000)
                            setName({
                                text:"",
                                err:false
                            })
                            setUpdatePage(updatePage + 1)
                        })
                    } else {
                        setName({
                            ...name,
                            err:"Name is required"
                        })
                    }

                }}>Add</button>
            </div>
            <div className={s.categoriesList}>
                <h2>Category List</h2>
                {categoryList?.map((category) => {
                    return (
                        <div key={category._id} className={s.categoryListItem}>
                            <div>{category.name}</div>
                            <div className={s.categoryControllers}>
                                <AiFillEdit onClick={() => {
                                    setEditCategoryErr(null)
                                    sesEditCategoryText(category.name)
                                    setEditInputShow(category._id)
                                }}/>
                                <AiFillDelete onClick={() => {
                                    dispatch(isLoading())
                                    categoryReq.deleteCategory(category._id).then((res) => {
                                        dispatch(loadingEnd())
                                        setUpdatePage(updatePage + 1)
                                    })
                                }}/>
                            </div>
                            {
                                editInputShow && (
                                    <div className={editInputShow === category._id ? s.editInput + " " + s.editInputActive : s.editInput}>
                                        <input
                                            autoFocus={true}
                                            type="text"
                                            placeholder={editCategoryErr ? editCategoryErr : ""}
                                            value={editCategoryText}
                                            onChange={(e) => {

                                            sesEditCategoryText(e.target.value)
                                        }
                                        }/>
                                        <div className={s.categoryControllers}>
                                            <MdDone onClick={() => {
                                                if(editCategoryText.trim() !== ""){
                                                    dispatch(isLoading)
                                                    categoryReq.updateCategory({id:category._id,name:editCategoryText}).then((res) => {
                                                        setEditInputShow(null)
                                                        setUpdatePage(updatePage + 1)
                                                        dispatch(loadingEnd)
                                                    })
                                                } else {
                                                    setEditCategoryErr("Write category name" )
                                                }

                                            }
                                            }/>
                                            <AiOutlineClose onClick={() => {
                                                setEditInputShow(null)
                                            }}/>
                                        </div>
                                    </div>
                                )
                            }


                        </div>
                    )
                })}
            </div>


        </div>

    );
}

export default Categories;