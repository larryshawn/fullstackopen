import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import PhonebookEntries from './components/PhonebookEntries'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

useEffect(() => {
  axios.get('http://localhost:3001/persons')
  .then((response) => { 
    setPersons(response.data)
  })
}, [])


  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const searchTermExists = (updatedSearchTerm) => (
    persons.some(person => person.name.toLowerCase() === updatedSearchTerm.toLowerCase())
  )
  
  const handleSearchTermChange = (event) => {
    const updatedSearchTerm = event.target.value
    setSearchTerm(updatedSearchTerm)
    
    const newArray = persons.filter(person => person.name.toLowerCase() === updatedSearchTerm.toLowerCase())
    
    if (searchTermExists(updatedSearchTerm)) setFilteredPersons(newArray)
      else setFilteredPersons([])
  }

  const nameExists = () => persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newPersonObject = { name: newName, number: newNumber }

    axios.post('http://localhost:3001/persons', newPersonObject)
      .then(response => response.data)
      .then(response => {
        nameExists()
        ? alert(`${newName} is already added to phonebook`)
        : setPersons([ ...persons, response ])
      })
      .catch(error => alert(error.message))
      .finally(() => {
        setNewName('')
        setNewNumber('')
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter onSearchTermChange={handleSearchTermChange} searchTermValue={searchTerm} />
      
      <h2>Add a new</h2>
      <Form onSubmit={handleSubmit} onNameChange={handleNameChange} nameValue={newName} onNumberChange={handleNumberChange} numberValue={newNumber} />
      
      <h2>Numbers</h2>

        <div>
          {
            filteredPersons.length > 0
            ?
            <PhonebookEntries array={filteredPersons} />
            :
            <PhonebookEntries array={persons} />
          }
        </div>
    </div>
  )
}

export default App