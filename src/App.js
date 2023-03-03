import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/navbar";
import Footer from "./components/footer";
import Subscribe from "./pages/subscribe"; // import the Subscribe component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavbarComp />
          <Routes>
            <Route path="/subscribe" element={<Subscribe />} /> // add a new route for the Subscribe component
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
