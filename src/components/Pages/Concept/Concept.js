import React from 'react'
import soul from '../../assets/soul.jpg'
import live from '../../assets/live.jpg'
import dj from '../../assets/dj.jpg'
import guitar from '../../assets/guitar.jpg'
import '../../Pages/Concept/concept.css'

const Concept = () => {
  return (
   <section className='concept'>
    <section className='our'>
        <h3>Our Concept & <br /> artists</h3>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus <br /> commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
    </section>

    <section className='soul'>
        <section>
        <img src={soul} alt={soul} />
        <h5>Soul Music</h5>
        </section>

        <section>
        <img src={live} alt={live} />
        <h5>Live Concerts</h5>
        </section>

        <section>
        <img src={dj} alt={dj} />
        <h5>Dj Sets</h5>
        </section>

        <section>
        <img src={guitar} alt={guitar} />
        <h5>Live Streems</h5>
        </section>     
        
    </section>

   </section>
  )
}

export default Concept