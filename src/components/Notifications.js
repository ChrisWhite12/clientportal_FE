import React, {useEffect, useState} from 'react'
import {createTicket, getTicket, updateTicket, deleteTicket} from '../services/ticketServices'

const Notifications = () => {

    const [count, setCount] = useState(1)
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        getTicket()
            .then((res) => {
                console.log(res)
                setTickets(res)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    // const clickTicket = () => {
    //     console.log('creating ticket')
    //     createTicket({
    //         appId: count,
    //         appDate: "1/1/21",
    //         status: "pending",
    //         notified: false,
    //     })
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     setCount(count + 1)
    // }

    const handleAccept = (event) => {
        let ticketUpdate = tickets.filter(el => el._id === event.target.value)[0]
        ticketUpdate.status = 'accepted'
        updateTicket(ticketUpdate)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    const handleReject = (event) => {
        let ticketUpdate = tickets.filter(el => el._id === event.target.value)[0]
        ticketUpdate.status = 'rejected'
        updateTicket(ticketUpdate)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    const handleDelete = (event) => {
        deleteTicket(event.target.value)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    //TODO change dates to dateStrings
    return (
        <div className="notewrapper">
            <h1>Notifications</h1>
            <ul>
            {tickets.map((ticket) => {
                return <li key={ticket._id}><p>Ticket: {ticket._id}</p><p>appId:{ticket.appId}</p><p>appDate: {ticket.appDate}</p> 
                <p>status: {ticket.status}</p><p>userId: {ticket.userId}</p><p>pracId:{ticket.practitionerId}</p>
                <button onClick={(event) => handleReject(event)} value={ticket._id}>Reject</button>
                <button onClick={(event) => handleAccept(event)} value={ticket._id}>Accept</button>
                <button onClick={(event) => handleDelete(event)} value={ticket._id}>Delete</button></li>
            })}
            </ul>
            {/* <button id="create_ticket" onClick={clickTicket}>
                    Create Ticket
            </button> */}
        </div>
    )
}

export default Notifications