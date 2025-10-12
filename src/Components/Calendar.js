// src/ConcertCalendar.js
import React from 'react';
import './Calendar.css';

const concerts = [
  {
    date: '31 May 2026',
    location: 'Terra Coda at Bristol Beacon',
    details: 'Award winning composer Benji Bower works with Michael Cobb and the Terra Coda Collective',
    ticketLink: 'https://www.terracoda.co.uk'
  },
  {
    date: '18 July 2026',
    location: 'All Saints West Dulwich with Lambeth Orchestra',
    details: 'Britten: Four Sea Interludes from Peter Grimes, Stravinsky: The Rite of Spring',
    ticketLink: 'https://www.lambeth-orchestra.org.uk/events/earth-sea'
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
