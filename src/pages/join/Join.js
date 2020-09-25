import React from 'react';
import './Join.css';
import Button from '../../components/button/Button'

const Join = () => {
  return (
    <div className='join'>
      <div className='join__container'>        
        <div className='join__container-content'>
          <div className='join__form'>
            <form>
              <h1>Be Part Of Us</h1>
              <input type='text' placeholder='FullName' />
              <input type='text' placeholder='Email' />
              <Button size='md'>Join</Button>
            </form>
          </div>
          <div className='join__image'>
            <img src='images/svg5.svg' alt='join' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join;
