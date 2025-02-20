import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-55-5555' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const nameExists = () => 
    persons.some(person => person.name === newName)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newPersonObject = { name: newName, number: newNumber }

    nameExists() 
      ? alert(`${newName} is already added to phonebook`) 
      : setPersons(persons.concat(newPersonObject))
    
    setNewName('')
    setNewNumber('')
    document.querySelector('input[name="name"]').focus();
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name="name" onChange={handleNameChange} value={newName} autoFocus />
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
          {persons.map(person => 
            <div key={person.name}>{person.name} {person.number}</div>
            )}
        </div>
    </div>
  )
}

export default App