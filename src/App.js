import './App.css';
import Hero from './components/Hero';
import ResponsiveAppBar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
    </div>
  );
}

export default App;
