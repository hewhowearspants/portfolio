import React, { Component } from 'react';

import ContactInfo from './ContactInfo';
import ProjectNav from './ProjectNav';

class PopUp extends Component {
  render() {
    return (
      <div className={`popup ${!this.props.currentPopup ? 'hidden' : ''}`}>
        {this.props.currentPopup === 'contact' ? <ContactInfo /> : ''}
        {this.props.currentPopup === 'projects' ? <ProjectNav setPage={this.props.setPage} setPopup={this.props.setPopup} setProject={this.props.setProject} projectData={this.props.projectData} /> : ''}
      </div>
    )
  }
}

export default PopUp;