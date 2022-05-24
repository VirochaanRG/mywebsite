import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import ResponsiveAppBar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
