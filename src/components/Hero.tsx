import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/Faisal_Ahmed.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-fade-in space-y-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img
              src={profileImage}
              alt="Faisal Ahmed - AI Engineer"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">FAISAL AHMED</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
            AI ENGINEER
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems with Computer Vision, LLMs, and Agentic AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group text-lg px-8 py-6"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
