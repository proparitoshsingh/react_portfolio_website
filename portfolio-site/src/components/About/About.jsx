import {React , useEffect} from 'react'
import image from '../../assets/profile.png'
import './style.css'
import Socials from './socials/Socials';

function About({id}) {
    var roles = ["A Web Developer", "A Blockchain Developer", "A DeFi Enthusiast", "A Lifelong Student"];
    var i = 0;
    var timer;
    let typer=document.getElementsByClassName('typing-text')[0];
    // useEffect(() => {
    //     typingEffect();
    // }, []);
    function typingEffect() {
        let role = roles[i].split("");
        var looper = function () {
            if (role.length > 0) {
                typer.innerHTML += role.shift();
            } else {
                deletingEffect();
            };
            timer = setTimeout(looper, 500);
        };
        looper();
    };

    function deletingEffect() {
        let role = roles[i].split("");
        var loopDeleting = function () {
            if (role.length > 0) {
                role.pop();
                typer.innerHTML = role.join("");
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
            <div className='profile'><img src={image} /></div>
            <div>
                <h1>{"<"}Who<span style={{ color: '#fa3939' }}>AmI?/{">"}</span></h1>
                <h1>I am</h1>
            </div>
            <div className='typing-container'>
                    <h1 style={{fontSize:40}}><span className='typing-text'>A Developer.</span><span className='blink'>|</span></h1>
                </div>
            <div>
                <h4>Hey there! 👋 I'm Paritosh Singh, a passionate Software Engineering undergrad at Vellore Institute of Technology. 💻 I am a programming enthusiast and my specialties are blockchain and web development🌌.👯 Always open for collaborations on projects and actively looking for new opportunities. Let's connect and embark on an exciting adventure through the vast universe of technology! 🚀</h4>
            </div>
            <div style={{marginTop:'2%'}}>Find me on:</div>
            <div className='socials'>
                <Socials/>            
            </div>

        </div>
    )
}

export default About