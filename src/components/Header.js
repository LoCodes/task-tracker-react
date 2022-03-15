// import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header> 
       <h1 style={headingStyle} >{title}</h1>
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
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header