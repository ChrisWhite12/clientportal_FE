import api from '../config/api'

async function getPatient(){
    try{
        const response =  await api.get(`/api/patient`)
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
    getPatient,
    getAppointments
}