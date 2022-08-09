import React from 'react';

import { skillData, toolData } from '../data/data.js'

const blurb = "Hi, I'm Ryan, a full-stack web developer and former US Army officer. I'm a tenacious problem solver with a passion for clean code, scalable functionality, and intuitive user experiences. Have a look around, check out some of my projects, or just shoot me a message.";

const Home = (props) => {
  return (
    <div className='home'>
      <div className='name'>
        <h1>Ryan</h1>
        <h1>Edwards</h1>
      </div>
      <div className='hero'><div className='hero-overlay'></div></div>
      <p className='blurb'>{blurb}</p>
      <div className="mouse">
        <span></span>
      </div>
      <div className='skills-tools-container'>
        <div className='skills-container'>
          <h2>SKILLS</h2>
          <div className='skills'>
            {skillData.map((skill, index) => {
              return (
                <div className='skill' key={index} style={{backgroundImage: `url(${skill.img})`}}>
                  <span>{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className='tools-container'>
          <h2>Tools</h2>
          <div className='tools'>
            {toolData.map((tool, index) => {
              return (
                <div className='tool' key={index} style={{backgroundImage: `url(${tool.img})`}}>
                  <span>{tool.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <footer>
        <p>© Ryan Edwards 2022</p>
        <p>Built with <i className="fa fa-heart" aria-hidden="true"></i> and React</p>
      </footer>
    </div>
  )
}

export default Home;