import React, {Component} from 'react'
import {useGlobalState} from '../config/store'

    
const Dashboard = () => {

    const {store} = useGlobalState()
    const {loggedInUser} = store

    return (
        <div>
            <h1>Dashboard</h1>
            <p> Hello {loggedInUser}</p>
        </div>
    )
}

export default Dashboard