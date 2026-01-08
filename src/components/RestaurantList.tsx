import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodBurger from "@/assets/food-burger.jpg";
import foodSushi from "@/assets/food-sushi.jpg";
import foodChinese from "@/assets/food-chinese.jpg";
import foodIndian from "@/assets/food-indian.jpg";

const restaurants = [
  {
    id: 1,
    name: "Biryani Blues",
    image: foodBiryani,
    rating: 4.3,
    deliveryTime: "25-30 min",
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    priceForTwo: 450,
    offer: "50% OFF up to ₹100",
    promoted: true,
  },
  {
    id: 2,
    name: "Pizza Paradise",
    image: foodPizza,
    rating: 4.5,
    deliveryTime: "20-25 min",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    priceForTwo: 550,
    offer: "₹125 OFF ABOVE ₹249",
  },
  {
    id: 3,
    name: "Burger King",
    image: foodBurger,
    rating: 4.1,
    deliveryTime: "15-20 min",
    cuisines: ["Burger", "American", "Fast Food"],
    priceForTwo: 350,
  },
  {
    id: 4,
    name: "Sushi House",
    image: foodSushi,
    rating: 4.7,
    deliveryTime: "35-40 min",
    cuisines: ["Japanese", "Sushi", "Asian"],
    priceForTwo: 1200,
    promoted: true,
  },
  {
    id: 5,
    name: "Dragon Palace",
    image: foodChinese,
    rating: 4.0,
    deliveryTime: "30-35 min",
    cuisines: ["Chinese", "Thai", "Asian"],
    priceForTwo: 500,
    offer: "20% OFF ABOVE ₹500",
  },
  {
    id: 6,
    name: "Curry House",
    image: foodIndian,
    rating: 4.4,
    deliveryTime: "25-35 min",
    cuisines: ["North Indian", "Mughlai", "Tandoor"],
    priceForTwo: 600,
  },
];

const filters = [
  "Relevance",
  "Delivery Time",
  "Rating",
  "Cost: Low to High",
  "Cost: High to Low",
];

const RestaurantList = () => {
  const [activeFilter, setActiveFilter] = useState("Relevance");

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Restaurants near you
          </h2>
          
          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              cuisines={restaurant.cuisines}
              priceForTwo={restaurant.priceForTwo}
              offer={restaurant.offer}
              promoted={restaurant.promoted}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-10 text-center">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Show more restaurants
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
