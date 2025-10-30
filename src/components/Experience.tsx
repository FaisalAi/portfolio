import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Trimatric AI",
      location: "Dhaka, Bangladesh",
      period: "Mar 2024 - Present",
      current: true,
    },
    {
      title: "Sr. ML Engineer",
      company: "Bangladesh Agricultural University",
      location: "Research and Innovation Center (BAU-RIC), Mymensingh, Bangladesh",
      period: "Mar 2025 - Oct 2025",
    },
    {
      title: "AI Architect (AIA) Engineer I",
      company: "Bionica Aircraft (Remote)",
      location: "Linz, Austria",
      period: "Jan 2024 - Mar 2024",
    },
    {
      title: "Junior AI Developer",
      company: "Bionica Aircraft (Remote)",
      location: "Linz, Austria",
      period: "Jan 2022 - Dec 2023",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 reveal card-hover-effect relative bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {exp.current && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground animate-pulse-glow">
                    Current
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-lg text-primary mb-2">{exp.company}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
