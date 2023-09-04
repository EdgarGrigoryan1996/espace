import axios from "@/axios/axios";

const usersReq = {
    getUsers: () => {
        return axios.get('/users')
    },
    deleteUser: (id) => {
        return axios.delete(`/users/${id}`)
    },
    updateUser: (data) => {
        return axios.patch(`/users/${data.id}`,{
            ...data.data
        })
    }
}

export default usersReq