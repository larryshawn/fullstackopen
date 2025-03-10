import axios from "axios";
const baseURL = "http://localhost:3001/persons"

const getAll = () => { 
  const request = axios.get(baseURL) 
  return request.then(request => request.data)
}

const create =(payload) => { 
  const request = axios.post(baseURL, payload)
  return request.then(request => request.data)
}

export default {getAll, create}