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

async function getPractitionerApp(id){
    try{
        const response =  await api.get(`/api/practitioner/appointments/${id}`)
        console.log("getPractitioner from server", response)
        return response.data
    }
    catch(error){
        console.log("getPractitioner from server - err")
        throw(error)
    }
}

async function updatePatient(patientInfo){
    try{
        const response =  await api.put(`/api/patient`, patientInfo)
        console.log("updatePatients from server", response)
        return response.data
    }
    catch(error){
        console.log("updatePatients from server - err")
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

async function sendMessage(text){
    try{
        const response =  await api.post(`/phone`, {text})
        console.log("sendMessage from server", response)
        return response.data
    }
    catch(error){
        console.log("sendMessage from server - err")
        throw(error)
    }
}

export{
    getPatient,
    getPractitionerApp,
    getAppointments,
    updatePatient,
    sendMessage
}