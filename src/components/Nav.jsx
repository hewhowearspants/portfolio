import React, { Component } from 'react';

import ContactInfo from './ContactInfo';
import ProjectNav from './ProjectNav';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      currentPopup: null,
    }

    this.setPopup = this.setPopup.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  setPopup(popup) {
    if (popup !== this.state.currentPopup) {
      this.setState({
        currentPopup: popup,
      })
    } else {
      this.setState({
        currentPopup: null,
      })
    }
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    } else {
      this.setPopup(null);
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
  }
  
  render() {
    const { currentPopup } = this.state;
    const { projectData } = this.props;

    return (
      <nav ref={node => { this.node = node; }}>
        <ul>
          <li onClick={() => {this.props.setPage('home'); this.setPopup(null)}}>Home</li>
          <li className={currentPopup === 'projects' ? 'selected' : ''} 
            onClick={() => {
              this.setPopup('projects');
              document.addEventListener('click', this.handleOutsideClick, false);
            }}>Projects</li>
          <li className={currentPopup === 'contact' ? 'selected' : ''} 
            onClick={() => {
              this.setPopup('contact');
              document.addEventListener('click', this.handleOutsideClick, false);
            }}>Contact</li>
        </ul>
        { currentPopup &&
          <div className={`popup ${!currentPopup && 'hidden'}`}>
            {currentPopup === 'contact' && <ContactInfo />}
            {currentPopup === 'projects' && 
              <ProjectNav 
                setPage={this.props.setPage} 
                setPopup={this.setPopup} 
                setProject={this.props.setProject} 
                projectData={projectData} 
              />}
          </div>
        }
      </nav>
    )
  }
}

export default Nav;