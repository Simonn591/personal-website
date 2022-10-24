import React from 'react';
import "./links.css";
import {mail_dark, linkedin_dark, git_dark, mail_light, linkedin_light, git_light} from "./imports";

const Links = () => {
  return (
    <div className='links-all' id='contact'>
      <div className='links-container'>
        <div className='links-mail'>
          <a href='mailto:simon.marchal2@gmail.com'>
            <img className='links-mail-dark' src={mail_dark} alt="mail"/>
            <img className='links-mail-light'src={mail_light} alt="mail"/>
          </a>
        </div>
        <div className='links-linkedin'>
          <a href='https://www.linkedin.com/in/%C5%A1imon-marchal-441690144' target='_blank' rel="noreferrer">
            <img className='links-linkedin-dark' src={linkedin_dark} alt="linkedin"/>
            <img className='links-linkedin-light' src={linkedin_light} alt="linkedin"/>
          </a>
        </div>
        <div className='links-git'>
          <a href='https://github.com/Simonn591' target='_blank' rel="noreferrer">
            <img className='links-git-dark' src={git_dark} alt="git"/>
            <img className='links-git-light' src={git_light} alt="git"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Links