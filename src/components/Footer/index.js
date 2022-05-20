import React from 'react';


function Nav(props) {

  return (
    <footer className="justify-content-between container flex-row px-1 alli">
      <h2>
        <div data-testid="link" href="/">
          <span role="img" aria-label="camera"> </span> kareem.magdy5@gmail.com
        </div>
      </h2>
      <div className="flex-row float-right">
        <ul className="flex-row float-right icon">
          <li className="mx-2 icon">
          <a className="icon" href="https://github.com/Kareem1990" target="_blank"><i className="bi bi-github "></i></a>
          </li>

          <li>
            <a className="icon" href="https://www.linkedin.com/in/kareem-rizk/" target="_blank"><i className="bi bi-linkedin fa-10x"></i></a>
          </li>
        </ul>
        </div>
    </footer>
  );
}

export default Nav;
