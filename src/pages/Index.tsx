import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CuisineCategories from "@/components/CuisineCategories";
import RestaurantList from "@/components/RestaurantList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CuisineCategories />
      <RestaurantList />
      <Footer />
    </div>
  );
};

export default Index;
