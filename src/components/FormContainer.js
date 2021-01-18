import React, {Component} from 'react';  
import { Button, Select, Input} from './FormComponents';
import api from '../config/api';

class FormContainer extends Component {  
    constructor(props) {
      super(props);

      // axios.post, newUser)
  //       .then(response => {           
  //           this.setState({}) // get age, name and other data from response and set 
  //                             //  the states here respectively 
  //       })
  //       .catch(error => error);  

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

      this.state = {
        patient: {
          first_name: '',
          last_name: '',
          address_1: '',
          date_of_birth: '',
          gender: '',
          emergency_contact: '',
        },
  
        genderOptions: ['Male', 'Female', 'Others'],  

      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleCancelForm = this.handleCancelForm.bind(this);
      // this.handleDate_of_Birth = this.handleDate_of_Birth.bind(this);
      // this.handleFirstName = this.handleFirstName.bind(this);
      // this.handleLastName = this.handleLastName.bind(this);
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

    // handleFirstName(e) {
    //   let value = e.target.value;
    //   this.setState( prevState => ({ patient : 
    //       {...prevState.patient, first_name: value
    //       }
    //     }), () => console.log(this.state.patient.first_name))
    // }

    // handleLastName(e) {
    //   let value = e.target.value;
    //   this.setState( prevState => ({ patient : 
    //       {...prevState.patient, last_name: value
    //       }
    //     }), () => console.log(this.state.patient.last_name))
    // }
  
    // handleDate_of_Birth(e) {
    //   let value = e.target.value;
    //   this.setState( prevState => ({ patient : 
    //       {...prevState.patient, date_of_birth: value
    //       }
    //     }), () => console.log(this.state.patient.date_of_birth))
    // }

    // handleGender(e) {
    //   let value = e.target.value;
    //   this.setState( prevState => ({ patient : 
    //       {...prevState.patient, gender: value
    //       }
    //     }), () => console.log(this.state.patient.gender))
    // }
    
    handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.patient;
  
      fetch('https://api.au1.cliniko.com/v1/patients/{:id}',{
          method: "PUT",
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
  
    handleCancelForm(e) {
    
        e.preventDefault();//prevents page from being refreshed on form submission
        this.setState({ 
          patient: {
            first_name: '',
            last_name: '',
            address_1: '',
            date_of_birth: '',
            gender: '',
            emergency_contact: '',
          },
        })
    }

    render() {
      return (
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
         
          <Input inputType={'text'}
                    title= {'First Name'} 
                    name= {'first_name'}
                    value={this.state.patient.first_name} 
                    placeholder = {'Enter the Client\'s name'}
                    handleChange = {this.handleInput}
                    /> 

          <Input inputType={'text'}
                    title= {'Last Name'} 
                    name= {'last_name'}
                    value={this.state.patient.last_name} 
                    placeholder = {'Enter the Client\'s Last name(s)'}
                    handleChange = {this.handleInput}
                    /> 

          <Input inputType={'text'}
                    title= {'Address'} 
                    name= {'address_1'}
                    value={this.state.patient.address_1} 
                    placeholder = {'Enter Clients\' residential address'}
                    handleChange = {this.handleInput}
                    /> 
        
          <Input inputType={'date'} 
                    name={'date_of_birth'}
                    title= {'Date of Birth'} 
                    value={this.state.patient.date_of_birth} 
                    placeholder = {'Enter the Client\'s Date of Birth'}
                    handleChange = {this.handleInput}
                    /> 

          <Select title={'Gender'}
                    name={'gender'}
                    options = {this.state.genderOptions} 
                    value = {this.state.patient.gender}
                    placeholder = {'Select Gender'}
                    handleChange = {this.handleInput}
                    />

          <Input inputType={'text'}
                    title= {'Emergency Contact'} 
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