function Mobile() {
  // object
  const mobile = {
    model: 'iPhone 15 Pro',
    company: 'Apple',
    price: 206000,
  }

  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: 'beige',
        border: '1px',
        borderStyle: 'solid',
        padding: 10,
        margin: 10,
      }}
    >
      <h2>Mobile</h2>
      <div>Model: {mobile['model']}</div>
      <div>Company: {mobile.company}</div>
      <div>Price: {mobile.price}</div>
    </div>
  )
}

export default Mobile
