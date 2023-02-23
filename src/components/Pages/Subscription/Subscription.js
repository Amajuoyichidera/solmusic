import React from 'react'
import Check from '../../assets/check-icon.png'
import '../../Pages/Subscription/subscription.css'

const Subscription = () => {
  return (
    <section className='subscrip'>
        <section>
            <h3>Subscription <br /> from $15/month</h3>
            <h5>Start a free trial now</h5>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus <br /> commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            <button>TRY IT NOW</button>
        </section>

        <section className='check'>
            <section className='play play1'>
                <img src={Check} alt={Check} />
                <h6>Play any track</h6>
            </section>
            <section className='play'>
              <img src={Check} alt={Check} />
              <h6>Listen offline</h6>
            </section>
            <section className='play'>
              <img src={Check} alt={Check} />
              <h6>No ad interruptions</h6>
            </section>
            <section className='play'>
              <img src={Check} alt={Check} />
              <h6>Unlimited skips</h6>
            </section>
            <section className='play'>
              <img src={Check} alt={Check} />
              <h6>High quality audio</h6>
            </section>
            <section className='play'>
              <img src={Check} alt={Check} />
              <h6>Shuffle play</h6>
            </section>
        </section>

    </section>
  )
}

export default Subscription