import { useState } from "react";
import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import RecycleSection from "./sections/RecycleSection";
import RepairSection from "./sections/RepairSection";
import WhyUs from "./sections/WhyUs";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="recycle"><RecycleSection /></section>
        <section id="repair"><RepairSection /></section>
        <section id="why-us"><WhyUs /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
