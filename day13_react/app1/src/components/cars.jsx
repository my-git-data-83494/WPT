function Cars() {
  const cars = ['triber', 'nano', 'xuv', 'meridian']

  return (
    <div>
      <h2>Cars</h2>
      <div>{cars[0]}</div>
      <div>{cars[1]}</div>
      <div>{cars[2]}</div>
      <hr />
      {cars.map((model) => {
        return <div>{model}</div>
      })}
      <hr />
      <ul>
        {cars.map((model) => {
          return <li>{model}</li>
        })}
      </ul>
    </div>
  )
}

export default Cars
