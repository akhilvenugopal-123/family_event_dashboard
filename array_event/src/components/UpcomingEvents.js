// UpcomingEvents.js

import React,{useState} from 'react';
import Modal from './Modal';

function UpcomingEvents({ events }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const today = new Date();
  const twoWeeksFromToday = new Date(today);

  twoWeeksFromToday.setDate(today.getDate()+14);
    

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const upcomingEvents = events.filter((event) => {
    
    if(event.date<= twoWeeksFromToday ){

       if(event.recurring){

           return(
                event.date.getDate() > today.getDate() &&
                event.date.getMonth() >= today.getMonth()
             );
        } else {
          return (
            event.date.getDate() > today.getDate() &&
            event.date.getMonth() >= today.getMonth() &&
            event.date.getFullYear() >= today.getFullYear()
          );

        }

    }
    return false;
  });





  return (
    <div className="mt-6 rounded-md bg-slate-300 container mx-auto w-2xl p-4 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 flex justify-center">Upcoming Events</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {upcomingEvents.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md w-120" style={{
          backgroundImage: `url('/imagesarray/up_back.jpg')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center center' 
        }}>
           <div onClick={() => openModal(event)} className="hover:opacity-75 cursor-pointer">
          {/* <img src={event.photo} alt={event.individualName} className='lg:ml-24 mt-2 rounded-full w-20 h-20' /> */}
          <h3 className='flex justify-center mt-12  font-semibold text-black'>{event.name}</h3>
          <p className='flex justify-center  mb-10   text-sm'>{event.date.toDateString()}</p>
        </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} closeModal={closeModal} selectedEvent={selectedEvent} />
    </div>
    </div>
  );
}

export default UpcomingEvents;
