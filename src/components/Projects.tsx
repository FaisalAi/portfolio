import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Realtime Bangladeshi Vehicle Type Detection with Number Plate Recognition",
      description:
        "AI-powered system for real-time vehicle type identification and number plate recognition for industry applications.",
      link: "https://tinyurl.com/bddvat8t",
      tags: ["Computer Vision", "Real-time Detection", "PyTorch"],
    },
    {
      title: "Realtime Employee Attendance Using CCTV Camera",
      description:
        "Automated attendance system tracking employee presence using CCTV feeds, reducing errors with real-time local deployment.",
      link: "https://github.com/FaisalAi/Realtime-Employee-Attendance-Using-CCTV-Camera-",
      github: true,
      tags: ["Facial Recognition", "OpenCV", "FastAPI"],
    },
    {
      title: "Realtime Visitor Management System",
      description:
        "Automated visitor management with facial recognition and real-time logging for enhanced security and efficiency.",
      tags: ["Face Detection", "Real-time Logging", "Security"],
    },
    {
      title: "Face Detection System with FastAPI Deployment",
      description:
        "Face detection system with deep learning models deployed as an API using FastAPI for local and cloud scalability.",
      tags: ["FastAPI", "Deep Learning", "API Development"],
    },
    {
      title: "Realtime Fire and Smoke Detection for Pre-Fire Stage",
      description:
        "Real-time fire and smoke detection with AI segmentation from video feeds for early-stage alerts and safety enhancement.",
      link: "https://github.com/FaisalAi/Realtime-Fire-and-Smoke-Detection-for-Pre-Fire-Stage",
      github: true,
      tags: ["Computer Vision", "Safety Systems", "RTSP Streaming"],
    },
    {
      title: "Realtime Driver Drowsiness Detection",
      description:
        "AI-based real-time driver drowsiness detection system providing instant alerts to prevent fatigue-related accidents.",
      tags: ["Computer Vision", "Safety", "Real-time Processing"],
    },
    {
      title: "Autonomous HR Support System",
      description:
        "Agentic AI HR assistant using Ollama, LangChain, CrewAI, and N8N for automated query resolution and leave management.",
      tags: ["LLM", "Agentic AI", "Workflow Automation"],
    },
    {
      title: "AI-Driven Applicant Tracking System (ATS)",
      description:
        "Smart ATS with local LLM inference and multi-agent collaboration for resume parsing, candidate ranking, and interview scheduling.",
      link: "https://github.com/FaisalAi/ATS",
      github: true,
      tags: ["LLM", "Multi-Agent", "Recruitment Automation"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover-effect reveal group overflow-hidden bg-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-2">
                  <span className="text-lg">{project.title}</span>
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.github ? (
                          <Github className="h-4 w-4" />
                        ) : (
                          <ExternalLink className="h-4 w-4" />
                        )}
                      </a>
                    </Button>
                  )}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
