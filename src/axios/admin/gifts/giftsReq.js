import axios from "@/axios/axios";

const giftsReq = {
    addGift: (data) => {
        return axios.post('/gifts',{
            title:data.title,
            description:data.description,
            price:data.price,
            count:data.count,
            category:data.category,
            imageUrl:data.imageUrl
        })
    }
}

export default giftsReq