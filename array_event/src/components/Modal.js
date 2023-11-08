import React from 'react';

function Modal({ isOpen, closeModal, selectedEvent }) {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    isOpen && (
      <div className="fixed inset-4 flex items-center justify-center z-50" onClick={handleCloseModal}>
        <div className="modal-container p-4 bg-stone-400 opacity-90 rounded-lg shadow-lg  w-96 h-60 relative">
          <div className="absolute top-0 right-0 p-2">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>

          <div className="modal-header">
            <h2 className="text-2xl font-semibold text-center">Event Details</h2>
            <hr className="my-2 border-t border-white" />
          </div>

          <div className="modal-body text-center mt-10">
            <h3 className="text-lg font-semibold ">{selectedEvent.comment}</h3>
            <p className="text-xl font-bold ">{selectedEvent.individualName}</p>
            <p className="text-md">Venue: {selectedEvent.venue}</p>
            <hr className="my-2 border-t border-white" />
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
