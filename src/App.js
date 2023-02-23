import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavbarComp />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
