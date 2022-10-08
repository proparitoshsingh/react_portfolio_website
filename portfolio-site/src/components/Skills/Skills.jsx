import React from 'react'
import './style.css'
import Tile from './Tile/Tile'
import reactLogo from '../../assets/react.svg'
import nextjs from '../../assets/nextjs.svg'
import github from '../../assets/github.svg'
import git from '../../assets/git.svg'
import linux from '../../assets/linux.svg'
import mongodb from '../../assets/mongodb.svg'
import nodejs from '../../assets/nodejs.svg'
import python from '../../assets/python.svg'
import express from '../../assets/express.svg'
import javascript from '../../assets/js.svg'
import tailwind from '../../assets/tailwind.svg'
import rust from '../../assets/rust.svg'
import vue from '../../assets/vue.svg'

function Skills() {
    return (
        <div className='skill'>
            <h1>{"<"}Skills<span style={{ color: '#fa3939' }}>&Tools/{">"}</span></h1>
            <div className='skills'>
                <Tile logo={reactLogo} name='React' />
                <Tile logo={nextjs} name='NextJS' />
                <Tile logo={rust} name='Rust' />
                <Tile logo={vue} name='VueJS' />
                <Tile logo={javascript} name='JS' />
                <Tile logo={git} name='Git' />
                <Tile logo={github} name='Github' />
                <Tile logo={nodejs} name='Node' />
                <Tile logo={express} name='Express' />
                <Tile logo={tailwind} name='Tailwind' />
                <Tile logo={mongodb} name='MongoDB' />
                <Tile logo={python} name='Python' />
                <Tile logo={linux} name='Linux' />
            </div>
        </div>
    )
}

export default Skills