import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './Pages/AboutUs';
import { HashRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header />
      <NavBar/>
      <AboutUs/>
    {/* <Routes>
      <Route element={<Testimonials/>} path='/testimonials'/>
      <Route element={<Contactus/>} path='/contact-us'/>
    </Routes> */}
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
