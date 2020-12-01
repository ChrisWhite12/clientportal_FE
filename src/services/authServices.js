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

export {
    registerUser,
    loginUser,
    logoutUser
}