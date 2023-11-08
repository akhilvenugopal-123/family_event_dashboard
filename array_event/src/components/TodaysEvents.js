// TodaysEvents.js

import React,{useState} from 'react';
import Modal from './Modal';


function TodaysEvents({ events }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const today = new Date();
    

    // console.log(isModalOpen);

    const openModal = (event) => {

      setSelectedEvent(event);
      setIsModalOpen(true);
    };
    
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const todaysEvents = events.filter((event) => {
        if (event.recurring) {
          // For recurring events, compare day and month only
          return (
            event.date.getDate() === today.getDate() &&
            event.date.getMonth() === today.getMonth()
          );
        } else {
          // For non-recurring events, compare day, month, and year
          return (
            event.date.getDate() === today.getDate() &&
            event.date.getMonth() === today.getMonth() &&
            event.date.getFullYear() === today.getFullYear()
          );
        }
      });
      

  return (
    <div className="mt-12 container mx-auto md:w-2xl lg:w-2xl p-4 bg-slate-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Today's Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:h-60 lg:w-70">
      {todaysEvents.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md " style={{
            backgroundImage: `url('/imagesarray/confetti-yellow.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center' 
          }}>
          <div onClick={() => openModal(event)} className="hover:opacity-75 cursor-pointer">
          <img src={event.photo} alt=""  onError={(e) => {
               e.target.src = '/imagesarray/sample_image (2).jpg'; // Set an alternative image URL when the main image fails to load
               }} className='mx-auto mt-14 rounded-full w-28 h-28' />
          <h3 className='flex justify-center font-bold text-violet-600'>{event.comment} </h3>
          <p className='flex justify-center font-semibold text-black'>{event.individualName}</p>
        </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} closeModal={closeModal} selectedEvent={selectedEvent} />
    </div>
    </div>
  );
}

export default TodaysEvents;
