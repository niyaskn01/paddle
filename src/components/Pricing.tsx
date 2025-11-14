import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Evening Adventure",
      price: "600rs",
      period: "3 hours",
      description: "Perfect for sunset paddles and evening explorations",
      features: [
        "Single or tandem kayak",
        "Premium kayaks & gear",
        "All safety equipment",
        "Detailed route map",
        "Storage for personal items",
        "Complimentary snacks",
        "Photo opportunities",
        "washroom access"
      ],
      popular: false
    },
    {
      title: "Morning Explorer",
      price: "600rs",
      period: "3 hours",
      description: "Ideal for a refreshing morning paddle and light exploration",
      features: [
       "Single or tandem kayak",
        "Premium kayaks & gear",
        "All safety equipment",
        "Detailed route map",
        "Storage for personal items",
        "Complimentary snacks",
        "Photo opportunities",
        "breakfast for hungry paddlers",
        "washroom access"
      ],
      popular: true
    },
    {
      title: "Fun And Adventurer",
      price: "600rs",
      period: "2-3 hours",
      description: "The ultimate kayaking experience with access to all waterways",
      features: [
        "Single or tandem kayaks for a leisurely ride",
        "Comfortable seating for relaxing trips",
        "Scenic routes perfect for photography and reels",
        "Panoramic views of Kerala Backwaters and forests",
        "Storage for personal items",
        "Access to quiet spots for picnics or chilling",
        "Morning and evening trips for beautiful lighting",
        "Washroom access at start and end points",
        "Eco-friendly and peaceful environment"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-ocean-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Flexible pricing options to match your schedule and adventure level. All rentals include premium equipment and safety gear.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative text-center border-none shadow-card hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold ${
                    plan.popular 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                  }`}
                  onClick={scrollToContact}
                >
                  Book {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary-foreground/80 text-sm">
             All prices include tax • Cancellation up to 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;