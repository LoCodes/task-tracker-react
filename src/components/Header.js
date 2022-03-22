// import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom' // lets us look at the route we're currently on 
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'> 
       <h1>{title}</h1>
       {/* reusable component */}
       {location.pathname === '/' && 
       (<Button 
       color={showAdd ? 'red' : 'green'}
       text={showAdd ? 'Close' : 'Add'} 
       onClick={onAdd}
       />
       )}
       
    </header> 
  ) 
}

// default props if there is no prop passed in the Header component in app.js 
Header.defaultProps = {
    title: 'Task Tracker',
}

// great for catching errors, making code more robust
Header.propTypes = { 
    title: PropTypes.string
}

// CSS in JS 
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header