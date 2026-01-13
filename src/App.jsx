import React, { useState, useEffect } from 'react';
// import { Camera } from 'lucide-react';

export default function HurtmanWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval); 
  }, []);

  const products = [ 
    { id: 1, name: 'Hurt Archive Tee', price: '₦25,000', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop' },
    { id: 2, name: 'Resilience Hoodie', price: '₦45,000', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop' },
    { id: 3, name: 'Purple Pain Cargo', price: '₦38,000', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop' },
    { id: 4, name: 'Survivor Jacket', price: '₦65,000', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop' },
  ];

  const heroSlides = [
    { text: 'WE MAY BE HURT', subtext: 'BUT FUCK IT WE BALL' },
    { text: 'SCARRED', subtext: 'NOT BROKEN' },
    { text: 'UNDERGROUND', subtext: 'LUXURY' }
  ]; 

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-white">HURTMAN</span>
            <span className="text-purple-500"> FITS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="hover:text-purple-400 transition-colors">SHOP</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">ABOUT</a>
            <a href="#drops" className="hover:text-purple-400 transition-colors">DROPS</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">CONTACT</a>
          </div>

          <div className="flex items-center space-x-4">
            <svg className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-lg absolute w-full top-full left-0 py-8 px-6 border-t border-purple-900/30">
            <div className="flex flex-col space-y-6 text-xl">
              <a href="#shop" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition-colors">SHOP</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition-colors">ABOUT</a>
              <a href="#drops" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition-colors">DROPS</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */} 
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea1f1c0b?w=1920&h=1080&fit=crop)',
            filter: 'brightness(0.4) contrast(1.1)'
          }}
        ></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <div className="overflow-hidden h-32 mb-9">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
                style={{ display: currentSlide === index ? 'block' : 'none' }}
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">{slide.text}</h1>
                <p className="text-2xl md:text-4xl text-purple-400 font-light tracking-wider mb-8">{slide.subtext}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Underground Lagos streetwear for those who move through pain with confidence
          </p>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center mx-auto group">
            SHOP THE DROP
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-purple-500 w-8' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">THE HURTMAN MENTALITY</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            We don't hide from struggle. We wear it. Every scar tells a story. Every piece represents resilience forged in Lagos streets, nightlife, and underground culture.
          </p>
          <p className="text-lg text-gray-400">
            This isn't fashion. This is survival luxury. Limited. Exclusive. Unbreakable.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="shop" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">LATEST DROP</h2>
            <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center group">
              VIEW ALL
              <svg className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-900 mb-4 aspect-[3/4]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-white text-black py-3 font-semibold hover:bg-purple-500 hover:text-white transition-colors">
                      ADD TO BAG
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-purple-400 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 bg-purple-950/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">BUILT FROM THE UNDERGROUND</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Rooted in Lagos street culture, music, and nightlife. Every collection is a statement. Every drop is limited. We don't chase trends—we set them.
            </p>
            <p className="text-gray-400 mb-8">
              For the youth who refuse to be defined by their pain. For those who keep showing up, no matter what.
            </p>
            <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 font-semibold transition-all duration-300">
              OUR STORY
            </button>
          </div>
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop"
              alt="Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */} 
      <section className="py-20 px-6 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">JOIN THE MOVEMENT</h2>
          <p className="text-gray-400 mb-8">Get early access to drops, exclusive content, and the culture.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-900 border border-gray-800 px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 font-semibold transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HURTMAN FITS</h3>
              <p className="text-gray-400 text-sm">Underground Lagos streetwear. Limited drops. Unbreakable mentality.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SHOP</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">New Arrivals</a></li>
                <li><a href="#" className="hover:text-purple-400">Collections</a></li>
                <li><a href="#" className="hover:text-purple-400">Archive</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">INFO</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Shipping</a></li>
                <li><a href="#" className="hover:text-purple-400">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">CONNECT</h4>
              <div className="flex space-x-4">
                <svg className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <svg className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 HURTMAN FITS. WE MAY HURT BUT FUCK IT WE BALL.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}