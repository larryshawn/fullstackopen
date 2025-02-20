import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const nameExists = () => 
    persons.some(person => person.name === newName)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newPersonObject = { name: newName }
    
    nameExists() 
      ? alert(`${newName} is already added to phonebook`) 
      : setPersons(persons.concat(newPersonObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} autoFocus />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map(person => 
            <div key={person.name}>{person.name}</div>
            )}
        </div>
    </div>
  )
}

export default App