import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import propertiesData from '../dummy/properties.json'
import { useState } from 'react'

function Properties() {
  const [properties, setProperties] = useState(propertiesData)
  const navigate = useNavigate()

  const onDelete = (index) => {
    // delete a property
    properties.splice(index, 1)
    setProperties([...properties])
  }

  const onDetails = (index) => {
    navigate('/property-details')
  }

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Properties</h2>
      <Link to='/add-property' className='btn btn-primary'>
        Add Property
      </Link>
      {properties.length == 0 && (
        <h3 className='mt-5' style={{ textAlign: 'center' }}>
          There are not properties at the moment. Please use Add Property button
          to add one.
        </h3>
      )}

      
    </div>
  )
}

export default Properties
