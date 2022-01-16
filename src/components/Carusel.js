import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import "./Carusel.css";

class carusel extends React.Component {
    render() {
        const settings = {
            fade: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    <div className="slide">
                        <img className="slide-img" src="/images/slide1.jpg" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src="/images/slide2.jpg" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src="/images/slide3.jpg" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src="/images/slide4.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}
export default carusel;