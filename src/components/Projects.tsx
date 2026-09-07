import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "ChatGPD",
      description: "ChatGPD is an AI-powered chat application built with Streamlit that uses Google Gemini models and real-time web search. It can research topics online and provide up-to-date answers through an interactive chat interface.",
      tags: ["Python", "Streamlit", "Google Gemini", "Real-time Web Search"],
      github: "https://github.com/emreseroglu/ChatGPD",
      // demo: "#", // TODO: Add demo link when available
      featured: true
    },
    {
      title: "Chat-With-PDF",
      description: "Built a RAG-based application using Google Gemini and LangChain to enable interactive, natural language queries on PDF documents. Implemented an in-memory FAISS vector store to deliver instant, accurate responses with source citations.",
      tags: ["Python", "Streamlit", "LangChain", "RAG"],
      github: "https://github.com/emreseroglu/Chat-With-PDF",
      // demo: "#", // TODO: Add demo link when available
      featured: true
    },
    {
      title: "TourismWebsite",
      description: "Developed a user-friendly tourism platform that allows travelers to seamlessy explore destinations and manage bookings. Designed a responsive interface with a focus on intuitive UI/UX to ensure an engaging experience across all devices.",
      tags: ["C#", "ASP.NET", "Bootstrap", "MVCArchitecture"],
      github: "https://github.com/emreseroglu/TourismWebsite",
      // demo: "#", // TODO: Add demo link when available
      featured: true
    },
    {
      title: "Digit-Recognitions",
      description: "Built a machine learning model designed to accurately recognize and classify handwritten digits using computer vision techniques. Trained and optimized the algorithm on the MNIST dataset to achieve high accuracy in image processing and pattern recognition tasks.",
      tags: ["Python", "TensorFlow", "Keras", "Computer Vision"],
      github: "https://github.com/emreseroglu/Digit-Recognitions",
      featured: false
    },
    {
      title: "GYMManagement",
      description: "GYMManagement is a gym database management system built with C# and MSSQL that helps administrators handle member, trainer, class, and equipment information efficiently. It provides a user-friendly interface with essential functionality like login, payments, and detailed views of gym operations.",
      tags: ["C#", "MSSQL", "CRUD-Application"],
      github: "https://github.com/emreseroglu/GYMManagement",
      featured: false
    },
    {
      title: "Agirlik_Sensoru",
      description: "This project demonstrates a weight sensor system built using an HX711 module and a load cell. The setup includes an Arduino interface and a Nextion LCD display for real-time weight measurement and calibration controls.",
      tags: ["Arduino", "HX711", "Nextion LCD"],
      github: "https://github.com/emreseroglu/Agirlik_Sensoru",
      // demo: "#", // TODO: Add demo link when available
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="code-highlight mb-4 inline-block">{'<Projects />'}</code>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built and contributed to
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group glass-card p-4 md:p-6 hover-lift flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {/* TODO: Uncomment when demo links are available
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  */}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group glass-card p-5 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {/* TODO: Uncomment when demo links are available
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    */}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground">
                      {tag}
                      {project.tags.indexOf(tag) < project.tags.length - 1 && " · "}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="https://github.com/emreseroglu?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
