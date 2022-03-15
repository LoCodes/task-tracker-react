// import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div> 
       <h1>{title}</h1>
    </div>
  )
}

// default props if there is no prop passed in the Header component in app.js 
Header.defaultProps = {
    title: 'Task Tracker'
}

// great for catching errors, making code more robust
Header.PropTypes = { 
    title: PropTypes.string.isRequired
}

export default Header