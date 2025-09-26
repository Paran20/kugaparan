import React, { useState } from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Education = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const educationData = [
    {
      id: 1,
      institution: "University of Moratuwa",
      degree: "B.Eng. in Chemical & Process Engineering",
      duration: "Mar 2023 – Apr 2027",
      location: "Sri Lanka",
      status: "Current",
      details: [
        "Strong foundations in thermodynamics and process systems",
        "Focus on industrial process optimization",
        "Data analysis and problem-solving methodologies",
        "Active member of Tamil Literary Association"
      ],
      color: "primary"
    },
    {
      id: 2,
      institution: "J/Chavakachcheri Hindu College",
      degree: "G.C.E. Advanced Level (Physical Sciences)",
      duration: "2021",
      location: "Sri Lanka",
      achievement: "Z-score: 2.1550",
      details: [
        "Physical Sciences stream specialization",
        "Strong performance in mathematics and sciences",
        "Leadership roles: Prefect position",
        "Active in Tamil Literary Association and Chess Club"
      ],
      color: "accent"
    },
    {
      id: 3,
      institution: "J/Chavakachcheri Hindu College",
      degree: "G.C.E. Ordinary Level",
      duration: "2018",
      location: "Sri Lanka",
      achievement: "8 A's, B in English Literature",
      details: [
        "Excellent academic performance across subjects",
        "Strong foundation in sciences and mathematics",
        "Early demonstration of analytical abilities",
        "Active participation in extracurricular activities"
      ],
      color: "engineering"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Education Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey in chemical engineering and the foundations that shaped my expertise
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setActiveItem(item.id)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transform md:-translate-x-2 ${
                    item.color === 'primary' ? 'bg-primary' :
                    item.color === 'accent' ? 'bg-accent' : 'bg-engineering-blue'
                  } ${activeItem === item.id ? 'scale-125' : ''} transition-transform duration-300`} />

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`card-hover bg-card border border-border rounded-xl p-6 group cursor-pointer ${
                      activeItem === item.id ? 'scale-105 shadow-2xl' : ''
                    } transition-all duration-300`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <GraduationCap className={`w-6 h-6 ${
                            item.color === 'primary' ? 'text-primary' :
                            item.color === 'accent' ? 'text-accent' : 'text-engineering-blue'
                          }`} />
                          <div>
                            <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                              {item.institution}
                            </h3>
                            {item.status && (
                              <span className="inline-block px-2 py-1 bg-success/10 text-success text-xs rounded-full mt-1">
                                {item.status}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {item.degree}
                      </h4>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                        {item.achievement && (
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {item.achievement}
                          </div>
                        )}
                      </div>

                      {/* Expandable details */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeItem === item.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-4 border-t border-border">
                          <ul className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                  item.color === 'primary' ? 'bg-primary' :
                                  item.color === 'accent' ? 'bg-accent' : 'bg-engineering-blue'
                                }`} />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;