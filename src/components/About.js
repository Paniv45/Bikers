import React from 'react';
import './About.css';
import Nav from './Nav';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <Nav />
            <div className='main'>
                <div className="about-container">
                    <h2>About Us</h2>
                    <h3>Welcome to Rider's</h3>
                    <p>A community for fitness and rider's enthusiast.</p>
                    <p>Fullfill Your dream of viewing the world with our different variety of cycles for differnt region.</p>
                    <p>At Rider's, we strive for excellence in making best cycles. Our team of dedicated professionals is committed to delivering high-quality different condition cycles to meet the unique needs of our clients.</p>
                    <h4>Our Core Values:</h4>
                    <p>1. Customer Satisfaction</p>
                    <p>2. Innovation and Creativity</p>
                    <p>3. Integrity and Transparency</p>
                    <p>4. Continuous Improvement</p>
                    <h4>Why Choose Rider's?</h4>
                    <p>1. Experienced and Knowledgeable Team</p>
                    <p>2. State-of-the-Art Technology</p>
                    <p>3. Commitment to Quality</p>
                    <p>4. Customer-Centric Approach</p>
                    <p>Join us on our journey to live your dream of becoming a rider. We value the trust our clients place in us and continuously work to exceed their expectations.</p>


                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;

