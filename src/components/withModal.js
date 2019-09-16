import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export default WrappedComponent => {
  const withModal = props => {
    const [open, setOpen] = useState(false)
    const handleEsc = useCallback(() => {
      if (keyCode === 27) {
        setOpen(false)
      }
    }, [])
    const handleClose = useCallback(() => setOpen(false))

    useEffect(() => {
      document.addEventListener('keydown', handleEsc, false)
      return () => document.removeEventListener('keydown', handleEsc, false)
    }, [])

    return (
      <>
        <Modal isOpen={open} onRequestClose={handleClose} />
        <WrappedComponent {...props} />
      </>
    )
  }

  withModal.propTypes = { onEsc: PropTypes.func, onAfterOpen: PropTypes.func }

  return withModal
}
