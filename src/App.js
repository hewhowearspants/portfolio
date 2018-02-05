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
    return (
      <div className="App">
        <main>
          {this.state.currentPage === 'home' ? <Home /> : ''}
          {this.state.currentPage === 'project' ? <Project project={this.state.currentProject} /> : ''}
        </main>
        <Nav setPage={this.setPage} setProject={this.setProject} projectData={this.state.projectData} />
      </div>
    );
  }
}

export default App;
