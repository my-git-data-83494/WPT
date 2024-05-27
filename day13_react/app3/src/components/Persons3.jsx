import persons3 from '../dummy/persons.json'

function Persons3() {
  return (
    <div>
      <h3>Persons3</h3>
      <ul>
        {persons3.map((person) => {
          return (
            <li>
              <div>Name: {person.name}</div>
              <div>Age: {person.age}</div>
              <div>Address: {person.address}</div>
              <div>Email: {person.email}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Persons3
