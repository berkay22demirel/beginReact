import React from 'react'
import PropTypes from 'prop-types'

export default function FunctionalComponent(props) {
  return (
    <div>
      {props.navbar}
    </div>
  )
}

FunctionalComponent.propTypes = {
  navbar : PropTypes.string.isRequired
}
FunctionalComponent.defaultProps = {
  navbar : "Default Navbar"
}


