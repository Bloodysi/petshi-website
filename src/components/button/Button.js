import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';

const TYPES = ['outline', 'fill'];
const COLORS = ['green', 'dark', 'white'];
const SIZES = ['sm', 'md', 'lg']

const Button = ({ children, type, color, size, link }) => {

  const checkType = TYPES.includes(type) ? type : TYPES[0]
  const checkColor = COLORS.includes(color) ? color : COLORS[0]
  const checkSize = SIZES.includes(size) ? size : SIZES[
    0]
  return(
    <Link to={link}>
      <button className={`btn ${checkType} ${checkColor} ${checkSize}`}>
        {children}
      </button>
    </Link>
  )
}

export default Button;
