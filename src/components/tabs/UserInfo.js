import React, { useEffect, useState } from 'react'
import { Button, FormInput, Select } from '../FormComponents';
import { useGlobalState } from '../../config/store'

import { updatePatient } from '../../services/apiServices';
import '../../App.css';

const UserInfo = (props) => {
    const [editState, setEditState] = useState(false)
    const [patientInfoData, setPatientInfoData] = useState({})

    const {dispatch, store} = useGlobalState()
    const {patientInfo} = store

    const sexOptions = ['Male', 'Female', 'Intersex', 'Female to Male', 'Male to Female']

    useEffect(() => {
        setPatientInfoData(patientInfo.patient)
    }, [patientInfo.patient])

    const handleEdit = () => {
        if(editState){                          //when saving
            updatePatient(patientInfoData)
            .then((data) => {

                dispatch({
                    type: 'setPatientInfo',
                    data: { ...patientInfo, patient: patientInfoData}
                })
            })
            .catch((err) => {
                console.log(err)
            })


        }
        setEditState(!editState)
    }

    const handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setPatientInfoData(prevState => {
            return {
                ...prevState, 
                [name]: value
            }
        })
   }

    return (
        <div className="displayinfowrapper">        
            <h1>Client Information</h1>
            <div className='formRow'>
                <FormInput 
                    inputType={'text'}
                    title={'First Name:'} 
                    name={'first_name'}
                    value={patientInfoData.first_name}
                    handleChange={handleInput}
                    editState={editState}
                />
                <FormInput 
                    inputType={'text'}
                    title={'Last Name:'} 
                    name={'last_name'}
                    value={patientInfoData.last_name}
                    handleChange = {handleInput}
                    editState={editState}
                />
            </div>

            <div className='formRow'>
                <FormInput 
                    inputType={'text'}
                    title={'Address:'} 
                    name={'address_1'}
                    value={patientInfoData.address_1}
                    handleChange = {handleInput}
                    editState={editState}
                />
                <FormInput 
                    inputType={'text'}
                    title={'City/Suburb:'} 
                    name={'city'}
                    value={patientInfoData.city}
                    handleChange = {handleInput}
                    editState={editState}
                />
            </div>

            <div className='formRow'>
                <FormInput 
                    inputType={'text'}
                    title={'State:'} 
                    name={'state'}
                    value={patientInfoData.state}
                    handleChange = {handleInput}
                    editState={editState}
                />
                <FormInput 
                    inputType={'text'}
                    title={'Country:'} 
                    name={'country'}
                    value={patientInfoData.country}
                    handleChange = {handleInput}
                    editState={editState}
                />
                <FormInput 
                    inputType={'text'}
                    title={'Postcode:'} 
                    name={'post_code'}
                    value={patientInfoData.post_code}
                    handleChange = {handleInput}
                    editState={editState}
                />
            </div>
            
            <div className='formRow'>
                <FormInput 
                    inputType={'date'}
                    title={'DOB:'} 
                    name={'date_of_birth'}
                    value={patientInfoData.date_of_birth}
                    handleChange = {handleInput}
                    editState={editState}
                />
                <Select 
                    title={'Sex:'}
                    name={'sex'}
                    options = {sexOptions} 
                    value = {patientInfoData.sex}
                    placeholder = {'Select Sex'}
                    handleChange = {handleInput}
                    editState={editState}
                />
            </div>

            <div className='formRow'>
            <FormInput 
                inputType={'text'}
                title={'Contact:'} 
                name={'contact'}
                value={patientInfoData.patient_phone_numbers ? patientInfoData.patient_phone_numbers[0].number : ''}
                handleChange = {handleInput}
                editState={editState}
            />
            <FormInput 
                inputType={'text'}
                title={'Emergency Contact:'} 
                name={'emergency_contact'}
                value={patientInfoData.emergency_contact}
                handleChange = {handleInput}
                editState={editState}
            />

            </div>
            <Button 
                type = {editState ? 'secondary' : 'primary'} 
                title = {editState ? 'Save' : 'Edit'} 
                action={handleEdit}
            />
        </div>
    );
};

export default UserInfo