import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++", "Java"],
    },
    {
      category: "ML & Data Science",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    },
    {
      category: "Deep Learning Frameworks",
      skills: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Hugging Face"],
    },
    {
      category: "LLM & Agentic AI",
      skills: ["Ollama", "LangChain", "CrewAI", "N8N", "OpenAI API"],
    },
    {
      category: "Databases",
      skills: ["SQL", "SQLite", "Pinecone", "ChromaDB"],
    },
    {
      category: "Cloud Tools",
      skills: ["AWS", "Azure", "Heroku"],
    },
    {
      category: "API & Deployment",
      skills: ["FastAPI", "Flask", "Docker", "Streamlit", "Django"],
    },
    {
      category: "Video Processing",
      skills: ["GStreamer", "FFmpeg", "RTSP Stream Handling"],
    },
    {
      category: "Desktop Development",
      skills: ["PySide6", "PyQt5", "PyQt6"],
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "Jira", "Trello"],
    },
    {
      category: "Robotics & Embedded",
      skills: ["Arduino", "ESP32", "MIT App Inventor", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          Skills & Technologies
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 reveal card-hover-effect bg-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-lg font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm px-3 py-1 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
