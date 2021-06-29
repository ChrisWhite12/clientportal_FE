import React, { useEffect, useState } from 'react'
import { createTicket, deleteTicket, getTicket} from '../services/ticketServices';
import timeConvert from '../utils/timeConvert';
import { useGlobalState } from '../config/store';

import { Button, Alert, Spinner } from 'react-bootstrap'
import { sendMessage } from '../services/apiServices';

const Appointment = (props) => {
    const {dateStart, hrStart, minStart, hrEnd, minEnd} = timeConvert(props.appData.starts_at, props.appData.ends_at)
    const [reqState, setReqState] = useState('change')
    const [alert, setAlert] = useState(false)
    const [ticMatch, setTicMatch] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { store } = useGlobalState()
    const { role } = store


    useEffect(() => {
        console.log('in useEffect')
        console.log('props.appData',props.appData);
        getTicket(props.appData.id)
        .then((ticRes) => {
            console.log('ticRes',ticRes);
            if(ticRes){
                setReqState('cancel')
                console.log('ticRes._id',ticRes._id);
                setTicMatch(ticRes._id)
            }
            setIsLoading(false)
        })
    },[props])

    const clickTicket = async () => {

        if(reqState === 'change'){
            setReqState('cancel')
            setAlert(true)
            setTimeout(() => setAlert(false), 5000)

            try{
                const ticRes = await createTicket({
                    username: props.appData.patient_name,
                    contact: props.number,
                    appId: props.appData.id,
                    appDate: props.appData.starts_at,
                    status: "pending",
                    notified: false,
                })
                console.log('sending message')
                await sendMessage(`Change request for ${props.appData.patient_name}, Time: ${new Date(props.appData.starts_at).toDateString()}, Contact: ${props.number}`)
                setTicMatch(ticRes.ticId)
            }
            catch(err){
                console.log('ticCreate err',err)
            }
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
            {!isLoading ?
                <div>
                    <div className='appDataRow'>
                        <p>{dateStart}</p>
                        <p>{hrStart}:{minStart}</p>
                        <p>{hrEnd}:{minEnd}</p>
                        <p>{props.appData.appTypeName}</p>
                        {
                            role === 'user' ?
                            <Button value={props.appData.id} variant={reqState === 'change' ? 'primary' : 'warning' }
                            onClick={clickTicket}>{reqState === 'change' ? 'Change Request' : 'Cancel Request' }</Button>
                            :
                            <p>{props.appData.patient_name}</p>
                        }
                    </div>
                    <div>
                        {alert ?
                            <Alert variant='success'>Change request submited. The practice will contact you shortly to change your appointment.</Alert>
                            :
                            <p></p>
                        }
                    </div>
                </div>
            :
                <Spinner animation='border' variant='primary'/>
            }
        </div>
    );
};

export default Appointment