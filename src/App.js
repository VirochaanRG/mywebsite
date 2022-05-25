import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Languages from './components/Languages';
import ResponsiveAppBar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Languages/>
      <Projects/>
    </div>
  );
}

export default App;
