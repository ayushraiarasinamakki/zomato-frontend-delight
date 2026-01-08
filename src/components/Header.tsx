import { MapPin, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(2);

  return (
    <header className="sticky top-0 z-50 bg-card header-shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">zomato</div>
          </div>

          {/* Location Selector */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer group">
            <MapPin className="w-5 h-5 text-primary" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Mumbai</span>
              <span className="text-xs text-muted-foreground">Andheri West, Maharashtra</span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full pl-12 pr-4 py-3 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Log in</span>
            </button>
            <button className="hidden md:block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sign up
            </button>
            <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
