import React, { useState } from 'react';
import '../App.css';
import { getPatient } from '../services/apiServices';
import FormContainer from './FormContainer';
  
const ClientInfo = (props) => {
  // const [userData, setUserData] = useState(props.user)
  
  useEffect(() => {
    getPatient()
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
  },[])

  return (
    <div className="formwrapper">
      <div>
        <h1>Client Information</h1>
      </div>
      <div><FormContainer />
      </div>
    </div>
  )
}

export default ClientInfo