import React from 'react';

const Home = (props) => {
  return (
    <div className='home'>
      <div className='name'>
        <h1>Ryan</h1>
        <h1>Edwards</h1>
      </div>
      <div className='hero'><div className='hero-overlay'></div></div>
      <p className='blurb'>“Hi, I'm Ryan, a former Army officer turned full-stack web developer. I'm a tenacious problem solver with a passion for clean code, scalable functionality, and intuitive user experiences. Have a look around, check out some of my projects, or just shoot me a message.”</p>
      <div className="mouse">
        <span></span>
      </div>
      <div className='skills-tools-container'>
        <div className='skills-container'>
          <h2>SKILLS</h2>
          <div className='skills'>
            <div className='skill' style={{backgroundImage: "url('/images/icon-javascript.png')"}}>
              <span>Javascript</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-html.png')"}}>
              <span>HTML</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-css.png')"}}>
              <span>CSS</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-jquery.gif')"}}>
              <span>jQuery</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-react.png')"}}>
              <span>React.js</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-node.svg')"}}>
              <span>Node.js</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-express.png')"}}>
              <span>Express</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-socket-io.svg')"}}>
              <span>socket.io</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-postgresql.png')"}}>
              <span>PostgreSQL</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-firebase.png')"}}>
              <span>Firebase</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-ruby.png')"}}>
              <span>Ruby</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-ruby-on-rails.png')"}}>
              <span>Rails</span>
            </div>
            <div className='skill' style={{backgroundImage: "url('/images/icon-git.png')"}}>
              <span>Git</span>
            </div>
          </div>
        </div>
        <div className='tools-container'>
          <h2>Tools</h2>
          <div className='tools'>
            <div className='tool' style={{backgroundImage: "url('/images/icon-github.png')"}}>
              <span>Github</span>
            </div>
            <div className='tool' style={{backgroundImage: "url('/images/icon-heroku.png')"}}>
              <span>Heroku</span>
            </div>
            <div className='tool' style={{backgroundImage: "url('/images/icon-postman.png')"}}>
              <span>Postman</span>
            </div>
            <div className='tool' style={{backgroundImage: "url('/images/icon-CLI.png')"}}>
              <span>CLI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;