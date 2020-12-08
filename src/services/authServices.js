import api from '../config/api'

async function registerUser(userInfo){
    console.log("userinfo", userInfo)
    const response =  await api.post("/user/register", userInfo)
    console.log("user back from server", response)
    return response.data
}

async function loginUser(userInfo){
    const response =  await api.post("/user/login", userInfo)
    console.log("user back from server", response)
    return response.data
}

async function logoutUser(userInfo){
    const response =  await api.get("/user/logout", userInfo)
    console.log("user back from server", response)
    return response.data
}

async function forgotPassword(email){
    const response =  await api.post("/user/forgot_password", {email})
    console.log("user back from server", response)
    return response
}

// async function updateUser(userInfo){
//     const response =  await api.post("/user", {email})
//     console.log("user back from server", response)
//     return response
// }

async function resetToken(token){
    const response = await api.get(`/user/reset/${token}`)
    console.log("user back from server", response)
    return response
}

async function getApiData(){
    const response = await api.get("/api")
    console.log("user back from server", response)
    return response
}

export {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetToken,
    getApiData
}