import React, { useEffect, useRef } from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = particle.style.height = Math.random() * 6 + 2 + 'px';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = Math.random() * 6 + 6 + 's';

      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 12000);
    };

    const interval = setInterval(createParticle, 300);
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      
      {/* Particles */}
      <div ref={particlesRef} className="particles" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="fade-in-up animate">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Kugaparan
            <br />
            <span className="text-accent">Suntharalingam</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
            Chemical & Process Engineering Student
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Data Analytics Enthusiast | Problem Solver | Process Optimization Expert
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <span className="text-white/90 text-sm">
              📧 skugaparan2@gmail.com
            </span>
            <span className="hidden sm:block text-white/60">|</span>
            <a 
              href="https://linkedin.com/in/kugaparan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 hover:text-accent transition-colors text-sm flex items-center gap-1"
            >
              LinkedIn: linkedin.com/in/kugaparan
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-hero inline-flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;