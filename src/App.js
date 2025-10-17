import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-with-navbar">
        {/* your sections with matching IDs */}
        <section id="home"><Home/></section>
        <section id="experience"><About/></section>
        <section id="achievements"><Contact/></section>
        <section id="projects"><Home/></section>
        <section id="publications"><About/></section>
        <section id="posts"><Contact/></section>
        <section id="contact"><Contact/></section>
      </main>
    </>
  );
}

export default App;
