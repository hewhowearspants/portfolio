import React, { Component } from 'react';

import PopUp from './PopUp';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      currentPopup: null,
    }

    this.setPopup = this.setPopup.bind(this);
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
  
  render() {
    const { currentPopup } = this.state;
    const { projectData } = this.props;

    return (
      <nav>
        <ul>
          <li onClick={() => {this.props.setPage('home'); this.setPopup(null)}}>Home</li>
          <li className={currentPopup === 'projects' && 'selected'} onClick={() => this.setPopup('projects')}>Projects</li>
          <li className={currentPopup === 'contact' && 'selected'} onClick={() => this.setPopup('contact')}>Contact</li>
        </ul>
        <PopUp 
          setPage={this.props.setPage}
          setPopup={this.setPopup}
          setProject={this.props.setProject}
          currentPopup={this.state.currentPopup} 
          projectData={projectData} 
        />
      </nav>
    )
  }
}

export default Nav;