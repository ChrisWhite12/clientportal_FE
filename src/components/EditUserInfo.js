import React, {Component} from 'react';  
import { Button, Select, Input} from './FormComponents';
import axios from 'axios';
import { getPatient, updatePatient } from '../services/apiServices';


const EditUserInfo = () => {           //TODO format into functional comp
    const [patientInfoData, setPatientInfoData] = useState([])

    const {dispatch,store} = useGlobalState()
    const sexOptions = ['Male', 'Female', 'Intersex', 'Female to Male', 'Male to Female']


    useEffect(() => {
        const {patientInfo} = store
        console.log(patientInfo)
        setPatientInfoData(patientInfo)
    }, [])
    
    //generic variation of the below code - used in place of each individual handleEvent
    
    const handleInput = (e) => {
         let value = e.target.value;
         let name = e.target.name;

        this.setState( prevState => ({ patient :    //* setPatientInfoData
          {...prevState.patient, [name]: value
          }
        }), () => console.log(this.state.patient))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("updating patient info")

        let userData = this.state.patient;
        
        updatePatient(userData)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleCancelForm = (e) => {
    
        e.preventDefault();//prevents page from being refreshed on form submission
        this.setState({     //TODO set to default values or redirect to userInfo page
          patient: {
            first_name: '',
            last_name: '',
            address_1: '',
            date_of_birth: '',
            sex: '',
            emergency_contact: '',
          },
        })
    }


    return (
        <form className="container-fluid" onSubmit={handleFormSubmit}>
         
          <Input inputType={'text'}
                    title= {'First Name:'} 
                    name= {'first_name'}
                    // value={this.state.patient.first_name} 
                    placeholder = {'Enter the Client\'s name'}
                    handleChange = {handleInput}
                    /> 

          <Input inputType={'text'}
                    title= {'Last Name:'} 
                    name= {'last_name'}
                    // value={this.state.patient.last_name} 
                    placeholder = {'Enter the Client\'s Last name(s)'}
                    handleChange = {handleInput}
                    /> 

          <Input inputType={'text'}
                    title= {'Address:'} 
                    name= {'address_1'}
                    // value={this.state.patient.address_1} 
                    placeholder = {'Enter Clients\' residential address'}
                    handleChange = {handleInput}
                    /> 
        
          <Input inputType={'date'} 
                    name={'date_of_birth'}
                    title= {'Date of Birth:'} 
                    // value={this.state.patient.date_of_birth} 
                    placeholder = {'Enter the Client\'s Date of Birth'}
                    handleChange = {handleInput}
                    /> 

          <Select title={'Sex:'}
                    name={'sex'}
                    options = {sexOptions} 
                    // value = {this.state.patient.sex}
                    placeholder = {'Select Sex'}
                    handleChange = {handleInput}
                    />

          <Input inputType={'text'}
                    title= {'Emergency Contact:'} 
                    name= {'emergency_contact'}
                    // value={this.state.patient.emergency_contact} 
                    placeholder = {'Enter the name and Phone number of the Client\'s Emergency Contact'}
                    handleChange = {handleInput}
                    />

          <Button 
                    action = {handleFormSubmit}
                    type = {'primary'} 
                    title = {'Submit'} 
                    /> 
          
          <Button 
                    action = {handleCancelForm}
                    type = {'secondary'}
                    title = {'Cancel'}
                    /> 
        </form>
      );
}

export default EditUserInfo;