import React from 'react'
import Section from '../../components/section-component/Section';
import { section2, section1, section3 } from './Data';

const KnowUs = () => {
  return (
    <div>
      <Section {...section3}/>
      <Section {...section1}/>
      <Section {...section2}/>
    </div>
  )
}

export default KnowUs;
