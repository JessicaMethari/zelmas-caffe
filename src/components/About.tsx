import aboutImage from "../assets/about-coffee.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={aboutImage}
                alt="Inside Zelma's Caffé"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold rounded-sm -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Legacy of <span className="text-gold-gradient">Flavor</span>
            </h2>
            <div className="divider-gold w-20 mb-8" />
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Zelma's Caffé was born from a simple belief — that great coffee deserves a beautiful moment. 
              Nestled in the heart of the city, our space blends timeless elegance with the warmth of a neighborhood gathering place.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Every bean is ethically sourced, every drink crafted with precision, and every visit 
              designed to feel like coming home. From our signature espresso to our artisanal pastries, 
              we invite you to slow down and savor the extraordinary.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-4 border-t border-gold">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "25+", label: "Coffee Varieties" },
                { number: "5K+", label: "Happy Guests" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;