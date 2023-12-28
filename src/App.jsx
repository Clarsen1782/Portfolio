
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Projects from './components/projects';

function App() {
 

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
