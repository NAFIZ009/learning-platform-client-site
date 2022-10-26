import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

function Md({name,price}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate=useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className='btn btn-success w-100'>checkOut</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>TNX FOR BUYING</h2>
        
        <div className='my-2 fw-bold'>Course Name: {name}</div>
        <div className='my-2 fw-bold'>Course Price: {price}</div>
        <button className='btn btn-outline-primary' onClick={()=>{closeModal();navigate('/')}}>close</button>
      </Modal>
    </div>
  );
}

export default Md;