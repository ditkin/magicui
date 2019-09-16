import React, { Fragment, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal/lib/components/Modal'

export default ModalContents => WrappedComponent => {
  const withModal = props => {
    const [contentsArgs, setContentsArgs] = useState({})
    const [open, setOpen] = useState(false)
    const handleOpen = useCallback(args => {
      setOpen(true)
      setContentsArgs(args)
    })
    const handleClose = useCallback(() => setOpen(false))
    const handleEsc = useCallback(({ keyCode }) => {
      if (keyCode === 27) {
        setOpen(false)
      }
    }, [])

    useEffect(() => {
      document.addEventListener('keydown', handleEsc, false)
      return () => document.removeEventListener('keydown', handleEsc, false)
    }, [])

    return (
      <Fragment>
        <Modal isOpen={open} onRequestClose={handleClose}>
          <ModalContents {...contentsArgs} />
        </Modal>
        <WrappedComponent {...props} openModal={handleOpen} />
      </Fragment>
    )
  }

  withModal.propTypes = { onEsc: PropTypes.func, onAfterOpen: PropTypes.func }

  return withModal
}

// 'use es6'

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Modal from 'react-modal'

// function doModal(Component, additionalProps, parentComponent) {
//   const element = document.createElement('div')

//   const promiseCallback = (resolve, reject) => {
//     const WrappedComponent = (
//       <Modal isOpen={true}>
//         <Component {...additionalProps} onConfirm={resolve} onReject={reject} />
//       </Modal>
//     )

//     if (parentComponent) {
//       ReactDOM.unstable_renderSubtreeIntoContainer(
//         parentComponent,
//         WrappedComponent,
//         element
//       )
//     } else {
//       ReactDOM.render(WrappedComponent, element)
//     }
//   }

//   return new Promise(promiseCallback).finally(() => {
//     ReactDOM.unmountComponentAtNode(element)
//   })
// }

// export default function withModal(Component) {
//   return (...args) => doModal(Component, ...args)
// }
