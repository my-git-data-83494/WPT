const person = {
  name: 'person1',
  address: 'pune',
  age: 20,
  email: 'person1@test.com',
}

function function1() {
  console.log(`name = ${person.name}`)
  console.log(`address = ${person.address}`)
  console.log(`age = ${person.age}`)
  console.log(`email = ${person.email}`)
}

// function1()

function function2() {
  // object destructure
  // - create a property from an object as a variable
  // - the sequence of properties does not matter
  const { age, email, address, phone } = person

  //   console.log(`name: ${name}`)
  console.log(`address: ${address}`)
  console.log(`age: ${age}`)
  console.log(`email: ${email}`)
  console.log(`phone: ${phone}`)
}

// function2()

function function3() {
  const array = [10, 20, 30]
  console.log(`value1 = ${array[0]}`)
  console.log(`value2 = ${array[1]}`)
  console.log(`value3 = ${array[2]}`)
}

// function3()

function function3() {
  // array destructure
  // - the sequence of variables matters
  const [v1, v2, v3] = [10, 20, 30]
  console.log(`value1 = ${v1}`)
  console.log(`value2 = ${v2}`)
  console.log(`value3 = ${v3}`)
}

// function3()

function add(p1, p2) {
  console.log(`${p1} + ${p2} = ${p1 + p2}`)
}

// add(10, 20)

// function reference
const myAdd = add
console.log(`myAdd = ${myAdd}, type = ${typeof myAdd}`)

// myAdd(10, 20)
