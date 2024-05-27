function Car({ car }) {
  return (
    <div>
      <div>Model: {car.model}</div>
      <div>Company: {car.company}</div>
      <div>Price: {car.price}</div>
      <hr />
    </div>
  )
}

export default Car
