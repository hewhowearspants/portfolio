import React, { Component } from 'react';

import ContactInfo from './ContactInfo';
import ProjectNav from './ProjectNav';

class PopUp extends Component {
  render() {
    const { currentPopup } = this.props;

    return (
      <div className={`popup ${!currentPopup && 'hidden'}`}>
        {currentPopup === 'contact' && <ContactInfo />}
        {currentPopup === 'projects' && 
          <ProjectNav 
            setPage={this.props.setPage} 
            setPopup={this.props.setPopup} 
            setProject={this.props.setProject} 
            projectData={this.props.projectData} 
          />}
      </div>
    )
  }
}

export default PopUp;