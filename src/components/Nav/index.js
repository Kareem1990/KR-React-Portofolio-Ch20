import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import resume from '/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/resume/Kareem Rizk - Resume.pdf';


function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;

  
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li>
            <a href = {resume} target= "_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
