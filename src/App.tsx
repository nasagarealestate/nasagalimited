import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyGallery } from './components/PropertyGallery';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <Hero />
        <PropertyGallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}