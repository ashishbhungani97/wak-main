import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Home from './Component/Home';
import Balance from './Component/Balance';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balance" element={<Balance />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
