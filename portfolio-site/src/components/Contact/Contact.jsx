import React from 'react'
import './style.css'

function Contact() {
    return (
        <div className='contact'>
            <h1>{"<"}Contact<span style={{ color: '#fa3939' }}>Me/{">"}</span></h1>
            <div className='contacts'>
                <div className='contact-container'>
                    <form action="">
                        <input type="text" alt='Name' placeholder='Your Name' />
                        <input type="text" alt='Email' placeholder='Email' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact