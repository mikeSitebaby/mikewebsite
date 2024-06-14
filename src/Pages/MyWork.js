import React, { useState } from 'react';
import './MyWork.css';
import AnimatedPage from "../Components/transition";
import Candide from '../Images/Candide.png';
import laFemme from '../Images/LaFemme.png';
import conductingOpera from '../Images/conductingOpera.png';
import Katya from '../Images/KatyaWindow.png';

export default function MyWork() {
    const [visibleTexts, setVisibleTexts] = useState({});

    const handleImageClick = (index) => {
        setVisibleTexts((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const works = [
     
        {
            src: conductingOpera,
            alt: 'Lambeth Orchestra',
            text: `<b>Lambeth Orchestra</b> February 2023 
                   <br />Role: Guest Conductor<br /> 
                   Venue: Royal Opera House
                   A captivating performance of classic opera.`,
        },
        {
          src: Katya,
          alt: 'Katya',
          text: `<b>Katia Kabanova</b> February 2023 
                 <br />Role: Guest Conductor<br /> 
                 Venue: Royal Opera House
                 A captivating performance of classic opera.`,
      },
      {
        src: Candide,
        alt: 'Candide',
        text: `<b>Candide</b> December 2022 
               <br />Role: Assistant Conductor to Wayne Marshall<br /> 
               Venue: Opera de Lyon
               An energetic and witty Bernstein operetta.`,
    },
    {
        src: laFemme,
        alt: 'laFemme',
        text: `<b>La Femme</b> January 2023 
               <br />Role: Conductor<br /> 
               Venue: Paris Opera
               A compelling modern opera.`,
    },
    {
      src: conductingOpera,
      alt: 'Lambeth Orchestra',
      text: `<b>Lambeth Orchestra</b> February 2023 
             <br />Role: Guest Conductor<br /> 
             Venue: Royal Opera House
             A captivating performance of classic opera.`,
  },
  {
    src: Katya,
    alt: 'Katya',
    text: `<b>Katia Kabanova</b> February 2023 
           <br />Role: Guest Conductor<br /> 
           Venue: Royal Opera House
           A captivating performance of classic opera.`,
},
    ];

    return (
        <AnimatedPage>
            <h2>My Work</h2>
            <section className='myworkContainer'>
                {works.map((work, index) => (
                    <div className='blogRow' key={index}>
                        <img
                            className='blogImage'
                            src={work.src}
                            alt={work.alt}
                            onClick={() => handleImageClick(index)}
                        />
                        <p className={`blogtext ${visibleTexts[index] ? 'visible' : ''}`} dangerouslySetInnerHTML={{ __html: work.text }}></p>
                    </div>
                ))}
            </section>
        </AnimatedPage>
    );
}
