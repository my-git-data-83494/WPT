import persons from '../dummy/persons.json'
import Person from './person'

function Persons() {
  return (
    <div>
      <h2>Persons</h2>
      {persons.map((person) => {
        return (
          <Person
            personName={person.personName}
            address={person.address}
            email={person.email}
            age={person.personAge}
          />
        )
      })}
    </div>
  )
}

export default Persons
