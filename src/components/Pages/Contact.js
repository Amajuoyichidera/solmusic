import React from "react";
import map from '../assets/map.jpg'
import Footer from "./Footer/Footer";
import '../Pages/contact.css'

export const Contact = () => {
  return (
    <section>
     <section className="map">
      <img src={map} alt={map} />
      <form>
        <h1>GET IN TOUCH</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore mag na aliqua. Quis <br /> ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed doe iusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices <br /> gravida.</p>
         <p className="road">Main Road , No 25/11 </p>
         <p className="road">+34 556788 3221</p> 
         <p className="road">contact@solmusic.com</p>

         <section className="your">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your email" />
         </section>

         <section className="subj">
         <input type="text" placeholder="Subject" />
         </section>
        
        <section className="mess">
        <textarea name="" placeholder="Message"></textarea>
        </section>
         
         <button className="sendmess">SEND MESSAGE</button>
      </form>

     </section>

     <Footer />
    </section>
  );
};
