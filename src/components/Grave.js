import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'

export default CreateReactClass({
  render() {
    const { me } = this.props
    const classes = classNames('grave', { me })
    return (
      <div className={classes}>
      	
      </div>
    )
  }
})