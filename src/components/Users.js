import React, {useEffect, useState} from 'react'
import {readUsers,updateUser} from '../services/authServices'

const UsersAll = () => {

    const [usersAll, setUsersAll] = useState([])

    useEffect(() => {
        readUsers()
            .then((res) => {
                console.log(res)
                setUsersAll(res)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const handleClick = (event) => {
        console.log(event.target.value)
        const userChange = usersAll.find((user) => user["email"] === event.target.value)
        updateUser({"role": 'admin', "email": event.target.value},'')
        .then((res) => {
            console.log(res)
            userChange["role"] = 'admin'
            console.log(userChange)

            setUsersAll(usersAll.map((user) => user._id === userChange._id ? userChange : user))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="main_sec">
            <h1>UsersAll</h1>
            {usersAll.map((userInfo) => {
                return(<div key={`user_${userInfo._id}`}><p>UserId: {userInfo._id}</p><p>Email: {userInfo.email}</p><p>role: {userInfo.role}</p><button value={userInfo.email} onClick={(event) => handleClick(event)}>Make Admin</button></div>)
            })}
        </div>
    )
}

export default UsersAll