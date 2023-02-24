import React from 'react'
import '../Footer/footer.css'
import insta from '../../assets/insta.png'
import linked from '../../assets/linked.png'
import twi from '../../assets/twi.png'
import face from '../../assets/face.png'
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer>
        <Slide>
        <section>
            <section className='sic'>
            <h6><span>SOL</span>MUSIC</h6>
            <i className="fas fa-music music1"></i>
            </section>
           
            <small>COPYRIGHT ©2023 ALL RIGHTS RESERVED | THIS TEMPLATE IS MADE WITH LOVE BY <br /> DAVID AMAJUOYI</small>
            <section className='myimg'>
                <img src={insta} alt={insta} />
                <img src={linked} alt={linked} />
                <img src={twi} alt={twi} />
                <img src={face} alt={face} />           
            </section>
        </section>

        <section className='us'>
            <h5>ABOUT US</h5>
            <p>Our Story</p>
            <p>Sol Music Blog</p>
            <p>History</p>
        </section>

        <section className='us'>
            <h5>PRODUCTS</h5>
            <p>Music</p>
            <p>Subscription</p>
            <p>Custom Music</p>
            <p>Footage</p>
        </section>

        <section className='us'>
            <h5>PLAYLISTS</h5>
            <p>Newsletter</p>
            <p>Carrers</p>
            <p>Press</p>
            <p>Contact</p>
        </section>
        </Slide>
    </footer>
  )
}

export default Footer