import CategoryCard from "./CategoryCard";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodBurger from "@/assets/food-burger.jpg";
import foodSushi from "@/assets/food-sushi.jpg";
import foodChinese from "@/assets/food-chinese.jpg";
import foodIndian from "@/assets/food-indian.jpg";

const categories = [
  { name: "Biryani", image: foodBiryani, count: 256 },
  { name: "Pizza", image: foodPizza, count: 189 },
  { name: "Burger", image: foodBurger, count: 342 },
  { name: "Sushi", image: foodSushi, count: 87 },
  { name: "Chinese", image: foodChinese, count: 214 },
  { name: "Indian", image: foodIndian, count: 456 },
];

const CuisineCategories = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What's on your mind?
            </h2>
            <p className="text-muted-foreground mt-1">Explore cuisines near you</p>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide justify-start md:justify-center">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineCategories;
