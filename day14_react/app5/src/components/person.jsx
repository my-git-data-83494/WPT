// function Person(props) {
//     return (
//       <div>
//         <div>Name: {props.name}</div>
//         <div>Age: {props.age}</div>
//         <div>Address: {props.address}</div>
//         <div>Email: {props.email}</div>
//         <hr />
//       </div>
//     )
//   }

// function Person(props) {
//   const { name, email, age, address } = props
//   return (
//     <div>
//       <div>Name: {name}</div>
//       <div>Age: {age}</div>
//       <div>Address: {address}</div>
//       <div>Email: {email}</div>
//       <hr />
//     </div>
//   )
// }

function Person({ personName, email, age, address }) {
  return (
    <div>
      <div>Name: {personName}</div>
      <div>Age: {age}</div>
      <div>Address: {address}</div>
      <div>Email: {email}</div>
      <hr />
    </div>
  )
}

export default Person
