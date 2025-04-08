import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Notification from './components/Notification'
import PhonebookEntries from './components/PhonebookEntries'
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState('')

useEffect(() => {
  personServices.getAll()
  .then((response) => { 
    setPersons(response)
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

  const personToReplace = () => persons.find((p) => p.name.toLowerCase() === newName.toLocaleLowerCase())

  // const showAdded = () => {

  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newPersonObject = { name: newName, number: newNumber }
    const changedNumber = { ...personToReplace(), number: newNumber }

    if (nameExists()) {
      if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        return
      
      personServices.replacePerson(changedNumber)
      .then(response => {
        setPersons(persons.map(p => p.id === changedNumber.id ? response : p))
      })
      .catch(error => {
        setNotificationMessage(`Information of ${newName} has already been removed from the server`)
        setNotificationType('error')
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
        setPersons(persons.filter(p => p.id !== changedNumber.id))
      })
      .finally(() => {
        setNewName('')
        setNewNumber('')
      })
    }
    else {
      personServices.createPerson(newPersonObject)
      .then(response => {
        setPersons([ ...persons, response ])
        setNotificationMessage(`added ${newName}`)
        setNotificationType('success')
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      }
      )
      .catch(error => alert(error.message))
      .finally(() => {
        setNewName('')
        setNewNumber('')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={notificationType} message={notificationMessage} />
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
          <PhonebookEntries array={persons} setPersons={setPersons} />
        }
      </div>
    </div>
  )
}

export default App