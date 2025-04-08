import axios from "axios";
const baseURL = "http://localhost:3001/persons"

const getAll = () => { 
  const request = axios.get(baseURL) 
  return request.then(response => response.data)
}

const createPerson =(payload) => { 
  const request = axios.post(baseURL, payload)
  return request.then(response => response.data)
}

const deleteByID = (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(response => response.data)
}

const replacePerson = (payload) => {
  const request = axios.put(`${baseURL}/${payload.id}`, payload)
  return request.then(response => response.data)
}

export default {getAll, createPerson, deleteByID, replacePerson}