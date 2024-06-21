import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <div className='aboutMeButton'>
          About me
          <div className='portfolioButton'>
            Portfolio
            <div className='contactsButton'>
              Contact
              <div className='resumeButton'>
                Resume
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
