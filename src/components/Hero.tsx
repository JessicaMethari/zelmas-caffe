import { useState, useEffect } from "react";

function Hero() {

  // 🔥 Slides Data
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      subtitle: "We really like what we do.",
      title: "Exquisite Taste in Your Cup",
    },
    {
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      subtitle: "Enjoy the finest coffee drinks.",
      title: "Enjoy Our Exclusive Coffee",
    },
    {
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      subtitle: "Making coffee with love.",
      title: "Alluring & Fragrant Coffee Aroma",
    },
  ];

  // 🔥 State
  const [current, setCurrent] = useState(0);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 RETURN UI (THIS WAS MISSING)
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={slides[current].image}
        className="absolute w-full h-full object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-10 py-6 text-white z-10">

        <div className="flex gap-8 text-sm tracking-widest">
          <a>HOME</a>
          <a>PAGES</a>
          <a>EVENTS</a>
          <a>SHOP</a>
          <a>CONTACT</a>
        </div>

        <h1 className="text-xl font-semibold tracking-widest">
          ZELMA’S
        </h1>

        <div className="flex items-center gap-4">

          <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
            🔍
          </button>

          <div className="relative">
            <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              🛒
            </button>

            <span className="absolute -top-2 -right-2 bg-latte text-xs px-1 rounded-full">
              2
            </span>
          </div>

          <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
            ❤️
          </button>

        </div>
      </nav>

      {/* Center Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">

        <p className="text-sm tracking-widest mb-4">
          {slides[current].subtitle}
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          {slides[current].title}
        </h1>

        <button className="bg-latte px-8 py-3 rounded-full hover:bg-coffee transition">
          About Us
        </button>

      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white"
      >
        ←
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-latte" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;