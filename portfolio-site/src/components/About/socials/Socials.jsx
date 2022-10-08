import React from 'react'
import linkedin from '../../../assets/linkedin-svgrepo-com.svg'
import instagram from '../../../assets/instagram-1-svgrepo-com.svg'
import twitter from '../../../assets/twitter-color-svgrepo-com.svg'
import github from '../../../assets/github-142-svgrepo-com.svg'
import './style.css'

function Socials() {
  return (
    <div className='social'>
        <button><a href="https://github.com/proparitoshsingh/" target='_blank'><img src={github}  alt="github" srcset=""/></a></button>
        <button><a href="https://www.linkedin.com/in/proparitoshsingh/" target='_blank'><img src={linkedin} alt="linkedin" srcset=""/></a></button>
        <button><a href="https://www.instagram.com/proparitoshsingh/" target='_blank'><img src={instagram} alt="instagram" srcset=""/></a></button>
        <button><a href="https://twitter.com/proparitosh1609" target='_blank'><img src={twitter} alt="twitter" srcset=""/></a></button>
    </div>
  )
}

export default Socials