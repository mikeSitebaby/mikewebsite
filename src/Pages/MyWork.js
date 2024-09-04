import React, { useState, useEffect } from 'react';
import './MyWork.css';
import AnimatedPage from "../Components/transition";
import Candide from '../Images/Candide.png';
import conductingOpera from '../Images/conductingOpera.png';
import Katya from '../Images/KatyaWindow.png';
import mikesuite from '../Images/MikeBlueSuit.png'
import Shirine from '../Images/ShirineCrop.png'
import OperaLyon from '../Images/OperaLyon.jpg'
import TERRACODA1 from '../Images/TERRACODA1.JPG'
import ReformJenniferPike from '../Images/ReformJenniferPikeCrop.png'
import LambethCopland from '../Images/MichaelCobb-18.jpg'
import VixenLongborough from '../Images/VixenLongborough.jpg'



export default function MyWork() {
    const [visibleTexts, setVisibleTexts] = useState({});
    const [isClickable, setIsClickable] = useState(true);



    const handleImageClick = (index) => {
        if (isClickable) {
            setVisibleTexts((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsClickable(window.innerWidth > 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Initial check on component mount
        window.addEventListener('resize', handleResize); // Listen for window resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
        };
    }, []);

    const works = [

        {
            src: LambethCopland,
            alt: 'Conductor Michael Cobb performing with Lambeth Orchestra in London. Photographer: Betty Laura Zapata',
            text: `<b>Lambeth Orchestra: Americana with soloist Wayne Marshall</b> July 2024 
                  <br />Role: Principal Guest Conductor<br /> 
                  Venue: St John's Waterloo<br />
                  Programme: Bernstein Candide Overture, Gershwin Rhapsody in Blue, Copland Symphony No.3 
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
            text: `<b>Lambeth Orchestra Scheherazade</b> 15 July 2023 
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
            src: ReformJenniferPike,
            alt: 'Michael Cobb and Jennifer Pike',
            text: `<b>Beethoven Violin Concerto with Jennifer Pike</b> 26 March 2023 
                  <br />Orchestra of the Reform<br /> 
                  Venue: The Reform Club, London`,
        },
        {
            src: TERRACODA1,
            alt: 'Orchestra recording at BBC Hoddinott Hall - Photographer Paul Blakemore',
            text: `<b>Studio Recording - Terra Coda, composer Benji Bower</b> February 2023 
                  <br />Role: Conductor<br /> 
                  Venue: BBC Hoddinott Hall recording studios, Cardiff<br />
                  Recording for album release in 2024`,
        },
        {
            src: conductingOpera,
            alt: 'Lambeth Orchestra',
            text: `<b>Lambeth Orchestra 50th Anniversary Concert</b> 18 January 2023 
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
        {
            src: VixenLongborough,
            alt: 'Fox Silouhette on a dark green oil canvas',
            text: `<b>The Cunning Little Vixen</b> July 2021 
                  <br />Role: Assistant Conductor to Justin Brown<br /> 
                  Venue: Longborough Festival Opera`,
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
