import { Coffee, CakeSlice, Wine } from "lucide-react";

const menuCategories = [
  {
    icon: Coffee,
    title: "Coffee & Espresso",
    items: [
      { name: "Signature Espresso", price: "$4.50", desc: "Bold, rich, single-origin" },
      { name: "Velvet Cappuccino", price: "$5.50", desc: "Silky foam, house blend" },
      { name: "Gold Latte", price: "$6.00", desc: "Turmeric, honey, steamed milk" },
      { name: "Cold Brew Reserve", price: "$5.00", desc: "24-hour steeped, smooth" },
    ],
  },
  {
    icon: CakeSlice,
    title: "Pastries & Bites",
    items: [
      { name: "Butter Croissant", price: "$4.00", desc: "Flaky, golden, French-style" },
      { name: "Dark Chocolate Tart", price: "$5.50", desc: "Rich ganache, shortcrust" },
      { name: "Almond Biscotti", price: "$3.50", desc: "Twice-baked, crunchy" },
      { name: "Seasonal Scone", price: "$4.00", desc: "Daily selection, fresh" },
    ],
  },
  {
    icon: Wine,
    title: "Special Drinks",
    items: [
      { name: "Zelma's Affogato", price: "$7.00", desc: "Espresso over gelato" },
      { name: "Lavender Mocha", price: "$6.50", desc: "Floral, bittersweet" },
      { name: "Chai Royale", price: "$5.50", desc: "Spiced, creamy, aromatic" },
      { name: "Matcha Elegance", price: "$6.00", desc: "Ceremonial grade, oat milk" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Our Offerings
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="text-gold-gradient">Menu</span>
          </h2>
          <div className="divider-gold w-32 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-sm p-8 border border-gold hover:border-primary/50 transition-colors duration-300"
            >
              <category.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <ul className="space-y-5">
                {category.items.map((item) => (
                  <li key={item.name} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-sans font-medium text-foreground">{item.name}</span>
                      <span className="font-serif text-primary font-semibold">{item.price}</span>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
