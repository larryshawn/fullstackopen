import personServices from '../services/persons'

const PhonebookEntries = ({ array, setPersons }) => {
  const handleClick = (person) => { 
    if (!window.confirm(`Delete ${person.name}?`)) {
      console.log(person.name, 'Not deleted')
      return
    }
    personServices.deleteByID(person.id)
    setPersons(array.filter((p) => p.id !== person.id))
  }

  return (
    array.map(person => 
      <div key={person.id}>{person.name} {person.number} <button onClick={() => handleClick(person)}>Delete</button></div>
      )
  )
}

export default PhonebookEntries