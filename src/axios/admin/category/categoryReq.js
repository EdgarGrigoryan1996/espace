import axios from "@/axios/axios";

const categoryReq = {
    addCategory : (data) => {
        return axios.post('/category',{
            name:data.name
        })
    },
    getCategories : () => {
        return axios.get('/category')
    },
    updateCategory : (data) => {
        return axios.patch(`/category/${data.id}`,{
            name:data.name
        })
    },
    deleteCategory : (id) => {
        return axios.delete(`/category/${id}`)
    }
}

export default categoryReq