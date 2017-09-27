import React from 'react';

const ContactInfo = (props) => {
  return (
    <div className='contact-info'>
      <p>903 372 0114</p>
      <p>ryan.deland.edwards@gmail.com</p>
      <div className='links'>
        <a href='mailto:ryan.deland.edwards@gmail.com'><i className="fa fa-envelope" aria-hidden="true"></i></a>
        <a href='https://github.com/hewhowearspants'><i className="fa fa-github-square" aria-hidden="true"></i></a>
        <a href='https://www.linkedin.com/in/ryan-deland-edwards/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      </div>
    </div>
  )
}

export default ContactInfo;