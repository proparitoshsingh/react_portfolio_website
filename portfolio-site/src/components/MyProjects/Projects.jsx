import React from 'react'
import './style.css'
import Card from './Card/Card'
import codeboard from '../../assets/codeboards.png'
import covid from '../../assets/covid.png'
import mentalaid from '../../assets/mentalaid.png'

function Projects() {
  const data = [
    {
      title: 'Code Board',
      description: 'CodeBoard is a website solely designed for Teachers and Students, to make learning fun and easy.I have designed the code collab page in such a way that its convenient for teachers as well as students to learn and ask their doubts. ',
      githubLink: 'https://github.com/proparitoshsingh/code_bode',
      demolink: 'https://educate-hack-23.onrender.com/',
    },
    {
      title: 'Covid-19 Tracker',
      description: 'This is a covid tracker website that keep track of all the active cases , recovered and death count of all the countries in real-time.It also has a feature of showing the available vaccine slots in your area which you can search with your pincode.',
      githubLink: 'https://github.com/proparitoshsingh/covid-19-tracker',
      demolink: 'https://proparitoshsingh.github.io/covid-19-tracker/',
    },
    {
      title: 'Mental Aid',
      description: 'MentalAid is a web application designed to provide remote therapy sessions for individuals seeking mental health support. The app incorporates advanced features like video recording and facial expression analysis to offer personalized care.',
      githubLink: 'https://github.com/proparitoshsingh/MentalAid',
      demolink: 'https://github.com/proparitoshsingh/MentalAid',
    },
  ];
  return (
    <div className='proj'>
      <h1>{"<"}My<span style={{ color: '#fa3939' }}>Projects/{">"}</span></h1>
      <div className='card'>
        <Card img={codeboard} title={data[0].title} descrip={data[0].description} githubLink={data[0].githubLink} demoLink={data[0].demolink} />
        <Card img={covid} title={data[1].title} descrip={data[1].description} githubLink={data[1].githubLink} demoLink={data[1].demolink} />
        <Card img={mentalaid} title={data[2].title} descrip={data[2].description} githubLink={data[2].githubLink} demoLink={data[2].demolink} />
      </div>
    </div>
  )
}

export default Projects