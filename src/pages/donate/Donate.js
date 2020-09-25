import React from 'react'
import { section2 } from './Data';
import Section from '../../components/section-component/Section';
import './Donate.css';

const Donate = () => {
  return (
    <div>
      <div className='donate__container'>
        <h1>Choose where donate.</h1>
        <div className='donate__cards'>
          <div className='donate__card'>
            
          </div>
          <div className='donate__card'>
            
          </div>
          <div className='donate__card'>
            
          </div>
        </div>
      </div>
      <Section {...section2}/>
    </div>
  )
}

export default Donate;
