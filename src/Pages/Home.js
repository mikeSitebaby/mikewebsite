import React from 'react';
import Carousel from '../Components/Carousel';
import AnimatedPage from "../Components/transition";
import Calendar from '../Components/Calendar';

export default function Home() {
    return (
        <AnimatedPage>
        <div>
            <Carousel/>
        </div>
       
        <div id="calendar-section">
                <Calendar />
            </div>
      
        </AnimatedPage>
    );
}