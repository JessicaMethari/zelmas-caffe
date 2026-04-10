import gallery1 from "../assets/gallery-1.jpeg";
import gallery2 from "../assets/gallery-2.jpeg";
import gallery3 from "../assets/gallery-3.jpeg";
import gallery4 from "../assets/gallery-4.jpeg";

const images = [
  { src: gallery1, alt: "Artisan latte art" },
  { src: gallery2, alt: "Fresh pastry selection" },
  { src: gallery3, alt: "Pour over coffee brewing" },
  { src: gallery4, alt: "Cozy café seating" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="divider-gold w-32 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;