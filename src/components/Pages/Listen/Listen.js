import React from 'react'
import Band from '../Listen/hero-bg.png'
import './listen.css'

const Listen = () => {
  return (
    <section>
        <section className='sec1'>
            <section className='one'>
                <h1> <span>Listen</span> to <br /> new music.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <section className='btn'>
                    <button>DOWNLOAD NOW</button>
                    <button>START FREE TRIAL</button>
                </section>
            </section>
                <figure>
                    <img src={Band} alt={Band} />
                </figure>
        </section>
    </section>
  )
}

export default Listen