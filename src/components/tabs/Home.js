import React from 'react'

import {useGlobalState} from '../../config/store';

// import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {

    const {store} = useGlobalState()
    const {loggedInUser, patientInfo} = store

    const zeroPad = (num, places) => {
        return String(num).padStart(places, '0')
    }

    const appStartDate = new Date(patientInfo?.appointments[0]?.appointment_start)
    const hrStart = zeroPad(appStartDate.getHours(),2)
    const minStart = zeroPad(appStartDate.getMinutes(),2)
    const dateStart = appStartDate.toDateString()
    const appEndDate = new Date(patientInfo?.appointments[0]?.appointment_end)
    const hrEnd = zeroPad(appEndDate.getHours(),2)
    const minEnd = zeroPad(appEndDate.getMinutes(),2)


    //TODO change time to date string
    return (

        <div className="home">
            <h1>Welcome {loggedInUser}</h1>
            <div id="nxtappt">
                <h3>Next Appointment</h3>
                <p>Your Next Appointment Is:</p>
                {(patientInfo.appointments.length > 0)?
                    <div>
                        <p>{dateStart}</p>
                        <p>{hrStart}:{minStart} to {hrEnd}:{minEnd}</p>
                    </div>
                 : <p>''</p>}
            </div>
        </div>
    )
}

export default Home