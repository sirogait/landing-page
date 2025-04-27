
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Specialties from "../components/Specialties";
import Map from "../components/Map";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Map />
      <Footer />
    </div>
  );
};

export default Index;
