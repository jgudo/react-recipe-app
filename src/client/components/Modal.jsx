import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

const ReactModal = (props) => {
  const modalStyle = {
    modal: {
      background: '#fff',
      padding: '50px',
      textAlign: 'left',
      borderRadius: '6px',
      maxWidth: '400px'
    },
    closeButton: {
      top: '10px',
      right: '10px',
      background: 'transparent',
      boxShadow: 'none'
    },
    closeIcon: {
      fill: '#1a1a1a'
    }  
  };

  return (
    <Modal 
        center
        onClose={props.closeModal} 
        open={props.isOpenModal} 
        styles={modalStyle}
    >
      {props.children}
    </Modal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  closeModal: PropTypes.func,
  isOpenModal: PropTypes.bool
};

export default ReactModal;
