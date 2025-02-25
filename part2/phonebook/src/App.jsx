import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const searchTermExists = (updatedSearchTerm) => (
    persons.some(person => person.name.toLowerCase() === updatedSearchTerm.toLowerCase())
  )
  
  const handleSearchTermChange = (event) => {
    const updatedSearchTerm = event.target.value
    setSearchTerm(updatedSearchTerm)
    
    const newArray = persons.filter(person => person.name.toLowerCase() === updatedSearchTerm.toLowerCase())
    
    if (searchTermExists(updatedSearchTerm)) setFilteredPersons(newArray)
    if (updatedSearchTerm.trim() === "") {
      setFilteredPersons([])
    }
  }

  const nameExists = () => 
    persons.some(person => person.name === newName)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPersonObject = { name: newName, number: newNumber, id: String(persons.length + 1) }
    nameExists() 
      ? alert(`${newName} is already added to phonebook`) 
      : setPersons(persons.concat(newPersonObject))
    
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input name="filter" onChange={handleSearchTermChange} value={searchTerm} />
      </div>

      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name="name" onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input name="number" onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
        <div>
          {
            filteredPersons.length > 0
            ?
            <div>{filteredPersons[0].name} {filteredPersons[0].number}</div>
            :
          persons.map(person => 
            <div key={person.id}>{person.name} {person.number}</div>
            )
          }
        </div>
    </div>
  )
}

export default App