import api from '../config/api'

async function getPatients(){
    try{
        const response =  await api.get(`/api`)
        console.log("getPatients from server", response)
        return response.data
    }
    catch(error){
        console.log("getPatients from server - err")
        throw(error)
    }
}

export{
    getPatients
}