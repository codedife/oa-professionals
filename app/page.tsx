
import Navbar from "../app/component/navbar";
import Hero from "../app/body/hero";
import Services from "../app/body/Services";
import About from "../app/body/about";
import WhyChooseUs from "../app/body/WhyChooseUs";
import Contact from "../app/body/contact";
import Footer from "../app/component/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
