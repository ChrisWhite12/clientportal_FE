import React, { useEffect, useState } from 'react'
import {getTicket, updateTicket, deleteTicket} from '../../services/ticketServices'

import { Button } from 'react-bootstrap'

import timeConvert from '../../utils/timeConvert'

const Notifications = () => {

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

    const handleAccept = (event) => {
        let ticketUpdate = tickets.find(el => el._id === event.target.value)
        let ticketInd = tickets.findIndex(el => el._id === event.target.value)
        ticketUpdate.status = 'accepted'
        updateTicket(ticketUpdate)
        .then((res) => {
            const updatedTickets = [...tickets]
            updatedTickets[ticketInd] = ticketUpdate
            setTickets(updatedTickets)
        })
        .catch((err) => console.log(err))
    }

    const handleReject = (event) => {
        let ticketUpdate = tickets.find(el => el._id === event.target.value)
        let ticketInd = tickets.findIndex(el => el._id === event.target.value)
        ticketUpdate.status = 'rejected'
        updateTicket(ticketUpdate)
        .then((res) => {
            const updatedTickets = [...tickets]
            updatedTickets[ticketInd] = ticketUpdate
            setTickets(updatedTickets)
        })
        .catch((err) => console.log(err))
    }

    const handleDelete = (event) => {
        deleteTicket(event.target.value)
        .then((res) => {
            setTickets(prevState => prevState.filter(item => item._id !== event.target.value))
        })
        .catch((err) => console.log(err))
    }
    
    return (
        <div className="notewrapper">
            <h1>Notifications</h1>
            <ul>
            {tickets.map((ticket) => {
                const {dateStart, hrStart, minStart} = timeConvert(ticket.appDate)
                return <li key={ticket._id} className='notiItem'>
                    <div>
                        <p>Ticket: {ticket._id}</p>
                        <p>Date: {dateStart} - {hrStart}:{minStart}</p> 
                        <p>With {ticket.username}</p>
                    </div>
                    <div>
                        <p>status: {ticket.status}</p>
                        <Button className='basic_btn' value={ticket._id} variant='secondary' onClick={handleReject}>Reject</Button>
                        <Button className='basic_btn' value={ticket._id} variant='primary' onClick={handleAccept}>Accept</Button>
                        <Button className='basic_btn' value={ticket._id} variant='danger' onClick={handleDelete}>Delete</Button>
                    </div>
                </li>
            })}
            </ul>
        </div>
    )
}

export default Notifications