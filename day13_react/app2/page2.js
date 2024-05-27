// functional programming language
// - functions are considered to be first class citizens
//   - a variable can be created of type functions
// const myFunction = () => {}

// - a function can be passed as an argument to another function
// router.get('/', (request, response) => {})

// - a function can be returned as a return value of another function
// closure
// function myFunction() {
//   function myInnerFunction() {}
//   return myInnerFunction
// }

function function1() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // traditional for loop
  for (let index = 0; index < numbers.length; index++) {
    console.log(`value = ${numbers[index]}`)
  }
}

// function1()

function function2() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // for..in loop
  for (const index in numbers) {
    console.log(`value = ${numbers[index]}`)
  }
}

// function2()

function function3() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // for..of loop
  for (const number of numbers) {
    console.log(`value = ${number}`)
  }
}

// function3()

function function4() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // for..of loop
  numbers.forEach((number) => {
    console.log(`value = ${number}`)
  })
}

// function4()
