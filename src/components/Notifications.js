import React, {Component, useEffect, useState} from 'react'
import {createTicket, getTicket} from '../services/ticketServices'

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

    const clickTicket = () => {
        console.log('creating ticket')
        createTicket({
            appId: count,
            appDate: "1/1/21",
            status: "pending",
            notified: false,
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
            {tickets.map((ticket) => {
                return <li key={ticket._id}><p>Ticket: {ticket._id}</p><p>appId:{ticket.appId}</p><p>appDate: {ticket.appDate}</p> 
                <p>status: {ticket.status}</p><p>userId: {ticket.userId}</p><p>pracId:{ticket.practitionerId}</p><button>Reject</button><button>Accept</button></li>
            })}
            </ul>
            <button id="create_ticket" onClick={clickTicket}>
                    Create Ticket
            </button>
        </div>
    )
}

export default Notifications