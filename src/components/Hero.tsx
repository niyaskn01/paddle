import { Button } from "./ui/button";
import heroImage from "../assets/bgnew.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Updated headline with location */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
          Kayaking Adventures in Ernakulam 
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Discover the beauty of Kerala’s backwaters with our premium kayak rentals
          — perfect for beginners and experts alike.
          <br />
          <br />
          <span className="text-accent font-semibold">
            Perfect for couples, solo explorers, beginners & content creators
          </span>

        </p>
       

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 shadow-hero font-semibold"
            onClick={scrollToContact}
          >
            Book Your Adventure
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="
              border-primary 
              text-primary 
              hover:bg-primary 
              hover:text-primary-foreground 
              text-lg px-8 py-4 font-semibold
            "
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-primary-foreground rounded-full animate-ping"></div>
      </div> */}

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-2 bg-gradient-to-r from-primary-foreground via-primary-foreground/50 to-primary-foreground rounded-full animate-wave"></div>
        </div> */}
    </section>
  );
};

export default Hero;
