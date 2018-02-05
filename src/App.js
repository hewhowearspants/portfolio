import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Project from './components/Project';

import { projectData } from './data/data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'home',
      currentProject: null,
    }

    this.setPage = this.setPage.bind(this);
    this.setProject = this.setProject.bind(this);
  }

  setPage(page) {
    this.setState({
      currentPage: page,
    })
  }

  setProject(project) {
    this.setState({
      currentProject: projectData[project],
    })
  }

  render() {
    const { currentPage, currentProject } = this.state;

    return (
      <div className="App">
        <main>
          {currentPage === 'home' && <Home />}
          {currentPage === 'project' && <Project project={currentProject} />}
        </main>
        <Nav 
          setPage={this.setPage} 
          setProject={this.setProject} 
          projectData={projectData} 
        />
      </div>
    );
  }
}

export default App;
