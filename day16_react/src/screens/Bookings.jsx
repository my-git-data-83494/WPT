import { useState } from 'react'
import Navbar from '../components/navbar'
import bookingsData from '../dummy/bookings.json'

function Bookings() {
  const [bookings, setBookings] = useState(bookingsData)

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Bookings</h2>
      <table className='table table-striped'>
        <thead>
          
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

export default Bookings
