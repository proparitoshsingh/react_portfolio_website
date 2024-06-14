import React, { useEffect, useRef } from 'react';
import image from '../../assets/profile.png';
import './style.css';
import Socials from './socials/Socials';

function About({ id }) {
    const roles = ["A Web Developer", "A Lifelong Student"];
    let i = 0;
    let timer;
    const typerRef = useRef(null);

    // useEffect(() => {
    //     typingEffect();
    //     return () => clearTimeout(timer); // Cleanup on unmount
    // }, []);

    function typingEffect() {
        let role = roles[i].split("");
        const looper = function () {
            if (role.length > 0) {
                typerRef.current.innerHTML += role.shift();
            } else {
                deletingEffect();
            };
            timer = setTimeout(looper, 500);
        };
        looper();
    };

    function deletingEffect() {
        let role = roles[i].split("");
        const loopDeleting = function () {
            if (role.length > 0) {
                role.pop();
                typerRef.current.innerHTML = role.join("");
            } else {
                if (roles.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            timer = setTimeout(loopDeleting, 200);
        };
        loopDeleting();
    };

    return (
        <div className='about-section' id={id}>
            <div className='profile'><img src={image} alt="Profile" /></div>
            <div>
                <h1>{"<"}Who<span style={{ color: '#fa3939' }}>AmI?/{">"}</span></h1>
                <h1>I am</h1>
            </div>
            <div className='typing-container'>
                <h1 style={{ fontSize: 40 }}>
                    <span className='typing-text' ref={typerRef}>A Developer.</span>
                    <span className='blink'>|</span>
                </h1>
            </div>
            <div>
                <h4>Hello to all 👋!
                    I'm Paritosh Singh, a Software Engineering undergrad at Vellore Institute of Technology. I'm  into writing programs for web development and blockchain as these are the fields I have immense expertise in. My contact is always open for collaboration and am actively looking forward to projects and programming opportunities in the market. Let's connect and embark on an exciting adventure through the vast universe of technology!
                </h4>
            </div>
            <div style={{ marginTop: '2%' }}>Find me on:</div>
            <div className='socials'>
                <Socials />
            </div>
        </div>
    );
}

export default About;
