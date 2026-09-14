// src/ConcertCalendar.js
import React from 'react';
import './Calendar.css';

const concerts = [
  {
    date: '30 November 2026',
    location: 'Glasgow Royal Concert Hall',
    details: 'Love Actually in Concert - Live',
    ticketLink: 'https://musicalsontour.co.uk/love-actually-in-concert-with-live-orchestra-tour/'
  },
  {
    date: '2 December 2026',
    location: 'Usher Hall Edinburgh',
    details: 'Love Actually in Concert - Live',
    ticketLink: 'https://musicalsontour.co.uk/love-actually-in-concert-with-live-orchestra-tour/'
  },
  {
    date: '4 December 2026',
    location: 'Bath Forum',
    details: 'Love Actually in Concert - Live',
    ticketLink: 'https://musicalsontour.co.uk/love-actually-in-concert-with-live-orchestra-tour/'
  },
  {
    date: '5 December 2026',
    location: 'Liverpool Philharmonic Hall',
    details: 'Love Actually in Concert - Live',
    ticketLink: 'https://musicalsontour.co.uk/love-actually-in-concert-with-live-orchestra-tour/'
  },
  {
    date: '6 December 2026',
    location: 'Swansea Building Society Arena',
    details: 'Love Actually in Concert - Live',
    ticketLink: 'https://musicalsontour.co.uk/love-actually-in-concert-with-live-orchestra-tour/'
  },
  {
    date: '6 December 2026',
    location: 'Swansea Building Society Arena',
    details: 'Love Actually in Concert - Live',
    ticketLink: 'https://musicalsontour.co.uk/love-actually-in-concert-with-live-orchestra-tour/'
  },
  // Add more concerts here
];

const ConcertCalendar = () => {
  return (
    <div className="concert-calendar">
      <h2>Future Dates</h2>
      <div className="concerts">
        {concerts.map((concert, index) => (
            <a
              key={index}
              className="concert"
              href={concert.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
            >
       
            <div className="date">{concert.date}</div>
            <div className="details">
              <div className="location">{concert.location}</div>
              <div className="description">{concert.details}</div>
            </div>
         
            </a>
        ))}
      </div>
    </div>
  );
};

export default ConcertCalendar;
