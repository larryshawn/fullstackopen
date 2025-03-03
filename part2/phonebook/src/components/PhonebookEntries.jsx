const PhonebookEntries = ({ array }) => {
  return (
    array.map(person => 
      <div key={person.id}>{person.name} {person.number}</div>
      )
  )
}

export default PhonebookEntries