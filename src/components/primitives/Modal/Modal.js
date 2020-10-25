import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


import { StyledOverlay, StyledContainer, StyledClose } from './styled'
import { Remove } from '../Icon'

const Modal = ({
  isOpen,
  onClose,
  hasCloseIcon,
  children,
  size,
  closeConfirmation,
  Confirmation,
  background
}) => {
  const [fadeType, setFadeType] = useState('out')

  const handleClose = e => {
    if (e) e.preventDefault()
    if (!closeConfirmation) setFadeType('out')
    setTimeout(() => {
      onClose({ success: false })
    }, 200)
  }

  useEffect(
    () => {
      setTimeout(() => {
        if (isOpen) setFadeType('in')
      }, 200)
    },
    [isOpen]
  )

  if (isOpen) {
    return ReactDOM.createPortal(
      <StyledOverlay isOpen={isOpen} onClick={handleClose} fadeType={fadeType}>
        <StyledContainer
          className="modal"
          onClick={e => e.stopPropagation()}
          fadeType={fadeType}
          size={size}
          background={background}
        >
          {hasCloseIcon && (
            <StyledClose onClick={handleClose}>
              <Remove />
            </StyledClose>
          )}
          {children}
        </StyledContainer>
        {closeConfirmation && Confirmation}
      </StyledOverlay>,
      document.body
    )
  }

  return null
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  hasCloseIcon: PropTypes.bool,
  closeIconColor: PropTypes.string,
  size: PropTypes.string,
  closeConfirmation: PropTypes.bool,
  Confirmation: PropTypes.object
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  hasCloseIcon: true,
  closeIconColor: null,
  size: 'default',
  closeConfirmation: false,
  Confirmation: null
}

export default Modal
