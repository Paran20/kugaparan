import React from 'react';
import { Briefcase, Users, Award, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Video Editor",
      company: "Freelancer (Fiverr)",
      type: "Remote",
      duration: "2022 – 2023",
      location: "Remote",
      description: "Specialized in creating engaging video content and visual designs for diverse clients across multiple industries.",
      achievements: [
        "Designed and edited short ads and YouTube content using Canva",
        "Created visually appealing templates and graphics tailored to client needs",
        "Managed client requirements and delivered projects on time",
        "Built strong client relationships through effective communication"
      ],
      skills: ["Canva", "Video Editing", "Graphic Design", "Client Management", "Creative Design"],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Volunteer Tutor",
      company: "J/Chavakachcheri Hindu College",
      type: "Volunteer",
      duration: "Oct 2023 – Nov 2023",
      location: "Sri Lanka",
      description: "Provided academic support to Advanced Level students in mathematics and chemistry, helping them achieve better understanding and performance.",
      achievements: [
        "Conducted tutoring sessions for Combined Mathematics and Chemistry",
        "Helped students improve their problem-solving skills",
        "Developed personalized learning approaches for different students",
        "Contributed to community education development"
      ],
      skills: ["Teaching", "Mathematics", "Chemistry", "Mentoring", "Communication"],
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Member",
      company: "Tamil Literary Association, University of Moratuwa",
      type: "Leadership",
      duration: "2023 – Present",
      location: "Sri Lanka",
      description: "Active member contributing to educational initiatives and community development programs.",
      achievements: [
        "Organized and conducted model exams for Physical and Biological Science students",
        "Participated in educational program development",
        "Collaborated with team members on various community initiatives",
        "Supported academic excellence programs"
      ],
      skills: ["Event Organization", "Team Collaboration", "Educational Planning", "Leadership"],
      icon: <Award className="w-5 h-5" />
    }
  ];

  const leadership = [
    {
      role: "Prefect",
      organization: "J/Chavakachcheri Hindu College",
      description: "School leadership position demonstrating responsibility and leadership skills"
    },
    {
      role: "Member",
      organization: "Tamil Literary Association",
      description: "Cultural and literary organization participation"
    },
    {
      role: "Member",
      organization: "Chess Club",
      description: "Strategic thinking and competitive mindset development"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Experience & Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional experience, volunteer work, and leadership roles that have shaped my career
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="card-hover bg-card border border-border rounded-xl p-8 group">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left side - Main info */}
                  <div className="lg:w-2/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-primary mt-1 group-hover:text-accent transition-colors">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Remote' ? 'bg-accent/10 text-accent border border-accent/20' :
                            exp.type === 'Volunteer' ? 'bg-success/10 text-success border border-success/20' :
                            'bg-primary/10 text-primary border border-primary/20'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-primary mb-3">
                          {exp.company}
                        </h4>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-6">
                          <h5 className="font-semibold text-card-foreground mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Skills */}
                  <div className="lg:w-1/3">
                    <h5 className="font-semibold text-card-foreground mb-3">Skills Developed:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership & Memberships */}
          <div>
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Leadership & Memberships
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {leadership.map((item, index) => (
                <div key={index} className="card-hover bg-card border border-border rounded-xl p-6 text-center group">
                  <div className="text-primary group-hover:text-accent transition-colors mb-4 flex justify-center">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.role}
                  </h4>
                  <h5 className="font-semibold text-accent mb-3">
                    {item.organization}
                  </h5>
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

export default Experience;