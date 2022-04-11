import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from "./components/Projects";



function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        setContactSelected={setContactSelected}
      ></Nav>
      <Projects></Projects>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;