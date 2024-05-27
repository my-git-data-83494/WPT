import logo from './logo.svg'
import './App.css'

function App() {
  const onButtonClick = () => {
    alert('button clicked')
  }

  return (
    <div className='container'>
      <button onClick={onButtonClick} className='btn btn-success'>
        Test
      </button>

      <button
        onClick={(e) => {
          // e here is an event object
          console.log(e)
        }}
        className='btn btn-danger'
      >
        Test2
      </button>
    </div>
  )
}

export default App
