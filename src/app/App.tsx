import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Spectacle } from './components/Spectacle';
import { Technical } from './components/Technical';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Header />
      <main>
        <Hero />
        <About />
        <Spectacle />
        <Technical />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
