import React, { useState } from 'react';
import './MyWork.css';
import AnimatedPage from "../Components/transition";
import Candide from '../Images/Candide.png';
import conductingOpera from '../Images/conductingOpera.png';
import Katya from '../Images/KatyaWindow.png';
import mikesuite from '../Images/MikeBlueSuit.png'
import Shirine from '../Images/Shirine.png'
import OperaLyon from '../Images/OperaLyon.jpg'
import WayneandMichael from '../Images/WayneandMichael.png'

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
            src: WayneandMichael,
            alt: 'Wayne Marshall and Michael Cobb in bright colours',
            text: `<b>Lambeth Orchestra Americana</b> 6 July 2024 
                  <br />Role: Principal Guest Conductor<br /> 
                  Venue: St John's Waterloo, London<br />
                  Soloist: Wayne Marshall
                  `,
        },
        {
            src: OperaLyon,
            alt: 'Photographer: Bastien NVS, Image: Opera de Lyon with clear sky',
            text: `<b>Die Frau ohne Schatten</b> October 2023 
                  <br />Role: Assistant Conductor to Daniele Rustioni<br /> 
                  Venue: Opera de Lyon
                  `,
        },
        {
            src: mikesuite,
            alt: 'Michael Cobb in a blue suit',
            text: `<b>Lambeth Orchestra Scherazade</b> 15 July 2023 
                  <br />Role: Principal Guest Conductor<br /> 
                  Venue: St Gabriel's Church, Pimlico<br />
                  Soloist: Rachel Duckett
                  `,
        },
        {
            src: Katya,
            alt: 'Katya',
            text: `<b>Katia Kabanova, Janacek</b> May 2023 
                  <br />Role: Assistant Conductor to Elena Schwartz<br /> 
                  Venue: Opera de Lyon`,
        },
        {
            src: conductingOpera,
            alt: 'Lambeth Orchestra',
            text: `<b>Lambeth Orchestra 50th Anniversary Concert</b> February 2023 
                  <br />Role: Principal Guest Conductor<br /> 
                  Venue: Queen Elizabeth Hall<br />
                  A celebratory programme including Strauss' Four Last Songs<br />
                  Soloist: Nadine Benjamin`,
        },
        {
            src: Candide,
            alt: 'Bernstein Candide',
            text: `<b>Candide, Bernstein</b> December 2022 
                  <br />Role: Assistant Conductor to Wayne Marshall<br /> 
                  Venue: Opera de Lyon`,
        },
        {
            src: Shirine,
            alt: 'Opera de Lyon Nouvelle Production Shirine',
            text: `<b>Shirine - a world premiere by Thierry Escaich</b> May 2022 
                  <br />Role: Assistant Conductor to Franc Ollu<br /> 
                  Venue: Opera de Lyon`,
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
