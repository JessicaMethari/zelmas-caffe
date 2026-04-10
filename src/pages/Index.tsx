import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MenuSection from "../components/MenuSection"; 
import Gallery from "../components/Gallery"; 
import Contact from "../components/Contact"; 
import Footer from "../components/Footer"; 
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
