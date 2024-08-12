// src/ConcertCalendar.js
import React from 'react';
import './Calendar.css';

const concerts = [
  {
    date: '28 October 2024',
    location: 'Lambeth Orchestra with soloist Ariana Kashefi',
    details: 'Dvorak Cello Concerto, Tchaikovsky Symphony no.2',
    ticketLink: 'https://www.lambeth-orchestra.org.uk/events/an-evening-of-slavic-masterpieces'
  },
  {
    date: 'May 2025',
    location: 'Opera de Lyon',
    details: 'Britten: Peter Grimes, Assistant Conductor to Wayne Marshall',
    ticketLink: 'https://www.opera-lyon.com'
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
