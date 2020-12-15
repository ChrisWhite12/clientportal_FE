import api from '../config/api'

async function registerUser(userInfo){
    try{
        console.log("userinfo", userInfo)
        const response =  await api.post("/user/register", userInfo)
        console.log("register from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

async function loginUser(userInfo){
    const response =  await api.post("/user/login", userInfo)
    console.log("login from server", response)
    return response.data
}

async function logoutUser(userInfo){
    const response =  await api.get("/user/logout", userInfo)
    console.log("logout from server", response)
    return response.data
}

async function forgotPassword(email){
    try{
        const response =  await api.post("/user/forgot_password", {email})
        console.log("forgotPassword from server", response)
        return response
    }
    catch(err){
        throw(err)
    }
}

async function updateUser(userInfo,token){
    try{
        const response =  await api.put(`/user/${token}`, userInfo)
        console.log("user back from server", response)
        return response
    }
    catch(err){
        throw(err)
    }
}


async function resetToken(token){
    const response = await api.get(`/user/reset/${token}`)
    console.log("resetToken from server", response)
    return response
}

async function readUsers(){
    try{
        const response =  await api.get(`/user`)
        console.log("user back from server", response)
        return response.data
    }
    catch(err){
        throw(err)
    }
}

export {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetToken,
    updateUser,
    readUsers
}