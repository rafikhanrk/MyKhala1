import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <div className="h-screen flex justify-center items-center bg-gray-100">Welcome to MyKhala</div>;
}

function Services() {
  return <div className="h-screen flex justify-center items-center bg-gray-100">Our Services</div>;
}

function Browse() {
  return <div className="h-screen flex justify-center items-center bg-gray-100">Browse Talent</div>;
}

function Submit() {
  return <div className="h-screen flex justify-center items-center bg-gray-100">Submit Form</div>;
}

function Contact() {
  return <div className="h-screen flex justify-center items-center bg-gray-100">Contact Us</div>;
}

function Login() {
  return <div className="h-screen flex justify-center items-center bg-gray-100">Login Page</div>;
}

function App() {
  return (
    <Router>
      <nav className="p-4 bg-white shadow flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/submit">Form</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;