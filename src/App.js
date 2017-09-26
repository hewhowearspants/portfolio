import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';

const projectData = {
  blackjack: {
    name: 'Blackjack',
    screenshots: [
      '/images/Blackjack-Screenshot-1.png',
      '/images/Blackjack-Screenshot-2.png',
      '/images/Blackjack-Screenshot-3.png'
    ],
    description: "Blackjack is a web browser game where players can bet, win, and lose it all.",
    technologies: ['jQuery', 'HTML', 'CSS'],
    github: 'https://github.com/hewhowearspants/Project-01-Blackjack',
  },
  theReadingList: {
    name: 'The Reading List',
    screenshots: [
      '/images/Reading-List-Screenshot-1.png',
      '/images/Reading-List-Screenshot-2.png'
    ],
    description: "The Reading List is a full stack web app designed to keep track of a user's books they'd like to read and books they have read.",
    technologies: ['Express.js', 'Node.js', 'POSTGRESQL', 'Socket.io', 'CSS-Flexbox'],
    github: 'https://github.com/hewhowearspants/Project-02-The-Reading-List',
  },
  grandmaster: {
    name: 'Grandmaster.io',
    screenshots: [
      '/images/Grandmaster-Screenshot-1.png',
      '/images/Grandmaster-Screenshot-2.png',
      '/images/Grandmaster-Screenshot-3.png'
    ],
    description: "Grandmaster.io is a combat card game similar to games like Blizzard's Hearthstone, meant to be played online between 2 players.",
    technologies: ['React.js', 'Express.js', 'Node.js', 'Socket.io', 'POSTGRESQL', 'Firebase', 'CSS-Flexbox'],
    github: 'https://github.com/hewhowearspants/Project-03-Card-Battle',
  },
  readWrite: {
    name: 'Read/Write',
    screenshots: [
      '/images/ReadWrite-Screenshot-1.png',
      '/images/ReadWrite-Screenshot-2.png',
      '/images/ReadWrite-Screenshot-3.png',
      '/images/ReadWrite-Screenshot-4.png'
    ],
    description: "Read/Write is a revamping of The Reading List using React/Rails. In addition to maintaining a reading list, users can now create their own writing projects using a text editor and character/location tracker.",
    technologies: ['React.js', 'Ruby on Rails', 'Quill.js', 'CSS-Flexbox'],
    github: 'https://github.com/hewhowearspants/read-write',
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      projectData: projectData,
      currentPage: 'home',
    }
  }

  render() {
    return (
      <div className="App">
        <Home />

      </div>
    );
  }
}

export default App;
