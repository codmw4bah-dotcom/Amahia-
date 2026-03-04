/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  Leaf, 
  Users, 
  Map as MapIcon, 
  CheckCircle, 
  Instagram, 
  Camera, 
  Mail, 
  Home as HomeIcon, 
  Briefcase, 
  MessageSquare,
  Phone,
  MapPin,
  Send
} from "lucide-react";

type Page = "home" | "services" | "contact";

const SERVICES = [
  {
    title: "Private Game Drives",
    description: "Expert trackers and custom 4x4 vehicles for exclusive wildlife viewing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQBJWpehBjveYtMPNZGlGt6fpFYM4f4jYvVeWxGan0qjY1ZZA85iBh23WcAdJdUvyf0kz4REFyAL5i4-XfveB9NJtdeyItwJcZrI2rWV0LewMuNSMIqtT-4iZM2BA0lIXldTsT9s201iqzdcZitgcZaweIYJiC-YnsRGpGIh9gSlT02zpDVjCUNgJP_NYxaIWIgWnOGLIbat1k_xqYs4sO3mq4hvIrM_k_smgMO6wT77_0fSNrKL7qYCoLSOdgF7OPlrryMBZt94w",
    alt: "Close up of a lion during a private game drive"
  },
  {
    title: "Fine Dining & Bush Dinners",
    description: "Gourmet organic cuisine served under the vast Kenyan sky.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW397dhkeNl16TwWuQi7UpoV6GGn97Be34LWhqRihXV2muGPYRqFA1KOR2257MRd96COxlJmiBomtel7O5pJ3LNGr4HpV8rt6SSAJveHu0bSba3xmNSE6HNvqP9fzyYX7_m3pvEqD2cJAcQZkfojdSpO5XHq-k6FEympdXEhUJrd0Ubjv5ODTpBk8-MUMbRWr6jbR4aQv-hon7pT7m8BLQYJY7ZGHeME9szjf3vSPRvwxWMwCmX8T_2UE2QfjzgAgMyxnucCXP-zY",
    alt: "Elegant dinner table set in the African bush under stars"
  },
  {
    title: "Spa & Wellness",
    description: "Holistic rituals using indigenous botanical ingredients.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF8zWONeIyDBPPMWFycTqOEN1vKf-ds3jPeXm5OpXAJ_CI2OhxNx-eHMuthBnJwKfopwKq2TgGyab6L7uVX9A_qn0oO8NNH5BP8gmFKW4dmRe9sBKFbFQ9Ka-DibmCfaRLDedWZLQzq6bNv-4_Lbrms-Av5yxfd8heInOT_nBuUyjxHXJsme9tQDGRPq09O-8gHGv2eWFu5iXY2cSablgxcrJO5KEYgEMqQ5VFt-8cBc06m4Ym2nE42GW05sByizRVwiH29HRtkjA",
    alt: "Luxury outdoor spa treatment area with wooden textures"
  },
  {
    title: "Private Transfers & Concierge",
    description: "Your dedicated host to personalize every moment of your journey, from arrival to departure.",
    image: "https://picsum.photos/seed/luxury-car-interior-black/1200/800",
    alt: "Interior of a luxury private transport vehicle"
  }
];

