import React from 'react';
import { User, Target, Heart, Lightbulb } from 'lucide-react';
import kugaranPhoto from '@/assets/kugaparan-photo.png';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Process Optimization",
      description: "Passionate about improving industrial processes through thermodynamics and system analysis"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Analytical Thinking",
      description: "Strong foundation in data analysis, problem-solving, and technical innovation"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Leadership",
      description: "Experienced in team leadership, project management, and educational mentoring"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies, methodologies, and industry developments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={kugaranPhoto} 
                    alt="Kugaparan Suntharalingam - Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a motivated and detail-oriented undergraduate in <span className="font-semibold text-primary">Chemical & Process Engineering</span> at the University of Moratuwa, with strong foundations in thermodynamics, process systems, and data analysis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in applying technical knowledge, analytical skills, and problem-solving abilities to <span className="font-semibold text-accent">industrial process optimization</span> and engineering innovation. I combine theoretical understanding with practical implementation to create efficient, sustainable solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond engineering, I'm deeply interested in film, technology trends, and continuous learning. This diverse perspective helps me approach engineering challenges with creativity and fresh insights.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Strengths</h3>
                <div className="flex flex-wrap gap-3">
                  {['Thermodynamics', 'Process Systems', 'Data Analytics', 'Problem Solving', 'Python Programming', 'MATLAB'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="card-hover bg-card border border-border rounded-lg p-6 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;