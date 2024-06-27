// src/ConcertCalendar.js
import React from 'react';
import './Calendar.css';

const concerts = [
  {
    date: '2024-07-01',
    location: 'Berlin Philharmonic, Berlin, Germany',
    details: 'Beethoven Symphony No.9'
  },
  {
    date: '2024-07-15',
    location: 'Concertgebouw, Amsterdam, Netherlands',
    details: 'Mahler Symphony No.5'
  },
  // Add more concerts here
];

const ConcertCalendar = () => {
  return (
    <div className="concert-calendar">
      <h2>Future Dates</h2>
      <div className="concerts">
        {concerts.map((concert, index) => (
          <div className="concert" key={index}>
            <div className="date">{concert.date}</div>
            <div className="details">
              <div className="location">{concert.location}</div>
              <div className="description">{concert.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertCalendar;
