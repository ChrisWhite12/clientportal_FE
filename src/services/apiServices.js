import api from '../config/api'

async function getPatients(){
    try{
        const response =  await api.get(`/api/patients`)
        console.log("getPatients from server", response)
        return response.data
    }
    catch(error){
        console.log("getPatients from server - err")
        throw(error)
    }
}

async function getAppointments(){
    try{
        const response =  await api.get(`/api/appointments`)
        console.log("getPatients from server", response)
        return response.data
    }
    catch(error){
        console.log("getPatients from server - err")
        throw(error)
    }
}

export{
    getPatients,
    getAppointments
}