const FEATURES = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Eco-Conscious Luxury",
    description: "Unlike mass lodges, we operate with zero-waste policies and solar power, ensuring the wilderness remains untouched."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Intimate Capacity",
    description: "Limited to only 12 guests at a time to guarantee absolute privacy and personalized attention from our staff."
  },
  {
    icon: <MapIcon className="w-8 h-8 text-primary" />,
    title: "Off-the-Path Access",
    description: "Our retreat is situated in a private conservancy, far from the tourist crowds of the national parks."
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "services":
        return <ServicesPage onNavigate={setCurrentPage} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-charcoal px-6 py-4 shadow-md">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage("home")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Leaf className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-lg font-bold tracking-tight text-white">AMAHIA</h2>
        </div>
        <button className="text-primary hover:bg-white/5 p-2 rounded-lg transition-colors">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <main className="flex-grow pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal px-6 pt-16 pb-28 text-center border-t border-white/5">
        <div className="flex justify-center mb-6">
          <Leaf className="h-10 w-10 text-primary" />
        </div>
        <p className="text-xl font-bold text-white mb-1">AMAHIA</p>
        <p className="text-sm text-slate-400 mb-10">Maasai Mara, Kenya</p>
        
        <div className="flex justify-center gap-8 mb-12">
          <Instagram className="h-6 w-6 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
          <Camera className="h-6 w-6 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
          <Mail className="h-6 w-6 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
          © 2024 AMAHIA Retreats
        </p>
      </footer>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-white/95 backdrop-blur-md px-4 pb-6 pt-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] border-t border-slate-100">
        <NavItem 
          icon={<HomeIcon className="h-6 w-6" />} 
          label="Home" 
          active={currentPage === "home"} 
          onClick={() => setCurrentPage("home")}
        />
        <NavItem 
          icon={<Briefcase className="h-6 w-6" />} 
          label="Services" 
          active={currentPage === "services"} 
          onClick={() => setCurrentPage("services")}
        />
        <NavItem 
          icon={<MessageSquare className="h-6 w-6" />} 
          label="Contact" 
          active={currentPage === "contact"} 
          onClick={() => setCurrentPage("contact")}
        />
      </div>
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[500px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(27, 24, 13, 0.3), rgba(27, 24, 13, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfwKlKou97reulsYuSEN9bXqyoVXypXALYHArysfPeeKiboLv0tfwpzg2xEeFIW2e1bytoS2oBSIdtyQeXYtp8YYaxurwOSKgCSUhfkCu_wc3wzxJIeNsPG2f6Ml2rfMuJIXHxYULBqMskY5FJL-R4-1aGKDPOGsHB46pABE7cfzqrkjp8F9yAdx-KZ9fznQ8st8Gcyzl92_fzmTFXm66XCTEw3cyqaT_J4uBf9LoQA9uYfeXkPEehvCi8NciE_EVyWtloYUT4Gn0")` 
          }}
        />
        <div className="relative h-full flex flex-col justify-end p-6 pb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Bespoke Excellence
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Curated Experiences, <br /> Designed Around You
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-200 md:text-base">
              Discover a world where luxury meets the wild. Every detail of your stay is hand-crafted to provide the ultimate eco-glamping escape.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Core Services Preview */}
      <section className="px-6 py-16 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal">Core Services</h2>
          <div className="mt-2 h-1.5 w-16 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src={service.image} 
                alt={service.alt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="mb-4 text-xs text-slate-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="px-6 py-20 max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-charcoal p-8 text-center shadow-2xl border-t-4 border-primary"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Premium All-Inclusive</h3>
          <p className="text-xl font-bold text-primary mb-8">From $1,250 / night</p>
          
          <div className="mx-auto mb-10 max-w-xs space-y-4 text-left">
            {[
              "Luxury tented accommodation",
              "All gourmet meals & premium beverages",
              "Two daily private game drives",
              "Butler & concierge service"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate("contact")}
            className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-charcoal shadow-lg transition-all hover:bg-primary/90 active:scale-[0.98]"
          >
            Request a Custom Itinerary
          </button>
          <p className="mt-4 text-xs text-slate-500">Taxes and conservancy fees included.</p>
        </motion.div>
      </section>
    </>
  );
}

function ServicesPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="bg-background-light">
      {/* Intro Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-charcoal mb-6">Curated Experiences, Designed Around You</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            At AMAHIA, we believe that true luxury lies in personalization. Our bespoke safari experiences are meticulously crafted to align with your unique desires, ensuring every moment in the wild is exclusively yours.
          </p>
        </motion.div>
      </section>

      {/* Core Services Grid */}
      <section className="px-6 py-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg mb-6">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="bg-charcoal py-24 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">The AMAHIA Distinction</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Absolute Privacy</h4>
                    <p className="text-slate-400 text-sm">With only 6 exclusive tents, you'll never encounter crowds. Your journey is shared only with those you choose.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Personalized Attention</h4>
                    <p className="text-slate-400 text-sm">A dedicated butler and private guide are assigned to you for the duration of your stay, anticipating every need.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Leaf className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Eco-Conscious Excellence</h4>
                    <p className="text-slate-400 text-sm">Luxury that respects the land. Our footprint is minimal, but the impact on your soul is profound.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/maasai-mara-luxury-camp/800/1000" 
                alt="Luxury safari tent interior" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl hidden md:block">
                <p className="text-charcoal font-bold text-2xl italic">"Redefining the wild."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Positioning Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-6">Premium All-Inclusive Tailored Packages</h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          We do not offer standard rates because we do not offer standard experiences. Every itinerary is a unique masterpiece, priced according to your specific requirements and seasonal preferences.
        </p>
        <button 
          onClick={() => onNavigate("contact")}
          className="rounded-full bg-primary px-10 py-5 text-lg font-bold text-charcoal shadow-xl hover:bg-primary/90 transition-all active:scale-95"
        >
          Request a Custom Itinerary
        </button>
      </section>
    </div>
  );
}

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a server
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen">
      {/* Intro Section */}
      <section className="px-6 pt-20 pb-12 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-charcoal mb-6">Begin Your Private Safari Journey</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your escape to the heart of the Maasai Mara starts with a conversation. Share your vision with us, and let our experts craft your perfect private itinerary.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 py-12">
        {/* Contact Form */}
        <section>
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-3xl shadow-sm text-center border border-primary/20"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Request Received</h3>
              <p className="text-slate-600">Our private concierge will contact you within 24 hours to begin planning your escape.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+1 (555) 000-0000"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Preferred Travel Dates</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="e.g. July 2024"
                    value={formState.dates}
                    onChange={(e) => setFormState({...formState, dates: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your dream safari..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-charcoal text-white rounded-2xl py-5 font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl"
              >
                Request My Private Escape
                <Send className="w-5 h-5 text-primary" />
              </button>
            </form>
          )}
        </section>

        {/* Contact Information Section */}
        <section className="space-y-12">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">Email Us</h4>
                <p className="text-slate-600">concierge@amahia.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">International Phone</h4>
                <p className="text-slate-600">+254 700 000 000</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">Location</h4>
                <p className="text-slate-600">Olare Motorogi Conservancy, Maasai Mara, Kenya</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative h-80 w-full rounded-3xl overflow-hidden shadow-inner border border-slate-200">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-80"
              style={{ backgroundImage: `url("https://picsum.photos/seed/kenya-landscape-aerial/1200/800")` }}
            />
            <div className="absolute inset-0 bg-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold whitespace-nowrap">
                  AMAHIA Retreat
                </div>
                <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-xl animate-pulse" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

{/* Automation Workflow Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-4">Our Seamless Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From the moment you reach out, our automated ecosystem ensures your request is handled with the highest level of precision and security.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <WorkflowStep 
              icon={<Send className="w-6 h-6 text-primary" />}
              title="Form Submission"
              description="Your journey begins with a simple request."
              step="01"
            />
            <WorkflowStep 
              icon={<Database className="w-6 h-6 text-primary" />}
              title="Supabase"
              description="Secure, encrypted storage of your preferences."
              step="02"
            />
            <WorkflowStep 
              icon={<RefreshCw className="w-6 h-6 text-primary" />}
              title="HubSpot CRM"
              description="Seamless integration for personalized concierge service."
              step="03"
            />
            <WorkflowStep 
              icon={<Mail className="w-6 h-6 text-primary" />}
              title="Mailchimp"
              description="Instant confirmation and itinerary details."
              step="04"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkflowStep({ icon, title, description, step }: { icon: ReactNode, title: string, description: string, step: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-primary/30 transition-all"
    >
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 bg-charcoal text-white text-[10px] font-bold px-2 py-1 rounded-md">
          {step}
        </div>
      </div>
      <h4 className="font-bold text-charcoal mb-2">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-charcoal' : 'text-gold'}`}
    >
      <div className="flex h-8 items-center justify-center">
        {icon}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'font-bold' : 'font-medium'}`}>
        {label}
      </span>
    </button>
  );
}
