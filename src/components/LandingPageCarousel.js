import React from 'react';

// IMAGES
import sliderImage from '../images/home-banner-bg.jpg'

// COMOPNENTS
import {
    Button
} from 'reactstrap';

// STYLES
import '../styles/carousel.scss'


const LandingPageCarousel = () => {

    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item">
                    <img src={sliderImage} alt="marijuana leaf with cbd dropper" className="carousel-image" />
                    <div class="carousel-caption">
                        <div class="carousel-caption-inner">
                            <h3>The Cannabis Guide Just For You</h3>
                            <Button>Learn Now</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPageCarousel;