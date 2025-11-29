import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Bookings = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-3xl font-bold mb-4">View Bookings</h1>
      <p className="text-muted-foreground mb-8">
        Here you can view your past bookings.
      </p>
      <Button asChild>
        <Link to="/">Go to Homepage</Link>
      </Button>
    </div>
  );
};

export default Bookings;