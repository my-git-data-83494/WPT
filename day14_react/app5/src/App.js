import Car from './components/car'
import Cars from './components/cars'
import Person from './components/person'
import Persons from './components/persons'

function App() {
  const person = {
    firstName: 'steve',
    lastName: 'jobs',
    personEmail: 'steve@apple.com',
    personLatestAge: 58,
    presentAddress: 'USA',
  }

  const car = {
    carModel: 'X5',
    carCompany: 'BMW',
    carPrice: 45,
  }

  return (
    <div className='container'>
      {/* <Persons /> */}
      {/* <Cars /> */}
      <Person
        age={person.personLatestAge}
        email={person.personEmail}
        address={person.presentAddress}
        personName={person.firstName + ' ' + person.lastName}
      />
      <Car car={car} />
    </div>
  )
}

export default App
