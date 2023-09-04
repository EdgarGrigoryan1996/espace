import React, {useEffect, useState} from 'react';
import s from "./Shop.module.css"
import GiftCard from "@/components/GiftCard/GiftCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchGetGifts} from "@/redux/slices/gifts";
import Select from "react-select";
import {isLoading, loadingEnd} from "@/redux/slices/loading";
import categoryReq from "@/axios/admin/category/categoryReq";

// const options = [
//     { value: 'all', label: 'All' },
//     { value: 'test', label: 'Test' },
//     { value: 'jhs', label: 'Jhs' },
//     { value: 'hello', label: 'Hello' },
// ]

function Index(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isLoading())
        dispatch(fetchGetGifts()).then((res) => {
            if(res.type === "/gifts/fulfilled"){
                console.log("Success")
                categoryReq.getCategories().then((data) => {
                    setOptions([
                        ...options,
                        ...data.data.map((category) => {
                            return {
                                value:category.name,
                                label:category.name
                            }
                        })
                    ])
                    dispatch(loadingEnd())
                })
            }
        })

    },[])
    const gifts = useSelector( state => state.gifts.data)
    console.log(gifts)

    const [options, setOptions] = useState([
        {
            value:"all",
            label:"All"
        }
    ])

    const [selectedOption, setSelectedOption] = useState(options ? options[0] : null);
    const [filteredGifts, setFilteredGifts] = useState(null)

    useEffect(() => {
        if(selectedOption?.value !== 'all'){
            setFilteredGifts(gifts?.filter((gift) => {
                 return gift.category.filter((category) => {
                     return category.name === selectedOption?.value
                 }).length > 0
            }))
        } else {
            setFilteredGifts(null)
        }

    },[selectedOption])


    return (
        <div>
            <div className={s.filter}>
                <Select

                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div className={s.giftsWrapper}>
                {filteredGifts !== null ?
                    (
                        filteredGifts?.map((gift) => {
                            return (
                                <GiftCard key={gift._id} gift={gift}/>
                            )
                        })
                    )
                    :
                    (
                        gifts?.map((gift) => {
                            return (
                                <GiftCard key={gift._id} gift={gift}/>
                            )
                        })
                    )
                }

            </div>


        </div>
    );
}

export default Index;