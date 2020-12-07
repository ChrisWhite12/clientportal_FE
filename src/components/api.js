import React, {Component, useState} from 'react'
import {useGlobalState} from "../config/store"

const Test = () => {

    // fetch("https://api.au2.cliniko.com/v1/appointment_types", {
    //     headers: {
    //     Accept: "application/json",
    //     Authorization: "Basic API_Key",
    //     "User-Agent": "Caity McC (ferguselchancho@gmail.com)"
    //     }
    //     }
    //     )
    // .then(response => response.json())
    // .then(data => console.log(data))
    // }

    fetch("https://cors-anywhere.herokuapp.com/https://api.au2.cliniko.com/v1/appointment_types", {
    headers: {
    Accept: "application/json",
    Authorization: "Basic TVMwMU1URTNNRFE1TXpBek1ESTFOalE1TXpBdGNUWnVlSFp0YWxKMk56Um9NVmRLYmtkS1VrOWtUSFZ0ZDNZMmQzVXpiRmMtYXUyOg==",
    "User-Agent": "Caity McC (ferguselchancho@gmail.com)"
    }
    }
    )
    .then(response => response.json())
    .then(data => console.log(data))

    return(
      <div>
        <p>API test</p>
      </div>
    )
    }
export default Test;

//if you want a response in the console copy and paste the code below...you need a proxy url because chrome
//doesn't trust the api

// fetch("https://cors-anywhere.herokuapp.com/https://api.au2.cliniko.com/v1/appointment_types", {
// headers: {
// Accept: "application/json",
// Authorization: "Basic TVMwMU1URTNNRFE1TXpBek1ESTFOalE1TXpBdGNUWnVlSFp0YWxKMk56Um9NVmRLYmtkS1VrOWtUSFZ0ZDNZMmQzVXpiRmMtYXUyOg==",
// "User-Agent": "Caity McC (ferguselchancho@gmail.com)"
// }
// }
// )
// .then(response => response.json())
// .then(data => console.log(data))