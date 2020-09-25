import React from 'react'
import Section from '../../components/section-component/Section'
import { section1, section2, section3 } from './Data';
import './Home.css';
import Button from '../../components/button/Button';

const Home = () => {
  return (
    <div>
      <Section {...section1} />
      <Section {...section2} />
      <Section {...section3} />
      <div className='donate__section'>
        <div className='done__section-container'>
          <h1>DONATE</h1>
          <h3>Make of this world a better place to live</h3>
          <p>If you want to help our environment or you would like to help kids in needs this is your oportunity we recolete around $80,000 to help kids on street and for make groups of people to clean the beach, street and Valleys</p>
          <Button color='dark' size='lg' link='/donate'>Let's Donate</Button>
          <img src='images/svg6.svg' alt='hero' />
        </div>
      </div>
    </div>
  )
}

export default Home;
