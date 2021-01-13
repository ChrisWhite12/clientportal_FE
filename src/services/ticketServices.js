import api from '../config/api'

async function getTicket(){
    try{
        const response =  await api.get(`/ticket`)
        console.log("get ticket from server", response)
        return response.data
    }
    catch(error){
        console.log("get ticket from server")
        throw(error)
    }
}

async function createTicket(userInfo){
    try{
        const response =  await api.post(`/ticket`, userInfo)
        console.log("create ticket from server", response)
        return response.data
    }
    catch(error){
        console.log("createTicket from server")
        throw(error)
    }
}

async function updateTicket(ticInfo){
    try{
        const response =  await api.put(`/ticket/${ticInfo._id}`, ticInfo)
        console.log("update ticket from server", response)
        return response.data
    }
    catch(error){
        console.log("updateTicket from server")
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
        console.log("deleteTicket from server")
        throw(error)
    }
}

export{
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket
}