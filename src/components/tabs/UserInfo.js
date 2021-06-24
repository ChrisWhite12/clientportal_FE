import React, { useEffect, useState } from 'react'
import { StateContext } from '../../config/store';
import { Button } from '../FormComponents';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../config/store'
import '../../App.css';

const UserInfo = (props) => {
    const [patientInfoData, setPatientInfoData] = useState([])

    const {dispatch,store} = useGlobalState()

    useEffect(() => {
        const {patientInfo} = store
        console.log('patientInfo - UserInfo', patientInfo)
        setPatientInfoData(patientInfo.patient)
    }, [])

    return (
        <div className="displayinfowrapper">        
            <h1>Client Information</h1>
            <div className="fieldnames">Client First Name:</div>
            <div className="displaytextbox">{patientInfoData.first_name}</div>
            <div className="fieldnames">Client Last Name:</div>
            <div className="displaytextbox">{patientInfoData.last_name}</div>
            <div className="fieldnames">Client Address:</div>
            <div className="displaytextbox">{patientInfoData.address_1}</div>
            <div className="fieldnames">Client Date of Birth:</div>
            <div className="displaytextbox">{patientInfoData.date_of_birth}</div>
            <div className="fieldnames">Client Sex:</div>
            <div className="displaytextbox">{patientInfoData.sex}</div>
            <div className="fieldnames">Emergency Contact:{patientInfoData.emergency_contact}</div>
            <Link to="/dashboard/info/edit">
            <Button 
                type = {'primary'} 
                title = {'Edit'} 
                /> 
            </Link>
        </div>
    );
};

export default UserInfo