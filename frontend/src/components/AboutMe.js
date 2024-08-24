// src/components/AboutMe.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';  // Updated import
import image from '../assets/mattsinging.jpg';

function AboutMe() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/about/')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            <h1>Roulettech, let me tell you about myself!</h1>
            <img src={image} alt="Picture" style={{ width: '300px', height: '300px' }} />
            <p>My name is Matt Perkins. I just graduated from Temple University with a Bachelor of Science in Computer Science in May.</p>
            <p>I have been a programmer for 8 years learning Java my freshman year in Freehold High School's Computer Science Academy.
                I continued with the subject in college at Temple University learning deeply about a breadth of topics in computer science.
                Some of my favorite courses were in Web Application Development with Java Springboot, UX Design,
                Digital Forensics (Cybersecurity), Data Structures, Software Design, Algorithms, and Discrete Math. My capstone project was also a Django/React Website.</p>

            <p>I approach everything I do with enthusiasm. I am committed to constantly learning and being a great team member.</p>
            <p>Two fun things about me that aren't tech related: I am a musician/songwriter and I am a proud Eagle Scout!</p>
        </div>
    );
}

export default AboutMe;
