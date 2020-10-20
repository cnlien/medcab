import React from 'react';

// COMPONENTS
import LandingPageCarousel from './LandingPageCarousel.js'
import {
    Container,
} from 'reactstrap';

// STYLES
import '../styles/landingPage.scss';

const LandingPage = () => {
    
    return(
        <Container fluid className="landingPage">
           <header>
               <LandingPageCarousel />
           </header>
        </Container>
    )
}

export default LandingPage;