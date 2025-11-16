"use client"; 
import { useState } from "react"; 
import { Inter } from "next/font/google";
import { Eye, ShieldCheck, Zap, Bot, Shield, Scan, Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: ["700", "900"] });

export default function Home() {
  // State to manage mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full min-h-screen overflow-hidden bg-dark">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        
        {/* ---  RESPONSIVE HEADER --- */}
        <header className="relative z-20 w-full px-6 py-5 md:px-12">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-light">VyomGarud</h1>
            
            {/* Desktop Navigation (hidden on mobile) */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-sm text-light/70 hover:text-light transition-colors">
                About
              </a>
              <a href="#capabilities" className="text-sm text-light/70 hover:text-light transition-colors">
                Capabilities
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-dark bg-primary rounded-md hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button (hidden on desktop) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-6 h-6 text-light" />
              </button>
            </div>
          </div>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark/95 backdrop-blur-lg md:hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6"
            >
              <X className="w-8 h-8 text-light" />
            </button>
            
            {/* Mobile Nav Links */}
            <nav className="flex flex-col items-center space-y-8">
              <a
                href="#about"
                className="text-2xl text-light/70 hover:text-light transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                About
              </a>
              <a
                href="#capabilities"
                className="text-2xl text-light/70 hover:text-light transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="mt-4 px-6 py-3 text-xl font-medium text-dark bg-primary rounded-md hover:bg-opacity-90 transition-all"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}

        {/* --- Hero Content --- */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
          <div className="max-w-4xl">
            <h3
              className={`${inter.className} text-lg font-bold uppercase tracking-widest text-primary`}
            >
              Precision Engineering. Advanced Autonomy.
            </h3>
            <h2 className="mt-4 text-5xl font-extrabold text-light md:text-7xl lg:text-8xl">
              Unmanned Aerial
              <br />
              Systems
            </h2>
            <p className="mt-8 text-lg max-w-2xl mx-auto text-light/80">
              Delivering military-grade UAVs for critical missions. High
              reliability and precision control for when it matters most.
            </p>
            <a
              href="#capabilities"
              className="inline-block px-8 py-3 mt-10 text-lg font-semibold text-dark bg-primary rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Explore Our Systems
            </a>
          </div>
        </div>
      </div>

      {/* --- ABOUT & HIGHLIGHTS SECTION --- */}
      <section id="about" className="w-full py-20 lg:py-32 bg-dark">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Our Mission
              </span>
              <h2 className="mt-4 text-4xl font-bold text-light md:text-5xl">
                Redefining Aerial Capability
              </h2>
              <p className="mt-6 text-lg text-light/70">
                VyomGarud is dedicated to engineering the most reliable and
                advanced unmanned aerial systems on the market. We build for
                high-stakes environments where failure is not an option.
              </p>
              <p className="mt-4 text-lg text-light/70">
                Our mission is to provide defense, security, and industrial
                partners with autonomous tools that enhance situational
                awareness and mission success.
              </p>
            </div>
            <div className="flex flex-col space-y-6 rounded-lg border border-light/10 p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-light mb-2">
                Core Features
              </h3>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-medium text-light">
                    Military-Grade Reliability
                  </h4>
                  <p className="text-light/70">
                    Built to withstand harsh environments and ensure mission
                    continuity.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-medium text-light">
                    Advanced Autonomy
                  </h4>
                  <p className="text-light/70">
                    AI-powered flight control and data processing for
                    independent operation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-medium text-light">
                    Rapid Deployment
                  </h4>
                  <p className="text-light/70">
                    Systems designed for quick setup and launch in under 5
                    minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION --- */}
      <section id="capabilities" className="w-full py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Our Fleet
            </span>
            <h2 className="mt-4 text-4xl font-bold text-light md:text-5xl">
              Systems & Capabilities
            </h2>
            <p className="mt-6 text-lg text-light/70">
              Versatile platforms engineered for a wide range of mission
              profiles, from tactical surveillance to heavy-payload logistics.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            {/* Card 1 */}
            <div className="flex flex-col rounded-lg border border-light/10 bg-dark p-8">
              <Bot className="w-12 h-12 text-primary" />
              <h3 className="mt-6 text-2xl font-semibold text-light">
                VG-Alpha
              </h3>
              <p className="mt-2 text-light/70">
                Tactical surveillance and reconnaissance UAV with advanced
                AI-powered object detection. 2-hour flight time.
              </p>
              <a
                href="#"
                className="mt-6 font-medium text-primary hover:text-primary/80"
              >
                Learn More &rarr;
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col rounded-lg border border-light/10 bg-dark p-8">
              <Shield className="w-12 h-12 text-primary" />
              <h3 className="mt-6 text-2xl font-semibold text-light">
                VG-Beta
              </h3>
              <p className="mt-2 text-light/70">
                Heavy-lift logistics drone. Designed for cargo and equipment
                transport in contested environments. 100kg payload.
              </p>
              <a
                href="#"
                className="mt-6 font-medium text-primary hover:text-primary/80"
              >
                Learn More &rarr;
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-lg border border-light/10 bg-dark p-8">
              <Scan className="w-12 h-12 text-primary" />
              <h3 className="mt-6 text-2xl font-semibold text-light">
                VG-Gamma
              </h3>
              <p className="mt-2 text-light/70">
                Long-endurance ISR platform. Multi-spectral imaging for
                persistent observation and data collection.
              </p>
              <a
                href="#"
                className="mt-6 font-medium text-primary hover:text-primary/80"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="w-full py-16 bg-dark border-t border-light/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-light">VyomGarud</h3>
            <p className="mt-2 text-light/70">
              Advanced Autonomy for Mission Success.
            </p>
            <p className="text-sm text-light/50 mt-4">
              &copy; {new Date().getFullYear()} VyomGarud. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mt-8 md:mt-0">
            <a href="#" className="text-light/70 hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-light/70 hover:text-primary transition-colors">
              Careers
            </a>
            <a
              href="#"
              className="px-5 py-2 text-sm font-medium text-dark bg-primary rounded-md hover:bg-opacity-90 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}