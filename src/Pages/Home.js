import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reservation from '../components/Reservation';
import Block from "../components/Block";
import Carusel from '../components/Carusel';
import  "../components/Home.css";

function Homepage() {
    return (
        <div>
            <Header />
            <Carusel />
            <div className="block-container">
                <Block img="/images/content1.jpg" training_type={"Body Shape"} training_link="https://www.youtube.com/watch?v=vei81-bZhG4" className="col33" />
                <Block img="/images/content2.jpg" training_type={"Calisthenics"} training_link="https://www.youtube.com/watch?v=elKgiLycyAw" className="col33" />
                <Block img="/images/content3.jpg" training_type={"Burn"} training_link="https://www.youtube.com/watch?v=R9SLmjL0GCM" className="col33" />
            </div>
            <Reservation />
            <Footer />
        </div>
    );
}

export default Homepage;