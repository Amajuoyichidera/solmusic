import React from 'react'
import Ad from '../../assets/ad.jpg'
import High from '../../assets/high.jpg'
import Offline from '../../assets/offline.jpg'
import Rhythm from '../../assets/rythm.jpg'
import '../why/why.css'


const Why = () => {
  return (
    <section className='why'>
        <section className='prem'>
                <h3>Why go Premium</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus <br /> commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section className='add'>

          <section className='inter'>
            <img src={Ad} alt={Ad} />
            <h5>No ad interruptions</h5>
            <p>Consectetur adipiscing elit</p>
          </section>

          <section className='inter'>
            <img src={High} alt={High} />
            <h5>High Quality</h5>
            <p>Ectetur adipiscing elit</p>
          </section>

          <section className='inter'>
            <img src={Offline} alt={Offline} />
            <h5>Listen Offline</h5>
            <p>Sed do eiusmod tempor</p>
          </section>

          <section className='inter'>
            <img src={Rhythm} alt={Rhythm} />
            <h5>Download Music</h5>
            <p>Adipiscing elit</p>
          </section>
          

        </section>

    </section>
  )
}

export default Why