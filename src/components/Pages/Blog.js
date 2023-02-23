import React from "react";

import ring from '../assets/ring.jpg'
import crowd from '../assets/crowd.jpg'
import disk from '../assets/disk.jpg'
import Footer from "./Footer/Footer";
import '../Pages/blog.css'

export const Blog = () => {
  return (
    <div>
      <section className="ring">
        <img src={ring} alt={ring} />
        <h6>April 14, 2023</h6>
        <h2>Top 10 best songs in April</h2>
        <em>by Alan Smith in Music</em>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices <br /> gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse <br /> ultrices gravida.</p>
      </section>

      <section  className="ring">
      <img src={crowd} alt={crowd} />
        <h6>April 14, 2023</h6>
        <h2>Summer Festivals that you cannot miss</h2>
        <em>by Alan Smith in Music</em>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices <br /> gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse <br /> ultrices gravida.</p>
      </section>

      <section  className="ring">
      <img src={disk} alt={disk} />
        <h6>April 14, 2023</h6>
        <h2>Michael Smith latest album is out now</h2>
        <em>by Alan Smith in Music</em>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices <br /> gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse <br /> ultrices gravida.</p>
      </section>


      <Footer />
    </div>
  );
};
