interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
}

const CategoryCard = ({ name, image, count }: CategoryCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 rounded-full overflow-hidden card-shadow transition-all duration-300 group-hover:card-shadow-hover group-hover:scale-105">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
      </div>
      <div className="text-center">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-xs text-muted-foreground">{count} places</p>
      </div>
    </div>
  );
};

export default CategoryCard;
