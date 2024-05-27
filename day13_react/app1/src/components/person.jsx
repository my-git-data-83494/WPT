function Person() {
  // variables
  const personName = 'steve jobs'
  const personAddress = 'USA'
  const personAge = 58
  const personCanVote = true

  return (
    <div>
      <h2>Person</h2>
      <div>Name: {personName}</div>
      <div>Address: {personAddress}</div>
      <div>Age: {personAge}</div>
      <div>Person Can Vote: {personCanVote ? 'Yes' : 'No'}</div>
    </div>
  )
}

export default Person
