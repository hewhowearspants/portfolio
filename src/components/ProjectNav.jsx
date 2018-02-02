import React, { Component } from 'react';

class ProjectNav extends Component {
  constructor() {
    super();

    this.state = {
      reachedTop: true,
      reachedBottom: false
    }
  }

  componentDidMount() {
    document.getElementsByClassName('project-nav-inner')[0].addEventListener('scroll', () => this.trackScrolling('Y'));
    document.getElementsByClassName('project-nav')[0].addEventListener('scroll', () => this.trackScrolling('X'));
  }

  reachedEnd(el, end) {
    switch(end) {
      case 'top':
        return el.getBoundingClientRect()[end] === document.getElementsByClassName('project-nav-inner')[0].getBoundingClientRect()[end];
      case 'bottom': 
        return el.getBoundingClientRect()[end] === document.getElementsByClassName('project-nav-inner')[0].getBoundingClientRect()[end];
      case 'left':
        return el.getBoundingClientRect()[end] === window.pageXOffset;
      case 'right':
        return el.getBoundingClientRect()[end] === window.innerWidth;
      default:
        return;
    }
  }

  trackScrolling = (direction) => {
    let firstProject = Object.values(this.props.projectData).pop().name;
    let lastProject = Object.values(this.props.projectData)[0].name;
    const topElement = document.getElementById(firstProject);
    const bottomElement = document.getElementById(lastProject);
    if ((this.reachedEnd(bottomElement, 'bottom') && direction === 'Y') || (this.reachedEnd(bottomElement, 'right') && direction === 'X')) {
      this.setState({
        reachedBottom: true
      })
    } else if (this.state.reachedBottom !== false) {
      this.setState({
        reachedBottom: false
      })
    }
    
    if ((this.reachedEnd(topElement, 'top') && direction === 'Y') || (this.reachedEnd(topElement, 'left') && direction === 'X')) {
      this.setState({
        reachedTop: true,
      })
    } else if (this.state.reachedTop !== false) {
      this.setState({
        reachedTop: false
      })
    }
  }

  renderProjects() {
    let projectList = [];
    let projectData = this.props.projectData;
    let projectIndex = 1;
    for (let project in projectData) {
      let { name, screenshots, thumbnailIndex } = projectData[project];
      projectList.unshift(
        <div className='project-link'
             id={name} 
             key={projectIndex}
             onClick={() => {
               this.props.setPage('project');
               this.props.setPopup(null);
               this.props.setProject(project);
             }}
             style={{
               backgroundImage: `url(${screenshots[thumbnailIndex]})`,
               marginBottom: projectIndex !== 1 ? '10px' : ''
             }}
             >
          <div className='project-link-overlay'>
            <p>{name}</p>
          </div>
        </div>
      )
      projectIndex++;
    }
    return projectList;
  }

  render() {
    return (
      <div className='project-nav'>
        {this.props.projectData ? this.renderProjects() : ''}
      </div>
    )
  }
}

export default ProjectNav;