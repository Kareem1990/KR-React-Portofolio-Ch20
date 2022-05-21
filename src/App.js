import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from "./components/Projects";
import Footer from "./components/Footer"




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
              <Footer></Footer>

      </main>
    </div>
  );
}

export default App;