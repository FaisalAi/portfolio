import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          Publications
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="reveal card-hover-effect bg-card">
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">
                    An AI-IoT Framework for Handwritten and Multilingual
                    Prescription Interpretation with Timely Medication Reminder
                    Support
                  </h3>
                  <p className="text-sm text-muted-foreground font-normal">
                    2025 IEEE 49th Annual Computers, Software, and Applications
                    Conference (COMPSAC)
                  </p>
                  <p className="text-sm text-muted-foreground font-normal">
                    July 2025
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <a
                  href="https://doi.org/10.1109/COMPSAC65507.2025.00268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View Publication
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
