import { Search, MapPin } from "lucide-react";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodBurger from "@/assets/food-burger.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Discover the best food & drinks
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Order from your favorite restaurants and get it delivered to your doorstep
            </p>

            {/* Search Box */}
            <div className="bg-card rounded-xl p-2 card-shadow">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted rounded-lg flex-1">
                  <MapPin className="w-5 h-5 text-primary" />
                  <input
                    type="text"
                    placeholder="Enter your delivery location"
                    className="w-full bg-transparent text-sm focus:outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Food Images */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="relative w-full max-w-md">
              {/* Main Image */}
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary-foreground/20 card-shadow mx-auto animate-float">
                <img
                  src={foodBiryani}
                  alt="Delicious Biryani"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Images */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full overflow-hidden border-4 border-primary-foreground/20 card-shadow animate-float" style={{ animationDelay: "0.5s" }}>
                <img
                  src={foodPizza}
                  alt="Pizza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full overflow-hidden border-4 border-primary-foreground/20 card-shadow animate-float" style={{ animationDelay: "1s" }}>
                <img
                  src={foodBurger}
                  alt="Burger"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
