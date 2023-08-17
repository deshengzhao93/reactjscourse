import logo from './logo.svg';
import MainContent from './MainContent';
import NavigationBar from './NavigationBar';
import {Routes, Route} from "react-router-dom";
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
