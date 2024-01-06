import React from 'react'
import './Works.css'
import w1 from '../../assets/w1.jpg';
import w2 from '../../assets/w2.jpg';
import w3 from '../../assets/w3.jpg';
import w4 from '../../assets/w4.jpg';
import w5 from '../../assets/w5.jpg';
import w6 from '../../assets/w6.jpg';

const Works = () => {
  return (
    <div className='works-container'>
      <h1>My Recent Project</h1>
      <div className='works-list-container'>
            <div className='works-item'>
                <img src={w1} alt='work1'></img>
                <div className='Project-Name'>E-Commerce</div>
            </div>
            <div className='works-item'>
                <img src={w2} alt='work2'></img>
                <div className='Project-Name'>Netflix Clone</div>
            </div>
            <div className='works-item'>
                <img src={w3} alt='work3'></img>
                <div className='Project-Name'>Flight_Management_System</div>
            </div>
            <div className='works-item'>
                <img src={w4} alt='work4'></img>
                <div className='Project-Name'>Employee_Management_System</div>
            </div>
            <div className='works-item'>
                <img src={w5} alt='work5'></img>
                <div className='Project-Name'>E-Commerce</div>
            </div>
            <div className='works-item'>
                <img src={w6} alt='work6'></img>
                <div className='Project-Name'>Random-Quotes</div>
            </div>
      </div>
    </div>
  )
}

export default Works
