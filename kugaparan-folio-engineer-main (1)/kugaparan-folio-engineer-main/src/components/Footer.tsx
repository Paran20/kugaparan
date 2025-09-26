import React from 'react';
import { Heart, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:skugaparan2@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/kugaparan",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/kugaparan",
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      href: "https://kugaparan.xyz",
      label: "Portfolio",
      color: "hover:text-accent"
    }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Kugaparan Suntharalingam
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Chemical & Process Engineering student at University of Moratuwa, passionate about process optimization, data analytics, and innovative engineering solutions. Always excited to take on new challenges and collaborate on meaningful projects.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-primary-foreground/10 rounded-lg transition-colors ${link.color} hover:bg-primary-foreground/20`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-primary-foreground/60 text-sm">Email:</p>
                <a
                  href="mailto:skugaparan2@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  skugaparan2@gmail.com
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm">University:</p>
                <a
                  href="mailto:kugaparans.22@uom.lk"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  kugaparans.22@uom.lk
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm">Location:</p>
                <p className="text-primary-foreground/80">Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span>© {currentYear} Kugaparan Suntharalingam. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for engineering excellence.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a
              href="https://kugaparan.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors flex items-center gap-1"
            >
              Portfolio Site
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;