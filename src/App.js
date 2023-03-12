import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/navbar";
import Footer from "./components/footer";
import Subscribe from "./pages/subscribe"; // import the Subscribe component

import Courses from './pages/courses';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Register from './pages/register';
import PublicEvents from './pages/publicEvents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavbarComp />
          <Routes>
            <Route path="/subscribe" element={<Subscribe />} /> 
            <Route element={<About></About>} path="/about" />
                        <Route element={<Home></Home>} path="/home" />
                        <Route element={<Contact></Contact>} path="/contact" />
                        <Route element={<Courses></Courses>} path="/courses" />
                        <Route element={<Register></Register>} path="/register" />
                        <Route element={<PublicEvents></PublicEvents>} path="/publicEvents" />
                        <Route element={<Home></Home>} path="/" />

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
