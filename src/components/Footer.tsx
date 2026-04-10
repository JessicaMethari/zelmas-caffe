import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-gold">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="font-serif text-xl font-bold text-gold-gradient">
          Zelma's Caffé
        </a>

        <div className="flex items-center gap-5">
          <a href="https://instagram.com/zelmascaffe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/zelmascaffe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <p className="font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zelma's Caffé. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
