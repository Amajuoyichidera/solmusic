import React from 'react'
import '../../Pages/How/how.css'
import Brain from '../../assets/brain.png'
import Pointer from '../../assets/pointer.png'
import Phone from '../../assets/smartphone.png'


const How = () => {
  return (
    <section className='how'>
        <h1>How it works</h1>
        
        <section className='create'>
            <section>
                <figure>
                    <span></span>
                    <img className='brain' src={Brain} alt={Brain} />
                </figure>
                <h3>Create an account</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi <br /> -scing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum sus <br /> -pendisse ultrices gravida.</p>
            </section>

            <section>
                <figure>
                    <span></span>
                    <img className='brain' src={Pointer} alt={Pointer} />
                </figure>
                <h3>Choose a plan</h3>
                <p>Donec in sodales dui, a blandit nunc. Pellen <br /> -tesque id eros venenatis, sollicitudin neque <br /> sodales, vehicula nibh. Nam massa odio, portti <br /> -tor vitae efficitur non.</p>
            </section>

            <section>
                <figure>
                    <span></span>
                    <img className='brain' src={Phone} alt={Phone} />
                </figure>
                <h3>Download Music</h3>
                <p>Ablandit nunc. Pellentesque id eros venenatis, <br /> sollicitudin neque sodales, vehicula nibh. Nam <br /> massa odio, porttitor vitae efficitur non, ultric <br /> -ies volutpat tellus.</p>
            </section>

        </section>
    </section>
  )
}

export default How