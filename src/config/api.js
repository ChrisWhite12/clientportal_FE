import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:3009',
    baseURL: (process.env.NODE_ENV === 'development') ? "http://localhost:3009" :"https://evening-falls-81226.herokuapp.com/",
    timeout: 5000,
    withCredentials: true
})