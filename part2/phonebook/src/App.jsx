import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')

  const handleNewSearchText = (event) => {
    setSearchText(event.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(searchText.toLowerCase())
  )

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const nameAlreadyExists = persons.find(person => {
      if (person.name === newName) {
        return true
      }
      return false
    })

    if (nameAlreadyExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersonObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPersonObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} onChange={handleNewSearchText} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={addPerson}
        onNewNameChange={handleNewName}
        onNewNumberChange={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App