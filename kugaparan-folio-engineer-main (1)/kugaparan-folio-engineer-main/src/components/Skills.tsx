import React, { useEffect, useRef } from 'react';
import { Code, Database, Settings, BarChart3, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const radarRef = useRef<HTMLCanvasElement>(null);

  const skillCategories = [
    {
      title: "Engineering Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "MATLAB", level: 90 },
        { name: "Aspen Plus", level: 70 },
        { name: "Excel Advanced", level: 95 },
        { name: "Process Simulation", level: 85 }
      ]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 70 },
        { name: "GitHub", level: 80 }
      ]
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "R Programming", level: 70 }
      ]
    },
    {
      title: "Process Knowledge",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Thermodynamics", level: 90 },
        { name: "Heat Transfer", level: 85 },
        { name: "Fluid Mechanics", level: 82 },
        { name: "Separation Processes", level: 88 }
      ]
    }
  ];

  const radarData = [
    { label: "Process Design", value: 90 },
    { label: "Data Analytics", value: 82 },
    { label: "Programming", level: 78 },
    { label: "Engineering Tools", value: 88 },
    { label: "Problem Solving", value: 92 },
    { label: "Project Management", value: 80 }
  ];

  useEffect(() => {
    const canvas = radarRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 60;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background grid
    ctx.strokeStyle = 'hsl(220, 13%, 91%)';
    ctx.lineWidth = 1;

    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw axes
    const angleStep = (2 * Math.PI) / radarData.length;
    
    for (let i = 0; i < radarData.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    ctx.fillStyle = 'hsla(220, 91%, 33%, 0.2)';
    ctx.strokeStyle = 'hsl(220, 91%, 33%)';
    ctx.lineWidth = 2;

    for (let i = 0; i < radarData.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const value = radarData[i].value / 100;
      const x = centerX + Math.cos(angle) * radius * value;
      const y = centerY + Math.sin(angle) * radius * value;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw data points
    ctx.fillStyle = 'hsl(24, 95%, 53%)';
    for (let i = 0; i < radarData.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const value = radarData[i].value / 100;
      const x = centerX + Math.cos(angle) * radius * value;
      const y = centerY + Math.sin(angle) * radius * value;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Draw labels
    ctx.fillStyle = 'hsl(220, 13%, 13%)';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < radarData.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const labelRadius = radius + 30;
      const x = centerX + Math.cos(angle) * labelRadius;
      const y = centerY + Math.sin(angle) * labelRadius;
      
      ctx.fillText(radarData[i].label, x, y);
    }
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise in engineering tools, programming, and process analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Skills Radar Chart */}
            <div className="bg-card border border-border rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
                Skills Proficiency Overview
              </h3>
              <div className="flex justify-center">
                <canvas
                  ref={radarRef}
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            {/* Detailed Skills */}
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-muted-foreground font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-primary font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="skill-bar h-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Additional Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Brain className="w-6 h-6" />, title: "Problem Solving", description: "Analytical thinking and creative solution development" },
                { icon: <Database className="w-6 h-6" />, title: "Data Management", description: "NumPy, Pandas, data visualization and analysis" },
                { icon: <Settings className="w-6 h-6" />, title: "Process Optimization", description: "Energy systems, separation processes, thermodynamics" }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center card-hover group">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;