import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Languages from './components/Languages';
import ResponsiveAppBar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
      <div className="App" id="Home">
        <ResponsiveAppBar/>
        <Hero/>
        <About/>
        <Skills/>
        <Languages/>
        <Projects/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
