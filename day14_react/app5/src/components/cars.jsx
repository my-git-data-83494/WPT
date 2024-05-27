import cars from '../dummy/cars.json'
import Car from './car'

function Cars() {
  return (
    <div>
      <h3>Cars</h3>
      {cars.map((car) => {
        return <Car car={car} />
      })}
    </div>
  )
}

export default Cars
