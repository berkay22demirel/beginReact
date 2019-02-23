import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class FirstComponent extends Component {
  render() {
    return (
      <div>
          {this.props.typetext}
      </div>
    )
  }
}
FirstComponent.propTypes = {
  typetext : PropTypes.string.isRequired
}
FirstComponent.defaultProps = {
  typetext : "Default Text"
}

