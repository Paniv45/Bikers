import React from 'react';
import Nav from './Nav';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <>
            <Nav />
            <div className='body'></div>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>If you have any questions or inquiries, feel free to reach out to us!</p>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>

                <div className="contact-info">
                    <p>Email: Riders@email.com</p>
                    <p>Phone: +44 4567 7890</p>
                    <p>Address: 123 Street,London</p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;

