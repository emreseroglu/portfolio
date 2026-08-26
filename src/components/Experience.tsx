import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Information Technology Intern",
      company: "Provincial Directorate of Agriculture and Forestry",
      location: "Diyarbakır, Turkey",
      period: "Jul 2026 – Aug 2026",
      description: "Configured and deployed end-user workstations by executing OS installations and integrating systems into the corporate domain. Delivered rapid IT support for a ~1,500-employee organization, minimizing downtime by diagnosing and repairing hardware faults, printers, and network connectivity issues.",
      technologies: ["OS Deployment", "Domain Integration", "Hardware Troubleshooting", "Network Troubleshooting"]
    },
    {
      title: "Automotive Tuning Trainee",
      company: "Ecumasters Düzce",
      location: "Düzce, Turkey",
      period: "Oct 2024 – Dec 2024",
      description: "Gained practical experience in automotive tuning and performance optimization. Worked with ECU systems and learned industry-standard tuning practices.",
      technologies: ["ECU Tuning", "Automotive Systems", "Performance Optimization"]
    },
    {
      title: "Computer Engineering Intern",
      company: "Öztaş Metal Solutions",
      location: "Manisa, Turkey",
      period: "Aug 2024 – Sep 2024",
      description: "Redeveloped an internal R&D project, boosting performance by 30% and efficiency by 20%. Gained hands-on experience in embedded systems, XAMPP, SQL databases, and network troubleshooting.",
      technologies: ["Embedded Systems", "XAMPP", "SQL", "Network Troubleshooting"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="code-highlight mb-4 inline-block">{'<Experience />'}</code>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the roles I've held
          </p>
        </div>

        {/* Experience timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group glass-card p-4 sm:p-6 md:p-8 hover-lift hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-foreground text-sm md:text-base">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

