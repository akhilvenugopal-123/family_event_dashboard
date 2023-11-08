// FamilyEventDashboard.js

import React from 'react';
import TodaysEvents from './TodaysEvents';
import UpcomingEvents from './UpcomingEvents';
import Navbar from './Navbar';
import Footer from './Footer';

const events = [
  {
    id: 1,
    name: 'Birthday',
    date: new Date('2023-11-12'),
    comment:'Happy Birthday',
    individualName: 'Henry',
    photo: 'imagesarray/portrait-white-man-isolated (2).jpg',
    venue:'Mini Hall',
    recurring: true,
    
  },
  {
    id: 2,
    name: 'Birthday',
    date: new Date('2023-11-08'),
    comment:'Happy Birthday',
    individualName: 'Rahul',
    photo: 'imagesarray/rahul.jpg',
    venue:'Mini Hall',
    recurring: true,
    
  },
  {
    id: 3,
    name: 'Birthday',
    date: new Date('2023-11-08'),
    comment:'Happy Birthday',
    individualName: 'Samsun',
    photo: 'imagesarray/samsun.jpg',
    venue:'Mini Hall',
    recurring: true,
    
  },
  {
    id: 4,
    name: 'Wedding Anniversary',
    date: new Date('2023-11-08'),
    comment:'Happy Wedding Anniversary',
    individualName: 'Raj & Reshma',
    photo: 'imagesarray/raj_reshma.jpg',
    venue:'Main Hall',
    recurring: true,
    
  },
  {
    id: 5,
    name: 'Music Fest',
    date: new Date('2023-11-16'),
    comment:'Music Concert',
    individualName: '',
    photo: 'imagesarray/party.jpg',
    venue:'Main Hall',
    recurring: false,
    
  },
  {
    id: 6,
    name: 'Birthday',
    date: new Date('2023-11-9'),
    comment:'Happy Birthday',
    individualName: 'Susan',
    photo: 'imagesarray/susan.jpg',
    venue:'Mini Hall',
    recurring: true,
    
  },
  {
    id: 7,
    name: 'Club Anniversary',
    date: new Date('2023-11-25'),
    comment:'!!! Annual Day !!!',
    individualName: '',
    photo: 'imagesarray/party.jpg',
    venue:'Main Hall',
    recurring: true,
    
  },
  {
    id: 8,
    name: 'Union Day',
    date: new Date('2023-11-28'),
    comment:'Family Get Together',
    individualName: '',
    photo: 'imagesarray/party.jpg',
    venue:'Main Hall',
    recurring: false,
    
  },
  {
    id: 9,
    name: 'Birthday',
    date: new Date('2023-11-14'),
    comment:'Happy Birthday',
    individualName: 'Anna',
    photo: 'imagesarray/anna.jpg',
    venue:'Mini Hall',
    recurring: true,
  },
  
];

function FamilyEventDashboard() {
  return (
    <div>
      <Navbar/>
      <TodaysEvents events={events} />
      <UpcomingEvents events={events} />
      <Footer/>
    </div>
  );
}

export default FamilyEventDashboard;
