import axios from "../../axios/axios";

const Auth = {
    me:() => {
      axios.get('/auth/me').then((res) => {
          console.log(res)
      })
    },
    signUp : (user) => {
      return  axios.post('/auth/register',{
            email: user.email,
            fullName: user.fullName,
            password: user.password,
            mobile: user.mobile,
            address: user.address,
            avatarUrl: user.avatarUrl,
        },
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
            return res

        }).catch((err) => {
            console.log(err)
        })
    },
    signIn: (data) => {
        return axios.post('/auth/login',data)
    }
}

export default Auth