import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import { useState } from 'react'

function AddProperty() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [guestRooms, setGuestRooms] = useState('')
  const [bedRooms, setBedRooms] = useState('')
  const [bathRooms, setBathRooms] = useState('')

  const navigate = useNavigate()

  const onSave = () => {
    // add validation
    navigate('/properties')
  }

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Add Property</h2>
      <div className='form'>
        <div className='mb-3'>
          <button onClick={onSave} className='btn btn-success me-2'>
            Save
          </button>
          <Link to='/properties' className='btn btn-danger'>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddProperty
