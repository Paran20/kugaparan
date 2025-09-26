import React from 'react';
import { Mail, MapPin, ExternalLink, Linkedin, Github, CheckCircle } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "skugaparan2@gmail.com",
      href: "mailto:skugaparan2@gmail.com"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "University Email",
      value: "kugaparans.22@uom.lk",
      href: "mailto:kugaparans.22@uom.lk"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Sri Lanka",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kugaparan",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/kugaparan",
      color: "hover:text-gray-900"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Portfolio Website",
      href: "https://kugaparan.xyz",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborations, or answer any questions about my work in chemical engineering and process optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Google Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Send me a message
              </h3>
              
              <div className="w-full h-[600px] rounded-lg overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScnkT2lJkvXdO1mdOm7CNG2Vbxd-5InJqKku04cgHlxKxi1Mw/viewform?embedded=true"
                  className="w-full h-full border-0"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Connect With Me
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group ${link.color}`}
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.href.replace('https://', '')}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Professional Statement */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Let's Collaborate
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about applying engineering principles to solve real-world problems. Whether you're looking for collaboration on process optimization projects, data analysis solutions, or technical consulting, I'm here to help bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;