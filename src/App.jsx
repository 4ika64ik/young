import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Services from './pages/Services/Services.jsx';
import Projects from './pages/Projects/Projects.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='pt-32 md:pt-40 '>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
