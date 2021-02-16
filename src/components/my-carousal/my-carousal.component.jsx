import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Slide1 from '../../assets/img/carousal/slide1.webp';
import Slide2 from '../../assets/img/carousal/slidex.webp';
import Slide3 from '../../assets/img/carousal/slide3.webp';

import './my-carousal.styles.css';

const MyCarousal = () => {
    return(
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img
                className="d-block w-100 .custom-img"
                src={Slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <p>Nothing will work unless you do.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 .custom-img"
                src={Slide2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <p>To handle yourself, use your head; to handle others, use your heart.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 .custom-img"
                src={Slide3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <p>Do or do not. There is no try.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarousal;