import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Users, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-secondary" />,
      title: "Prime Location",
      description: "Located at the serene Kerala Backwaters with easy access to multiple waterways and scenic routes."
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Flexible Hours",
      description: "Discover the beauty of Kerala Backwaters on a refreshing 3-hour journey, mornings and evenings."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "All Skill Levels",
      description: "Whether you're a beginner or expert, we have the perfect kayak and guidance for your adventure."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Safety First",
      description: "All rentals include safety equipment, basic instruction, and emergency support."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Paddlex Adventures?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about providing unforgettable water adventures. Our premium kayaks and expert guidance ensure you have the perfect day on the water.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-none shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Our Story
              </h3>
              <p className="text-muted-foreground mb-4">
                Founded to explore the best kayak routes in Kerala, PaddleX Adventures offers the perfect way to relax and enjoy with friends or your favorite gang, creating unforgettable memories as you glide through scenic forests and waterways.
              </p>
              <p className="text-muted-foreground">
                Our fleet of modern, well-maintained kayaks and our commitment to safety and environmental stewardship have made us the trusted choice for thousands of adventurers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Premium Kayaks</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Scenic Spots</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary">1</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;