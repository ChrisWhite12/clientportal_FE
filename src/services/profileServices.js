import api from '../config/api'

async function getProfile(id){
    try{
        const response =  await api.get(`/profile/${id}`)
        console.log("register from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

async function createProfile(userInfo){
    try{
        const response =  await api.post(`/profile/create`, userInfo)
        console.log("register from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

async function updateProfile(userInfo){
    try{
        const response =  await api.put(`/profile/${userInfo._id}`, userInfo)
        console.log("register from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

async function deleteProfile(id){
    try{
        const response =  await api.delete(`/profile/${id}`)
        console.log("register from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}



export{
    getProfile,
    createProfile,
    deleteProfile,
    updateProfile
}