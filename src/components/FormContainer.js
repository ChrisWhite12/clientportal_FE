import React, {Component} from 'react';  
import { Button, Select, Input} from './FormComponents';

class FormContainer extends Component {  
    constructor(props) {
      super(props);
  
      this.state = {
        patient: {
          name: '',
          address_1: '',
          email: '',
          paitent_phone_numbers: '',
          date_of_birth: '',
          gender: '',
          emergency_contact: '',
        },
  
        genderOptions: ['Male', 'Female', 'Others'],  
      }
      this.handleDate_of_Birth = this.handleDate_of_Birth.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
  
    /* This lifecycle hook gets executed when the component mounts */
    
    handleName(e) {
     let value = e.target.value;
     this.setState( prevState => ({ patient : 
          {...prevState.patient, name: value
          }
        }), () => console.log(this.state.patient))
    }
  
    handleDate_of_Birth(e) {
         let value = e.target.value;
     this.setState( prevState => ({ patient : 
          {...prevState.patient, date_of_birth: value
          }
        }), () => console.log(this.state.newUser))
    }
  
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
      let userData = this.state.patient;
  
      fetch('http://example.com',{
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(response => {
          response.json().then(data =>{
            console.log("Successful" + data);
          })
      })
    }   
  
    handleClearForm(e) {
    
        e.preventDefault();
        this.setState({ 
          newUser: {
            name: '',
            age: '',
            gender: '',
            skills: [],
            about: ''
          },
        })
    }
  
    render() {
      return (
      
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
         
              <Input inputType={'text'}
                     title= {'Full Name'} 
                     name= {'name'}
                     value={this.state.patient.name} 
                     placeholder = {'Enter the Client\'s name'}
                     handleChange = {this.handleInput}
                     
                     /> {/* Name of the user */}
          
            <Input inputType={'date'} 
                  name={'date_of_birth'}
                   title= {'Date of Birth'} 
                   value={this.state.patient.date_of_birth} 
                  placeholder = {'Enter the Client\'s Date of Birth'}
                   handleChange={this.handleDate_of_Birth} /> {/* Age */} 
  
  
            <Select title={'Gender'}
                    name={'gender'}
                    options = {this.state.genderOptions} 
                    value = {this.state.patient.gender}
                    placeholder = {'Select Gender'}
                    handleChange = {this.handleInput}
                    />
            
            <Button 
                action = {this.handleFormSubmit}
                type = {'primary'} 
                title = {'Submit'} 
            /> { /*Submit */ }
            
            <Button 
              action = {this.handleClearForm}
              type = {'secondary'}
              title = {'Clear'}
            /> {/* Clear the form */}
            
          </form>
    
      );
    }
  
}  

export default FormContainer;
