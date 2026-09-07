import { Github, Linkedin, Mail, MapPin, Send, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="code-highlight mb-4 inline-block">{'<Contact />'}</code>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </div>

        {/* Contact card */}
        <div className="glass-card p-6 sm:p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-5 w-5 text-primary" />
            <span>İzmir, Türkiye</span>
          </div>

          {/* Email CTA */}
          <a
            href="mailto:emre2135samet@gmail.com"
            className="group inline-flex items-center gap-2 md:gap-3 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-8 hover:text-primary transition-colors break-all px-2"
          >
            <Mail className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0" />
            <span className="break-all">emre2135samet@gmail.com</span>
            <Send className="h-4 w-4 md:h-5 md:w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
          </a>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <a href="mailto:emre2135samet@gmail.com">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary mb-12">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/emreseroglu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/emre-eroglu1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/emres.eroglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
