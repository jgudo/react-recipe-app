import React from 'react';

const Modal = (props) => {
  return (
      <div>
          <div className="modal-wrapper"
              style={{
                transform: props.show ? 'translate(50%)' : 'translate(50%, -100%)',
                visibility: props.show ? 'visible' : 'hidden',
                opacity: props.show ? 1 : 0
              }}>
              <span className="close-modal-btn" onClick={props.close}>×</span>
              <div className="modal-body">
                {props.children}
              </div>
          </div>
          <div 
            className="back-drop"
            style={{
              display: props.show ? 'block' : 'none'
            }}
          >
          </div>
      </div>
  );
};

export default Modal;
