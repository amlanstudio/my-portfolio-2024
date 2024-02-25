import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './NotFound';
import PresentationPage from './PresentationPage';
import Realisations from './Realisations';
import RealisationsPage from "./RealisationsPage";
import ContactPage from "./ContactPage";


function App() {
//mon portoflio
  //dynamic variable : string, int, array okay but no use boolean or object
  const title='Bienvenue sur mon Portfolio !';
  const likes=50;
  const link="http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PresentationPage" element={<PresentationPage />} />
            <Route path="/RealisationsPage" element={<RealisationsPage />} />
            <Route path="/Realisations" element={<Realisations />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </div>      
    </Router>
  );
}

export default App; //export to use it elsewhere
