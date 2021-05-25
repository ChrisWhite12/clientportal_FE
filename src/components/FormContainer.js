import React, {Component} from 'react';  
import { Button, Select, Input} from './FormComponents';
import axios from 'axios';
import { getPatient, updatePatient } from '../services/apiServices';

class FormContainer extends Component {           //TODO format into functional comp
  constructor(props){
    super(props)
      this.state = {
        patient: {
          first_name: '',
          last_name: '',
          address_1: '',
          date_of_birth: '',
          sex: '',
          emergency_contact: '',
        },
  
        sexOptions: ['Male', 'Female', 'Intersex', 'Female to Male', 'Male to Female'],  

      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleCancelForm = this.handleCancelForm.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
    
    //generic variation of the below code - used in place of each individual handleEvent
    
    handleInput(e) {
         let value = e.target.value;
         let name = e.target.name;
     this.setState( prevState => ({ patient : 
          {...prevState.patient, [name]: value
          }
        }), () => console.log(this.state.patient))
    }

    handleFormSubmit(e) {
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

    handleCancelForm(e) {
    
        e.preventDefault();//prevents page from being refreshed on form submission
        this.setState({ 
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

    render() {
      return (
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
         
          <Input inputType={'text'}
                    title= {'First Name:'} 
                    name= {'first_name'}
                    value={this.state.patient.first_name} 
                    placeholder = {'Enter the Client\'s name'}
                    handleChange = {this.handleInput}
                    /> 

          <Input inputType={'text'}
                    title= {'Last Name:'} 
                    name= {'last_name'}
                    value={this.state.patient.last_name} 
                    placeholder = {'Enter the Client\'s Last name(s)'}
                    handleChange = {this.handleInput}
                    /> 

          <Input inputType={'text'}
                    title= {'Address:'} 
                    name= {'address_1'}
                    value={this.state.patient.address_1} 
                    placeholder = {'Enter Clients\' residential address'}
                    handleChange = {this.handleInput}
                    /> 
        
          <Input inputType={'date'} 
                    name={'date_of_birth'}
                    title= {'Date of Birth:'} 
                    value={this.state.patient.date_of_birth} 
                    placeholder = {'Enter the Client\'s Date of Birth'}
                    handleChange = {this.handleInput}
                    /> 

          <Select title={'Sex:'}
                    name={'sex'}
                    options = {this.state.sexOptions} 
                    value = {this.state.patient.sex}
                    placeholder = {'Select Sex'}
                    handleChange = {this.handleInput}
                    />

          <Input inputType={'text'}
                    title= {'Emergency Contact:'} 
                    name= {'emergency_contact'}
                    value={this.state.patient.emergency_contact} 
                    placeholder = {'Enter the name and Phone number of the Client\'s Emergency Contact'}
                    handleChange = {this.handleInput}
                    />

          <Button 
                    action = {this.handleFormSubmit}
                    type = {'primary'} 
                    title = {'Submit'} 
                    /> 
          
          <Button 
                    action = {this.handleCancelForm}
                    type = {'secondary'}
                    title = {'Cancel'}
                    /> 
        </form>
      );
    }
}

export default FormContainer;