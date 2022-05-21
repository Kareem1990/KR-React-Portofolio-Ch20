import React from 'react';
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
          <span id="kareem"role="img" aria-label="camera"> </span> Kareem Rizk
        </a>
      </h2>
      <nav className="navbar-nav">
        <ul className="mx-4 d-flex flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a href="#mail">Contact</a>
          </li>
          <li>
            <a href = {resume} >Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
