import api from '../config/api'

async function getProfile(){
    try{
        const response =  await api.get(`/profile`)
        console.log("getProfile from server", response)
        return response.data
    }
    catch(error){
        console.log("getProfile from server")
        throw(error)
    }
}

async function createProfile(userInfo){
    try{
        const response =  await api.post(`/profile`, userInfo)
        console.log("createProfile from server", response)
        return response.data
    }
    catch(error){
        console.log("createProfile from server - errors")
        throw(error)
    }
}

async function updateProfile(userInfo){
    try{
        const response =  await api.put(`/profile/update`, userInfo)
        console.log("updateProfile from server", response)
        return response.data
    }
    catch(error){
        console.log("updateProfile from server")
        throw(error)
    }
}

async function deleteProfile(id){
    try{
        const response =  await api.delete(`/profile/${id}`)
        console.log("deleteProfile from server", response)
        return response.data
    }
    catch(error){
        console.log("deleteProfile from server")
        throw(error)
    }
}



export{
    getProfile,
    createProfile,
    deleteProfile,
    updateProfile
}