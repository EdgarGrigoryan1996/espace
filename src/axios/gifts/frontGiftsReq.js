import axios from "@/axios/axios";

const frontGiftsReq = {
    getGifts: () => {
        return axios.get('/gifts')
    },
    getGiftById: (giftId) => {
        return axios.get(`/gifts/${giftId}`)
    }
}

export default frontGiftsReq