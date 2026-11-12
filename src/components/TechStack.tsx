const TechStack = () => {
  const technologies = [
    
    { name: "Python", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "C#", category: "Language" },
    { name: "Flutter", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Postman", category: "Framework" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Git", category: "Tools" },
    { name: "Linux", category: "Tools" },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="code-highlight mb-4 inline-block">{'<TechStack />'}</code>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group glass-card p-4 text-center hover-lift hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {getEmojiForTech(tech.name)}
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["REST APIs", "CI/CD", "Kubernetes", "TypeScript", "Figma", "Agile"].map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const getEmojiForTech = (name: string): string => {
  const emojiMap: Record<string, string> = {
    "React": "⚛️",
    "Flutter": "💙",
    "Node.js": "💚",
    "Python": "🐍",
    "PostgreSQL": "🐘",
    "Docker": "🐳",
    "AWS": "☁️",
    "GraphQL": "◼️",
    "Next.js": "▲",
    "Tailwind": "🎨",
    "Git": "📂",
    "Redis": "🔴",
    "Java": "♨️",
    "C#": "C#",
    "Postman": "🟠",
    "MongoDB": "🍃",
    "Linux": "🐧",
  };
  return emojiMap[name] || "💻";
};

export default TechStack;
