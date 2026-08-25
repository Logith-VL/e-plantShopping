import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="landing-page">
        <div className="landing-overlay">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <h2>Bring Nature Into Your Home</h2>

            <p>
              Discover beautiful houseplants that transform your home into a
              peaceful and refreshing space.
            </p>

            <Link to="/plants" className="get-started-button">
              Get Started
            </Link>
          </div>

          <AboutUs />
        </div>
      </div>
    </>
  );
}

function Plants() {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}

function Cart() {
  return (
    <>
      <Navbar />
      <CartItem />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
