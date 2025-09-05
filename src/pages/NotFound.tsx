import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-gradient">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary-foreground">404</h1>
        <p className="text-xl text-primary-foreground/90 mb-8">
          Oops! This page seems to have drifted away
        </p>
        <Button 
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
        >
          <a href="/">Return to Shore</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;