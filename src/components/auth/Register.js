import React, {useRef, useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { validate } from 'validate.js'
import {useGlobalState} from "../../config/store"
import {registerUser} from "../../services/authServices"

const Register = ({history}) => {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
        password_confirm: ''
    })
    const [message,setMessage] = useState('')
    const [modalOn, setModalOn] = useState(false)
    const {dispatch} = useGlobalState()
    const tcState = useRef()

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        const valCred = validate({email: userDetails.email, password: userDetails.password},{
            email: {
                presence: true,
                email: true
            },
            password: {
                presence: true,
                length: {
                    minimum: 6,
                    message: 'must be more than 6 characters'
                }
            }
        })

        console.log('valCred',valCred);
        if(!valCred){
            if(userDetails["password"] === userDetails["password_confirm"]){
                if(tcState.current.checked){
                    registerUser(userDetails)
                        .then(() => {
                            dispatch({
                                type: "setLoggedInUser",
                                data: userDetails.email
                            })
                            history.push('/sign_in')
                        })
                        .catch((err) => {
                            setMessage(err.message)
                        })
                }
                else{
                    setMessage('Agree to the T&C')
                }
            }
            else{
                setMessage('Passwords do not match')
            }
        }
        else{
            setMessage((valCred.username && valCred.username[0]), ' ', (valCred.password && valCred.password[0]))
        }
    }

    const handleViewTC = () => {
        setModalOn(true)
    }

    const handleCloseTC = () => {
        setModalOn(false)
    }
    
    return (
        <div className="main_sec">
            <h1 className="mainheader">Welcome to the Brain Train Client Portal</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" type="text" placeholder="email" onChange={handleChange}></input>
                <input className="login_fields" name="password" type="password" placeholder="password" onChange={handleChange}></input>
                <input className="login_fields" name="password_confirm" type="password" placeholder="confirm password" onChange={handleChange}></input>
                {!userDetails["password"] 
                    ? <p></p> 
                    : (userDetails["password"] === userDetails["password_confirm"])
                        ?<p style={{color: "green"}}>passwords match</p>
                        : <p style={{color: "red"}}>passwords don't match</p>}
                <p className='msgText'>{message}</p>
                <div className="tcCont">
                    <input type="checkbox" ref={tcState}></input>
                    <p className="label">Agree to terms and conditions. </p><p className='tcLink' onClick={handleViewTC}>View</p>
                </div>
                <input className="sign_up_btn" type="submit" value="Sign Up"></input>
            </form>

            <Modal show={modalOn} onHide={handleCloseTC}>
                <Modal.Header closeButton>
                <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde architecto ea inventore minima quaerat ut maiores,
                     veniam sapiente repellat similique voluptate tempore quidem temporibus rem laboriosam eaque delectus totam et.</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTC}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Register