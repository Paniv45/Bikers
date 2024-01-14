import React from 'react';
import Nav from './Nav';
import '../App.css';
import Footer from './Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Rating from './Rating';


const Main = () => {
    return (
        <>
        <Nav/>
        <div className='main'>
            <img src='https://mondraker.com/storage/resources/page/61/images/5dd7d374777aa_10-crafty-carbon-jpg.jpg' alt=''></img>
            <div className="text-block">
                <div className="waviy">
                    <span style={{ '--i': 1 }}>R</span>
                    <span style={{ '--i': 2 }}>i</span>
                    <span style={{ '--i': 3 }}>d</span>
                    <span style={{ '--i': 4 }}>e</span>
                    <span style={{ '--i': 5 }}>r</span>
                    <span style={{ '--i': 6 }}>'</span>
                    <span style={{ '--i': 7 }}>s</span>
                    <span style={{ '--i': 8 }}>.</span>
                    <span style={{ '--i': 9 }}>.</span>
                </div>
                <h3 style={{ color: 'peachpuff',textAlign: 'center' }}>..Ride With Us..</h3>

            </div>

            <div className='videobox'>
            <video autoPlay loop muted playsInline>
            <source src="https://marketplace.canva.com/EAFUyTQj1fA/1/0/800w/canva-medical-event-promotion-charity-video-in-light-green-white-simple-typographic-style-SJyLsccdPbo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className='Heacd'>
            <h1>Top Brands We Deliver</h1>
            </div>
            <div className="Brands">
                
                <img src='https://1000logos.net/wp-content/uploads/2021/04/Hero-logo.png' 
                width="200"
                height="200"
                alt='Hero'
                className="product-image"
                />

                <img src='https://lsmedia.linker-cdn.net/276716/2021/5849356.jpeg' 
                width="200"
                height="200"
                alt='Hero'
                className="product-image"
                />

                <img src='https://play-lh.googleusercontent.com/8Mmbr6Gi7ojbeWl4DY2ejjpLyI4rsARe-znSwMDzcmZkdt7nmQzA6d78gUz1xJQhTe4' 
                width="200"
                height="200"
                alt='Hero'
                className="product-image"
                />

                <img src='https://www.financialexpress.com/wp-content/uploads/2023/03/BeFunky-design_-41.jpg' 
                width="200"
                height="200"
                alt='Hero'
                className="product-image"
                />

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3v-QX8VSHPC4ZeHHfuVFYmAwglBgNy0veQ&usqp=CAU' 
                width="200"
                height="200"
                alt='Hero'
                className="product-image"
                />
            </div>
            <div className='Heacd'>
            <h1>Our Collection's</h1>
            </div>
            <Link to="/Product/mountain-bikes">
            <img src='https://geekaybikes.com/cdn/shop/collections/DSC_0981-copy_350x350_7e2bdbef-d76e-47f1-9ecb-8954b36b05fa.jpg?v=1684921848' alt=''></img>
            </Link>

            <Link to="/Product/Electrica's">
            <img src='https://geekaybikes.com/cdn/shop/files/E_Bikes_57798c7a-d754-485c-b23d-e3570d847a06_800x.jpg?v=1698045870' alt=''></img>
            </Link>

            <Link to="/Product/Roadster's">
            <img src='https://marketplacer.imgix.net/Q3/kHn-CF5CHeZvxOPCvtPFuBCpk.jpg?auto=format&fm=pjpg&fit=max&q=90&itemprop=image&alt=2023%20Road%20Bikes%3A%20What%27s%20New&w=1600&h=1000&s=383b5dd7cdbc6fd6709a7726de7e87a0' alt=''></img>
            </Link>
            </div>
            <Rating/>
            <Footer/>
        
            
        </>
    );
};

export default Main;
