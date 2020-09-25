import React from 'react'
import './Section.css';

import Button from '../button/Button';

const Section = ({
  start,
  lightBg,
  lightText,
  heading,
  subHeading,
  description,
  img,
  alt,
  btn,
  btnText,
  link
}) => {
  return(
    <section className={`${lightBg ? 'section' : 'section darkBg'}`}>
      <div className={!start ? 'section__container' : 'section__container reverse'}>
        <div className={!start ? 'section__container-content' : 'section__container-content reverse'}>
          <h1>{heading}</h1>
          <h3>{subHeading}</h3>
          <p className={!start ? '' : 'reverse'}>{description} </p>
          {btn
          ?
            <div className='section-btn'>
              <Button type='fill' size='lg' link={link}>{btnText}</Button>
            </div>
          : null
          }
        </div>
        <div className='section__container-image'>
          <img src={img} alt={alt} />
        </div>
      </div>
    </section>
  )
}

export default Section;
