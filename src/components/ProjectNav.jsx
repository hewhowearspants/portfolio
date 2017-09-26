import React, { Component } from 'react';

class ProjectNav extends Component {
  renderProjects() {
    let projectList = [];
    let projectData = this.props.projectData;
    let projectIndex = 1;
    for (let project in projectData) {
      projectList.push(
        <div className='project-link' 
             key={projectIndex}
             onClick={() => {
               this.props.setPage('project');
               this.props.setPopup(null);
               this.props.setProject(project);
             }}
             style={{backgroundImage: `url(${projectData[project].screenshots[0]})`}}
             >
          <div className='project-link-overlay'>
            <p>{projectData[project].name}</p>
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