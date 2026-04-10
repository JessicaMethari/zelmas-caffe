import { Instagram, Facebook, MapPin, Phone, Clock, Mail, Briefcase, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Our Only Branch", value: "123 Caffé Boulevard, Downtown\nNew York, NY 10001" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "General Inquiries", value: "hello@zelmascaffe.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 7am – 9pm\nSun: 8am – 6pm" },
  { icon: Briefcase, label: "We're Hiring!", value: "Join our team! Send your resume to:\ncareers@zelmascaffe.com" },
  { icon: Send, label: "Mailing Address", value: "Zelma's Caffé\nP.O. Box 4567\nNew York, NY 10001" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find <span className="text-gold-gradient">Us</span>
          </h2>
          <div className="divider-gold w-32 mx-auto mb-4" />
          <p className="font-sans text-sm text-muted-foreground">
            We have a single, beloved location — come visit us!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="bg-card rounded-sm p-8 border border-gold flex items-start gap-4 hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="font-sans text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Follow Us</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com/zelmascaffe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-sans text-sm">@zelmascaffe</span>
            </a>
            <a
              href="https://facebook.com/zelmascaffe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
              <span className="font-sans text-sm">Zelma's Caffé</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
