import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { WindowsShortcut } from './Components/WindowsShortcut';
import { MacShortcut } from './Components/MacShortcut';
import { NoMatch } from './Components/NoMatch';
import { Navigation } from './Components/Navbar';
import {Footer} from './Components/Footer';
import "./Components/Static/Styles/style.scss";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/windows" element={<WindowsShortcut />} />
          <Route path="/mac" element={<MacShortcut />} />
          <Route element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
