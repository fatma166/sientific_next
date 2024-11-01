import axios from "axios";

import { BASE_URL } from "../constants";


const baseURL = BASE_URL;

// const token = window.localStorage.getItem("token") || "";
// axios.defaults.timeout = 180000;

const clientApi = axios.create({
  baseURL: baseURL,
  headers: {
    // Authorization: "Bearer " + token,
    "Content-Type": "application/json; charset=utf-8",
    // "Access-Control-Allow-Origin": "*",
  },
  // proxy: {
  //   host: "95.216.32.38",
  // },
});

clientApi.interceptors.request.use(async function (config) {
  // Do something before request is sent
  // const headerToken = config.headers['Authorization']
  // if (!headerToken) {
  //   const token = await fetch('/api/session').then(res => res.json()).then(res => res.token)
  //   if (token) {
  //     config.headers['Authorization'] = `Bearer ${token}`;
  //   }
  // }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
clientApi.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  const code = parseInt(error.response && error.response.status)
  if (code === 401 || code === 403) {
    // if (typeof window !== 'undefined') {
    //   await logoutUser()
    // }
    clientApi.defaults.headers.common['Authorization'] = ``;
    clientApi.defaults.headers.delete['Authorization'] = ``;



    // await fetch('/api/logout')
    if (typeof window !== 'undefined') {
      // window.location.href = '/'
      await axios.post('/api/auth/session', { token: '' })
    }
    // throw new Error(error)

  }





  return Promise.reject(error);
});

export default clientApi;

