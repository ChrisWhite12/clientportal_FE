import React, { useEffect, useState } from 'react'
import { createTicket, deleteTicket} from '../services/ticketServices';
import timeConvert from '../utils/timeConvert';

import { Button, Alert } from 'react-bootstrap'

const Appointment = (props) => {
    const {dateStart, hrStart, minStart, hrEnd, minEnd} = timeConvert(props.appData.starts_at, props.appData.ends_at)
    const [reqState, setReqState] = useState('change')
    const [alert, setAlert] = useState(false)
    const [ticMatch, setTicMatch] = useState(null)

    useEffect(() => {
        console.log('in useEffect')
        console.log('props.appData',props.appData);

        //TODO get ticket by appId
        // if(props.appData.ticket){
        //     console.log('set to cancel')
        //     setReqState('cancel')
        // }
    },[props])

    const clickTicket = () => {

        if(reqState === 'change'){
            setReqState('cancel')
            setAlert(true)
            setTimeout(() => setAlert(false), 5000)
            createTicket({
                username: props.appData.patient_name,
                contact: props.number,
                appId: props.appData.id,
                appDate: props.appData.starts_at,
                status: "pending",
                notified: false,
            })
            .then(ticRes => {
                setTicMatch(ticRes.ticId)
            })
        }
        else{
            setReqState('change')
            //delete the ticket

            //deleteTicket(id)
            deleteTicket(ticMatch)
            .then((res) => console.log('ticDel res',res))
            .catch((err) => console.log('ticDel err',err))
            setTicMatch(null)
        }
        
        
    }


    return (
        <div>
            <div className='appDataRow'>
                <p>{dateStart}</p>
                <p>{hrStart}:{minStart}</p>
                <p>{hrEnd}:{minEnd}</p>
                <p>{props.appData.appTypeName}</p>
                <Button value={props.appData.id} variant={reqState === 'change' ? 'primary' : 'warning' }
                onClick={clickTicket}>{reqState === 'change' ? 'Change Request' : 'Cancel Request' }</Button>
            </div>
            <div>
                {alert ?
                    <Alert variant='success'>Change request submited. The practice will contact you shortly to change your appointment.</Alert>
                    :
                    <p></p>
                }
            </div>
        </div>
    );
};

export default Appointment