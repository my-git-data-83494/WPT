import persons from '../dummy/persons.json'

function Persons4() {
  return (
    <div>
      <h3>Persons 4</h3>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => {
            return (
              <tr>
                <td>{person['name']}</td>
                <td>{person['age']}</td>
                <td>{person['address']}</td>
                <td>{person['email']}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Persons4
