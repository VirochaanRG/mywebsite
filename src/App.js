import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import ResponsiveAppBar from './components/Navbar';
import Skills from './components/Skills';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
