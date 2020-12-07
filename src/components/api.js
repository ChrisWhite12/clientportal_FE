import React, {Component, useState} from 'react'
import {useGlobalState} from "../config/store"

const Test = () => {

const url = "https://api.au1.cliniko.com/v1/appointment_types";

fetch(url, {
  method: "GET",
  headers: {
    "Authorization" : "MS01MTE3MDQ5MzAzMDI1NjQ5MzAtcTZueHZtalJ2NzRoMVdKbkdKUk9kTHVtd3Y2d3UzbFc-au2",
    "Accept" : "application/json",
    "User-Agent": "Caity McC (ferguselchancho@gmail.com)"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

  export default Test;


// const Cliniko = require('../').Cliniko
// const opts = require('./config')
// const cliniko = new Cliniko(opts)
// const search = [
//   ['first_name ~~ ?', 'Hagen']
// ]
// cliniko.getPatients({ search })
//   .then((results) => {
//     console.log('Patient search')
//     console.log(JSON.stringify(results, null, 2))
//   })


function dataOut() {


    var options = {
      "headers" : {
        "Authorization" : "MS01MTE3MDQ5MzAzMDI1NjQ5MzAtcTZueHZtalJ2NzRoMVdKbkdKUk9kTHVtd3Y2d3UzbFc-au2",
        "Accept" : "application/json",
        "User-Agent": "Caity McC (ferguselchancho@gmail.com)"
    }
  };
    var response = UrlFetchApp.fetch("https://api.cliniko.com/v1/users", options);
    Logger.log(response.getContentText());
};