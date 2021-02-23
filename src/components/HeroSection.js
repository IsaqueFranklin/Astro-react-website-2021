import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ASTRO INC</h1>
            <p>Tecnologia em rádio telescópios.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    SABER MAIS
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    VER TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
