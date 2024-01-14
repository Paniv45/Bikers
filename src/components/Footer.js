import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className='center'>
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                alt="Instagram"
                className="footer-icon"
              />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Facebook.png"
                alt="Facebook"
                className="footer-icon"
              />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
                alt="YouTube"
                className="footer-icon"
              />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.snapchat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5337_-_Snapchat-512.png"
                alt="Snapchat"
                className="footer-icon"
              />
            </a>
          </section>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Riders- Ride With Us
      </div>
    </footer>
  );
};

export default Footer;
