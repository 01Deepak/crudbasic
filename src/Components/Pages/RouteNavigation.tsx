import React from 'react'
import { Link } from 'react-router-dom'

const RouteNavigation = () => {

  return (
    <>
       <nav>
         <ul>
            <li>
              <Link to={`dummy1`}>dummy1</Link>
            </li>
            <li>
              <Link to={`dummy2`}>dummy2</Link>
            </li>
          </ul>
        </nav>
       
    </>
  )
}

export default RouteNavigation