import React from 'react';
import { Award, ExternalLink, Calendar, User } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Power BI for Data Analysts",
      issuer: "Microsoft Press",
      platform: "LinkedIn Learning",
      category: "Data Analytics",
      description: "Comprehensive training in Power BI for data visualization, dashboard creation, and business intelligence reporting.",
      skills: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboard Design"],
      verified: true,
      color: "primary"
    },
    {
      id: 2,
      title: "MATLAB Essential Training",
      issuer: "LinkedIn Learning",
      platform: "LinkedIn Learning",
      category: "Engineering Tools",
      description: "Essential MATLAB programming skills for engineering applications, mathematical computing, and data analysis.",
      skills: ["MATLAB", "Mathematical Computing", "Engineering Applications", "Data Analysis"],
      verified: true,
      color: "accent"
    },
    {
      id: 3,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford Online",
      platform: "Coursera",
      category: "Machine Learning",
      description: "Comprehensive course covering machine learning fundamentals including regression and classification algorithms.",
      skills: ["Machine Learning", "Regression", "Classification", "Python", "Algorithms"],
      verified: true,
      color: "engineering"
    },
    {
      id: 4,
      title: "Fundamentals of Visualization with Tableau",
      issuer: "UC Davis",
      platform: "Coursera",
      category: "Data Visualization",
      description: "Professional data visualization techniques using Tableau for creating impactful dashboards and reports.",
      skills: ["Tableau", "Data Visualization", "Dashboard Creation", "Analytics"],
      verified: true,
      color: "primary"
    },
    {
      id: 5,
      title: "Python for Beginners",
      issuer: "University of Moratuwa Online Learning",
      platform: "University of Moratuwa",
      category: "Programming",
      verificationCode: "nUFSvDSV5U",
      description: "Foundational Python programming skills for beginners including syntax, data structures, and basic algorithms.",
      skills: ["Python", "Programming Fundamentals", "Data Structures", "Algorithms"],
      verified: true,
      color: "accent"
    },
    {
      id: 6,
      title: "Programming with JavaScript",
      issuer: "Meta",
      platform: "Coursera",
      category: "Web Development",
      description: "JavaScript programming fundamentals for web development including ES6+ features and modern development practices.",
      skills: ["JavaScript", "Web Development", "ES6+", "Programming"],
      verified: true,
      color: "engineering"
    },
    {
      id: 7,
      title: "Six Sigma White Belt",
      issuer: "Six Sigma Certification",
      platform: "Professional Certification",
      category: "Process Improvement",
      description: "Introduction to Six Sigma methodology for process improvement and quality management in engineering applications.",
      skills: ["Six Sigma", "Process Improvement", "Quality Management", "DMAIC"],
      verified: true,
      color: "primary"
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Data Analytics": "bg-primary/10 text-primary border-primary/20",
      "Engineering Tools": "bg-accent/10 text-accent border-accent/20",
      "Machine Learning": "bg-engineering-blue/10 text-engineering-blue border-engineering-blue/20",
      "Data Visualization": "bg-success/10 text-success border-success/20",
      "Programming": "bg-warning/10 text-warning border-warning/20",
      "Web Development": "bg-destructive/10 text-destructive border-destructive/20",
      "Process Improvement": "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20"
    };
    return colors[category as keyof typeof colors] || colors["Data Analytics"];
  };

  const getCardAccent = (color: string) => {
    switch (color) {
      case 'primary': return 'border-l-primary';
      case 'accent': return 'border-l-accent';
      case 'engineering': return 'border-l-engineering-blue';
      default: return 'border-l-primary';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Certifications & Training
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and continuous learning achievements that enhance my technical expertise
            </p>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category) => (
              <div key={category} className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {certifications.filter(cert => cert.category === category).length}
                </div>
                <div className="text-sm text-muted-foreground">
                  {category}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className={`card-hover bg-card border border-border rounded-xl overflow-hidden group ${getCardAccent(cert.color)} border-l-4`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{cert.issuer}</span>
                    </div>
                    <div className="text-sm font-medium text-accent">
                      {cert.platform}
                    </div>
                    {cert.verificationCode && (
                      <div className="text-xs text-muted-foreground">
                        Verification: {cert.verificationCode}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-card-foreground text-sm mb-2">
                        Skills Acquired:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {cert.verified && (
                      <div className="flex items-center gap-2 text-success text-sm">
                        <div className="w-2 h-2 bg-success rounded-full" />
                        <span className="font-medium">Verified Certificate</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continuous Learning Note */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in staying current with industry trends and emerging technologies. These certifications represent my dedication to professional development and my commitment to delivering cutting-edge solutions in chemical engineering, data analytics, and process optimization.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">{certifications.length} Completed Certifications</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Always Learning New Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;