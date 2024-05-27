import persons from '../dummy/persons.json'

function Persons1() {
  return (
    <div>
      <h3>Persons1</h3>
      {persons.map((person) => {
        return (
          <div>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>Address: {person.address}</div>
            <div>Email: {person.email}</div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Persons1
