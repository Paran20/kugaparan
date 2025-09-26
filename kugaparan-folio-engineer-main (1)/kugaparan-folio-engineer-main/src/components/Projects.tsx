import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X, Calendar, Wrench, Users } from 'lucide-react';
import heatExchangerImg from '@/assets/project-heat-exchanger.jpg';
import packedColumnImg from '@/assets/project-packed-column.jpg';
import rankineCycleImg from '@/assets/project-rankine-cycle.jpg';
import acetoneProductionImg from '@/assets/project-acetone-production.jpg';
import storageTankImg from '@/assets/project-storage-tank.jpg';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: string;
  technologies: string[];
  duration: string;
  team?: string;
  outcomes: string[];
  challenges: string[];
  links?: {
    website?: string;
    github?: string;
  };
  status: 'Completed' | 'Ongoing' | 'In Progress';
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Heat Exchanger Design",
      shortDescription: "Shell-and-tube heat exchanger design for vacuum residue cooling using water",
      fullDescription: "Comprehensive design project focusing on thermal analysis and optimization of shell-and-tube heat exchangers. Involved detailed heat duty calculations, thermal design optimization, and performance analysis for industrial cooling applications.",
      image: heatExchangerImg,
      category: "Process Design",
      technologies: ["MATLAB", "Heat Transfer", "Thermodynamics", "Process Simulation"],
      duration: "3 months",
      team: "Individual Project",
      outcomes: [
        "Optimized heat exchanger design with 95% thermal efficiency",
        "Reduced cooling requirements by 15% through design optimization",
        "Comprehensive technical documentation and performance analysis"
      ],
      challenges: [
        "Complex thermal analysis calculations",
        "Optimization of tube bundle configuration",
        "Meeting industrial safety standards"
      ],
      status: "Completed"
    },
    {
      id: 2,
      title: "Packed Column Design",
      shortDescription: "Benzene-toluene separation column design with comprehensive process analysis",
      fullDescription: "Design and optimization of a packed distillation column for benzene-toluene separation. Project included column diameter estimation, packing height calculations, pressure drop analysis, and flow distribution optimization.",
      image: packedColumnImg,
      category: "Separation Processes",
      technologies: ["Aspen Plus", "Mass Transfer", "Fluid Mechanics", "Process Design"],
      duration: "4 months",
      team: "Individual Project",
      outcomes: [
        "Achieved 98.5% separation efficiency",
        "Optimized packing configuration for minimal pressure drop",
        "Cost-effective design with reduced energy consumption"
      ],
      challenges: [
        "Complex mass transfer calculations",
        "Packing selection and optimization",
        "Flow distribution design"
      ],
      status: "Completed"
    },
    {
      id: 3,
      title: "Regenerative Rankine Cycle Power Plotter",
      shortDescription: "Python-based cycle simulator for power system efficiency analysis",
      fullDescription: "Developed a comprehensive Python-based simulator for regenerative Rankine cycle analysis. Created an interactive web platform for efficiency calculations, thermodynamic property analysis, and cycle optimization.",
      image: rankineCycleImg,
      category: "Software Development",
      technologies: ["Python", "NumPy", "Matplotlib", "Web Development", "Thermodynamics"],
      duration: "2 months",
      team: "Individual Project",
      outcomes: [
        "Interactive web platform at kugaparan.xyz",
        "Real-time efficiency plotting and analysis",
        "Educational resource for thermodynamics students"
      ],
      challenges: [
        "Complex thermodynamic calculations implementation",
        "User-friendly interface design",
        "Web deployment and optimization"
      ],
      links: {
        website: "https://kugaparan.xyz"
      },
      status: "Completed"
    },
    {
      id: 4,
      title: "Acetone Production Process Design",
      shortDescription: "Comprehensive feasibility and design study for acetone production facility",
      fullDescription: "Complete process design study covering feasibility analysis, techno-economic evaluation, process flow development, material and energy balances, and environmental health & safety considerations.",
      image: acetoneProductionImg,
      category: "Process Engineering",
      technologies: ["Process Design", "Economic Analysis", "Material Balance", "Energy Balance", "EHS"],
      duration: "6 months",
      team: "Team of 4",
      outcomes: [
        "Complete process flow diagram and design specifications",
        "Techno-economic feasibility report",
        "Environmental impact assessment",
        "Comprehensive material and energy balance"
      ],
      challenges: [
        "Complex multi-step process optimization",
        "Economic viability analysis",
        "Environmental compliance requirements"
      ],
      status: "Completed"
    },
    {
      id: 5,
      title: "Process Equipment Design",
      shortDescription: "Molasses storage tank design applying mechanical and process principles",
      fullDescription: "Ongoing team project focusing on the design of industrial molasses storage tanks. Application of mechanical design principles, process requirements, and safety standards for food-grade storage systems.",
      image: storageTankImg,
      category: "Mechanical Design",
      technologies: ["Mechanical Design", "Process Safety", "Material Selection", "Structural Analysis"],
      duration: "4 months",
      team: "Team of 3",
      outcomes: [
        "Preliminary design specifications completed",
        "Material selection and compatibility analysis",
        "Safety system integration planning"
      ],
      challenges: [
        "Food-grade material requirements",
        "Structural integrity under various loads",
        "Process integration considerations"
      ],
      status: "Ongoing"
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success/10 text-success border-success/20';
      case 'Ongoing': return 'bg-accent/10 text-accent border-accent/20';
      case 'In Progress': return 'bg-warning/10 text-warning border-warning/20';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineering solutions and innovations in chemical processes, software development, and system design
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card-hover bg-card border border-border rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-white">
                      <Eye size={16} />
                      <span className="text-sm font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-card-foreground mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {selectedProject.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {selectedProject.team}
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <Wrench size={20} />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.links && (
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.links.website && (
                        <a
                          href={selectedProject.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
                        >
                          <ExternalLink size={16} />
                          Visit Website
                        </a>
                      )}
                      {selectedProject.links.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
                        >
                          <Github size={16} />
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Key Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Challenges Overcome
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;