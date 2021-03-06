import React, { Component } from 'react';

class Project extends Component {
  constructor() {
    super();

    this.state = {
      currentScreenshot: 0,
    }

    this.setScreenshot = this.setScreenshot.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.project.name !== nextProps.project.name) {
      this.setState({
        currentScreenshot: 0,
      })
    }
  }

  setScreenshot(direction) {
    this.setState((prevState) => {
      if (prevState.currentScreenshot === 0 && direction === -1) {
        return (
          {currentScreenshot: this.props.project.screenshots.length - 1}
        )
      } else if (prevState.currentScreenshot === this.props.project.screenshots.length - 1 && direction === 1) {
        return (
          {currentScreenshot: 0}
        )
      } else {
        return (
          {currentScreenshot: (prevState.currentScreenshot + direction)}
        )
      }
    })
  }

  renderTechnologies() {
    return this.props.project.technologies.map((tech, index) => {
      return (
        <p key={index}>{tech}</p>
      )
    })
  }

  render() {
    return (
      <div className='project'>
        <h1>{this.props.project.name}</h1>
        <div 
          className='screenshot-display' 
          style={{backgroundImage: `url(${this.props.project.screenshots[this.state.currentScreenshot]})`}}
          >
          <div className='prev-screenshot' onClick={() => this.setScreenshot(-1)}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div className='next-screenshot' onClick={() => this.setScreenshot(1)}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <div className='info'>
          <div className='info-left'>
            <div className='description'><p>{this.props.project.description}</p></div>
            <div className='links'>
              <a href={this.props.project.url} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={this.props.project.github} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
          <div className='info-right'>
            <div className='technologies'>{this.renderTechnologies()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;