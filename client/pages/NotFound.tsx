import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-muted to-background">
      <div className="text-center max-w-md px-4">
        <div className="text-8xl font-heading font-bold text-primary mb-4">404</div>
        <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors items-center gap-2 group"
        >
          Back to Home
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
