import heroImage from "../assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zelma's Caffé interior with elegant coffee service"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-6">
          Est. 2024
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gold-gradient">
          Zelma's Caffé
        </h1>
        <div className="divider-gold w-32 mx-auto mb-6" />
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Where every cup tells a story of craftsmanship, passion, and the finest beans from around the world.
        </p>
        <a
          href="#menu"
          className="inline-block bg-gold-gradient text-primary-foreground font-sans text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:opacity-90 transition-opacity duration-300"
        >
          Explore Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
