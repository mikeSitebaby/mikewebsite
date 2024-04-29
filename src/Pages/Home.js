import React from 'react';
import Carousel from '../Components/Carousel';
import AnimatedPage from "../Components/transition";

export default function Home() {
    return (
        <AnimatedPage>
        <div>
            <Carousel/>
        </div>
        </AnimatedPage>
    );
}