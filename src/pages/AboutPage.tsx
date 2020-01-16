import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dicta
        reprehenderit debitis, illum aliquid consectetur atque voluptatum
        corporis voluptatibus quo quidem recusandae sed omnis est ab assumenda
        itaque id molestiae!
      </p>
      <button className='btn' onClick={() => history.push('/')}>
        Back to todo
      </button>
    </>
  )
}
