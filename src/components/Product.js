import React from 'react';
import Nav from './Nav';
import './Product.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <Nav />
      <div className='body'>
      <div className='Heading'>
      <section>
	        <div class="content">
		        <h2>MOUNTER'S</h2>
		        <h2>MOUNTER'S</h2>
	        </div>
      </section>
      </div>
      <div className="product-list">
        <div className="product">
          <img
            src="https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F006%2F560%2Fx6-mountain-bike-bmw--002.jpg&w=750&q=75"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>BMW</h2>
          <p>₹ 30000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
            <button>Buy Now</button>
          </Link> 

        </div>
        <div className="product">
          <img
            src="https://cdn.shopify.com/s/files/1/0628/5547/9548/files/Krueger29erDDBlkP333C_875b5351-817b-49bc-afc6-31cf3ba416fe_533x.jpg?v=1701960471" 
            width="300"
            height="300"
            alt="Product"
            className="product-image"
          />
          <h2>Hero</h2>
          <p> ₹ 25,000/-</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/718b+P3tu0L._AC_UF894,1000_QL80_.jpg" // Add your shirt image URL here
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Foldable Bike</h2>
          <p> ₹ 45,000/-</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2021/8/RL/DG/ZE/135587886/screenshot-20210816-111333-jpg-500x500.jpg" // Add your shirt image URL here
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>FlipToy</h2>
          <p> ₹ 12,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/719d7dd288b9e04d95ee4916265e5fb5" // Add your shirt image URL here
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>MTV Bikes</h2>
          <p> ₹ 25,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://images-cdn.ubuy.co.in/65358cc917a57a7b8e1640a0-decathlon-rockrider-st100-mountain-bike.jpg" // Add your shirt image URL here
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Decathlon</h2>
          <p> ₹ 33,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/81PGqrrQPXL._AC_UF894,1000_QL80_.jpg" 
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Billion</h2>
          <p> ₹ 24,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/9/345301115/US/TI/CX/192746630/mountain-bike-full-suspension-down-hill-bicycle-26inch-21-speed-snow-beach-bike-with-fat-tire.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Speed</h2>
          <p>₹ 15,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div> 

        <div className="product">
          <img
            src="https://images.jdmagicbox.com/quickquotes/images_main/atlas_c10_26_inches_27_speed_26_t_27_gear_mountain_cycle_black_green__82741164_0.jpeg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Atlas C-20</h2>
          <p> ₹ 22,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/rockfire-ridge-27-5.webp"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>MTB</h2>
          <p> ₹ 19,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://www.jiomart.com/images/product/original/rv9ikyxwir/riders-speed-series-29-classic-mountain-cycle-21-gear-ideal-for-mens-black-age-14-years-l-product-images-orv9ikyxwir-p600542489-1-202304150337.jpg?im=Resize=(420,420)"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Rider</h2>
          <p> ₹ 25,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://x-trexstore.com/wp-content/uploads/2020/12/3.jpeg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Jaguar Flat Tyre</h2>
          <p> ₹ 30,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <img src='https://image.made-in-china.com/44f3j00QzqlYUOKgVko/2022-New-Arrival-Design-21-Speed-Folding-Road-Bike-Bicycle.webp' alt=''></img>

      </div>
      

      <div className='Heading'>
      <section>
	        <div class="content">
		        <h2>ROADER'S</h2>
		        <h2>ROADER'S</h2>
	        </div>
      </section>
      </div>

      <div className="product-list">
      <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/5117gpsoXPL.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Advanture</h2>
          <p>₹ 30000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
            <button>Buy Now</button>
          </Link> 

        </div>
        <div className="product">
          <img
            src="https://adfnjoxprq.cloudimg.io/v7/_ghost_prod/media/c6/a0/a7/1677587446/93RR2010_PY21_ROADRAGE_EQ_AL_GRN_(1).png"
            width="300"
            height="300"
            alt="Product"
            className="product-image"
          />
          <h2>Ghost</h2>
          <p> ₹ 25,000/-</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://www.tvojbicykel.sk/image_1/1118.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Ghost G-20</h2>
          <p> ₹ 35,000/-</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://adfnjoxprq.cloudimg.io/v7/_ghost_prod/media/be/0c/1c/1677587567/93RR20243789.png?force_format=webp" 
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Rider</h2>
          <p> ₹ 12,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
      </div>
        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/81oN8TSgu-L._AC_UF350,350_QL80_.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>R Cycle</h2>
          <p> ₹ 23,000/-</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2021/8/RL/DG/ZE/135587886/screenshot-20210816-111333-jpg-500x500.jpg" // Add your shirt image URL here
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>FlipToy</h2>
          <p> ₹ 12,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/719d7dd288b9e04d95ee4916265e5fb5" // Add your shirt image URL here
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>MTV Bikes</h2>
          <p> ₹ 25,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://images-cdn.ubuy.co.in/65358cc917a57a7b8e1640a0-decathlon-rockrider-st100-mountain-bike.jpg" // Add your shirt image URL here
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Decathlon</h2>
          <p> ₹ 33,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/81PGqrrQPXL._AC_UF894,1000_QL80_.jpg" 
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Billion</h2>
          <p> ₹ 24,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/9/345301115/US/TI/CX/192746630/mountain-bike-full-suspension-down-hill-bicycle-26inch-21-speed-snow-beach-bike-with-fat-tire.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Speed</h2>
          <p> ₹ 15,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://images.jdmagicbox.com/quickquotes/images_main/atlas_c10_26_inches_27_speed_26_t_27_gear_mountain_cycle_black_green__82741164_0.jpeg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Atlas C-20</h2>
          <p> ₹ 22,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/rockfire-ridge-27-5.webp"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>MTB</h2>
          <p> ₹ 19,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://www.jiomart.com/images/product/original/rv9ikyxwir/riders-speed-series-29-classic-mountain-cycle-21-gear-ideal-for-mens-black-age-14-years-l-product-images-orv9ikyxwir-p600542489-1-202304150337.jpg?im=Resize=(420,420)"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Rider</h2>
          <p> ₹ 25,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://x-trexstore.com/wp-content/uploads/2020/12/3.jpeg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Jaguar Flat Tyre</h2>
          <p> ₹ 30,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

      </div>
      <div className='branding'>
      <img src='https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/custom_sale/sale-2023/dec-23/bicycles-page-montra-chord.webp'alt=''></img>
      </div>

     <div className='Heading'>
      <section>
	        <div class="content">
		        <h2>ELECTRICA'S</h2>
		        <h2>ELECTRICA'S</h2>
	        </div>
      </section>
      </div>
      <div className="product-list">
        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/71LyuTwN2mL.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>MoterRoad</h2>
          <p> ₹ 36000</p>
          <p>*including all taxes.</p>
          <button className="Buy Now">Buy Now</button>
        </div>
        <div className="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-anHd1aeXN47T4zM6CtNqrf2EYEZvRkPBg&usqp=CAU" // Add your shirt image URL here
            width="300"
            height="300"
            alt="Product"
            className="product-image"
          />
          <h2>Hero</h2>
          <p> ₹ 25,000/-</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://www.financialexpress.com/wp-content/uploads/2023/09/gear-head-l-series-e-cycle.jpg?w=1024" 
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Gear</h2>
          <p> ₹ 45,000/-</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://cdni.autocarindia.com/ExtraImages/20220608054704_K1.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Kawaskari</h2>
          <p> ₹ 12,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://www.businessleague.in/wp-content/uploads/2021/09/e-cycle.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>MTV Bikes</h2>
          <p> ₹ 25,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/ninety-one-e-drago-29t-1.webp"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>E-drago</h2>
          <p> ₹ 33,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>
        <div className="product">
          <img
            src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-107820,msid-102999866/6-state-of-the-art-electric-cycles-under-30000-in-india.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Motor Road</h2>
          <p> ₹ 24,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://d2f9uwgpmber13.cloudfront.net/public/image_new/60256b65841c6ed01702454525385.jpg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Z-3 700</h2>
          <p> ₹ 15,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://images.hindustantimes.com/auto/img/2021/11/30/600x338/Nexzu_Roadlark_1638265787603_1638265797464.jpeg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Atlas C-20</h2>
          <p> ₹ 22,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://strodebike.com/wp-content/uploads/2021/12/Griffin-hero-slider.png"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>Strode</h2>
          <p> ₹ 19,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/71luc1VYt9L._AC_UF894,1000_QL80_.jpg://www.jiomart.com/images/product/original/rv9ikyxwir/riders-speed-series-29-classic-mountain-cycle-21-gear-ideal-for-mens-black-age-14-years-l-product-images-orv9ikyxwir-p600542489-1-202304150337.jpg?im=Resize=(420,420)"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h2>E-Rider</h2>
          <p> ₹ 25,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <div className="product">
          <img
            src="https://ik.imagekit.io/fliko6zjtpq/Bicycle-Models/PhotoRoom-20220906_173900__HD___1__L5h63RISj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662470051932://x-trexstore.com/wp-content/uploads/2020/12/3.jpeg"
            width="200"
            height="200"
            alt="Product"
            className="product-image"
          />
          <h4>JEco-56</h4>
          <p> ₹ 30,000</p>
          <p>*including all taxes.</p>
          <Link to="/buy">
        <button>Buy Now</button>
      </Link>
        </div>

        <img src='https://www.herolectro.com/on/demandware.static/-/Sites-heroLectro-Library/default/dw08b75608/Homepage_herolectro.com/1920x1024-new-10oct.jpg'alt=''></img>      
        
      </div>
      </div>


      <Footer/>
    </>
  );
};

export default Product;
