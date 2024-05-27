import persons from '../dummy/persons.json'
import './Persons2.css'

function Persons2() {
  return (
    <div>
      <h3>Person2</h3>
      {persons.map((person) => {
        return (
          <div className='person'>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>Address: {person.address}</div>
            <div>Email: {person.email}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Persons2
