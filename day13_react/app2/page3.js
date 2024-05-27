// map
// - used to process every value in a collection

function function1() {
  const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10]

  // get square of each of the numbers
  const squares = []
  for (const value of numbers) {
    squares.push(value ** 2)
  }
  console.log(squares)
}

// function1()

function function2() {
  const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10]

  const squares = numbers.map((number) => {
    return number ** 2
  })
  console.log(`squares: ${squares}`)
}

// function2()

function function3() {
  const temperatures_c = [32, 35, 34, 38, 30]
  // const temperatures_f = []
  // for (const temperature of temperatures_c) {
  //   temperatures_f.push(32 + temperature * (9 / 5))
  // }

  const temperatures_f = temperatures_c.map((temperature) => {
    return 32 + temperature * (9 / 5)
  })
  console.log(temperatures_f)
}

// function3()

function function4() {
  // array of objects
  const persons = [
    { name: 'person1', age: 10, address: 'pune' },
    { name: 'person2', age: 21, address: 'mumbai' },
    { name: 'person3', age: 12, address: 'satara' },
    { name: 'person4', age: 23, address: 'karad' },
    { name: 'person5', age: 14, address: 'nashik' },
  ]

  // const names = []
  // for (const person of persons) {
  //   names.push(person.name)
  // }

  const names = persons.map((person) => {
    return person.name
  })
  console.log(names)

  // get every person's name and address
  const persons2 = persons.map((person) => {
    return { name: person.name, address: person['address'] }
  })
  console.log(persons2)

  // get every persons's voting eligibility
  const persons3 = persons.map((person) => {
    return { name: person.name, age: person.age, canVote: person.age >= 18 }
  })
  console.log(persons3)
}

function4()
