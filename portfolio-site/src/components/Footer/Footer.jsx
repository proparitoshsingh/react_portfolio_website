import React from 'react'
import './style.css'
import Logo from '../../assets/logohacksmith.jpg'
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <img src={Logo} alt="" />
      <p>©{currentYear}. Made with ❤️ by Paritosh Singh.</p>
      <p>Thank you for your visit!</p>
    </div>
  )
}

export default Footer