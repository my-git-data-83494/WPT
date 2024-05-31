import { useState } from 'react'
import Navbar from '../components/navbar'
import usersData from '../dummy/users.json'

function Users() {
  const [users, setUsers] = useState(usersData)
  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Users</h2>
      <table className='table table-striped'>
        <thead>
         
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

export default Users
