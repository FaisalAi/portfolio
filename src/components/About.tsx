import { Code2, Cpu, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "4+ Years Experience",
      description: "Python, ML/DL frameworks",
    },
    {
      icon: Cpu,
      title: "Computer Vision Expert",
      description: "Real-time AI systems",
    },
    {
      icon: Workflow,
      title: "Agentic AI",
      description: "LLMs & automation",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center card-hover-effect reveal bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 reveal bg-card">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am an AI Engineer with over 4 years of experience in Python
              programming, computer vision, and applied AI/ML. I specialize in
              building and deploying real-time intelligent systems using
              frameworks like PyTorch, TensorFlow, and OpenCV, with a focus on
              automation, safety, and data-driven analytics. Beyond computer
              vision, I integrate Large Language Models (LLMs) and Agentic AI
              frameworks—including Ollama, LangChain, CrewAI, and N8N—to design
              autonomous workflow automation and enterprise-level AI assistants.
              I also develop FastAPI and Docker-based microservices for scalable
              deployment in both local and cloud environments. My goal is to
              build production-ready AI systems that deliver measurable business
              impact and accelerate digital transformation through intelligent
              automation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
