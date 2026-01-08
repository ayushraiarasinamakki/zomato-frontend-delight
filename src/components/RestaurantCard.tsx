import { Star, Clock, Percent } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  priceForTwo: number;
  offer?: string;
  promoted?: boolean;
}

const RestaurantCard = ({
  name,
  image,
  rating,
  deliveryTime,
  cuisines,
  priceForTwo,
  offer,
  promoted,
}: RestaurantCardProps) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "bg-rating-green";
    if (rating >= 3) return "bg-rating-orange";
    return "bg-rating-yellow";
  };

  return (
    <div className="group cursor-pointer bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Promoted Badge */}
        {promoted && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-foreground/80 text-primary-foreground text-xs font-medium rounded">
            Promoted
          </span>
        )}

        {/* Offer Badge */}
        {offer && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
            <Percent className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">{offer}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className={`flex items-center gap-1 px-1.5 py-0.5 ${getRatingColor(rating)} text-primary-foreground rounded text-sm`}>
            <Star className="w-3 h-3 fill-current" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-1 mb-3">
          {cuisines.join(", ")}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{deliveryTime}</span>
          </div>
          <span>₹{priceForTwo} for two</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
