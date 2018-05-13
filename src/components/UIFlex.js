import React from 'react'
import PropTypes from 'prop-types'

const reverseChildren = children => React.Children.toArray(children).reverse()

export default ({ direction, align, width, marginTop, swap, children }) => {
  const maybeReversedChildren = swap ? reverseChildren(children) : children

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction || 'row',
        alignItems: align || 'center',
        width,
        marginTop,
      }}
    >
      {maybeReversedChildren}
    </div>
  )
}
