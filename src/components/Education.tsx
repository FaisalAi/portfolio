import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      specialization: "Major in Data Science",
      institution: "United International University",
      period: "2019 - 2023",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science",
      institution: "Dhaka City College",
      period: "2012 - 2014",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      specialization: "Science",
      institution: "Government Laboratory High School",
      period: "2002 - 2012",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 reveal card-hover-effect bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  {edu.specialization && (
                    <p className="text-sm text-accent mb-2">
                      {edu.specialization}
                    </p>
                  )}
                  <p className="text-lg text-foreground mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
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

export default Education;
