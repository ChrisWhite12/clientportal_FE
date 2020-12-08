import api from '../config/api'

async function getTicket(id){
    try{
        const response =  await api.get(`/ticket/${id}`)
        console.log("get ticket from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

async function createTicket(userInfo){
    try{
        const response =  await api.post(`/ticket/create`, userInfo)
        console.log("create ticket from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

async function updateTicket(userInfo){
    try{
        const response =  await api.put(`/ticket/${userInfo._id}`, userInfo)
        console.log("update ticket from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

async function deleteTicket(id){
    try{
        const response =  await api.delete(`/ticket/${id}`)
        console.log("delete ticket from server", response)
        return response.data
    }
    catch(error){
        throw(error)
    }
}

export{
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket
}