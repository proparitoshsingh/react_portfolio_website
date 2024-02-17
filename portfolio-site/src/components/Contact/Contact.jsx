import React from 'react'
import './style.css'

function Contact({id}) {
    return (
        <div className='contact' id={id}>
            <h1>{"<"}Contact<span style={{ color: '#fa3939' }}>Me/{">"}</span></h1>
            <div className='contacts'>
                <div className='contact-container'>
                    <form action="https://formspree.io/f/xzbnblaz" method="POST">
                        <input type="text" alt='Name' placeholder='Your Name' name='name'/>
                        <input type="text" alt='Email' placeholder='Email' name='email'/>
                        <textarea name='message' id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact