import React from 'react';

const ContactInfo = (props) => {
  return (
    <div className='contact-info'>
      <p>903 372 0114</p>
      <p>ryan.deland.edwards@gmail.com</p>
      <div className='links'>
        <a href='http://ryan-deland-edwards.bitballoon.com/Ryan%20Edwards%20Resume%20-%20Web%20Dev%202018.pdf' title='Resume' alt='Resume' target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt"></i></a>
        <a href='mailto:ryan.deland.edwards@gmail.com' title='Email' alt='Email'><i className="fas fa-envelope"></i></a>
        <a href='https://github.com/hewhowearspants' title='Github' alt='Github' target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
        <a href='https://www.linkedin.com/in/ryan-deland-edwards/' title='LinkedIn' alt='LinkedIn' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default ContactInfo;