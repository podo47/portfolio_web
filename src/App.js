import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import About from "./Pages/About";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/edu' exact element={<Education/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
