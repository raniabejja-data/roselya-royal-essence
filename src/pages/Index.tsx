import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-roselya.png";
import { bestsellers, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Video background */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/hero-video.mov" type="video/mp4" />
      <source src="/hero-video.mov" type="video/quicktime" />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-8"
      >
        <img
          src={logoImg}
          alt="ROSÉLYA"
          className="h-36 md:h-48 w-auto mx-auto object-contain brightness-0 invert drop-shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-tight"
      >
        Révélez Votre<br />
        <span className="text-gold italic">Essence Royale</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="font-body text-sm md:text-base tracking-luxury text-white/70 mb-10 uppercase"
      >
        Huiles parfumées concentrées 50ml · Longue tenue · Élégance · Féminité
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Link
          to="/huiles"
          className="inline-block gradient-gold text-background font-body text-[12px] tracking-luxury uppercase px-10 py-4 shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          Découvrir nos huiles
        </Link>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-body text-[10px] tracking-luxury uppercase text-white/50">Découvrir</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
      />
    </motion.div>
  </section>
);

const BestsellersSection = () => (
  <section className="py-24 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-body text-[11px] tracking-widest-xl uppercase text-gold">— Nos Favoris —</span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mt-3 mb-4">
          Les Bestsellers
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
      </motion.div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bestsellers.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <Link
          to="/huiles"
          className="font-body text-[11px] tracking-luxury uppercase border border-gold text-gold px-10 py-3 hover:bg-gold hover:text-background transition-all duration-300 inline-block"
        >
          Voir toutes nos huiles
        </Link>
      </motion.div>
    </div>
  </section>
);

const BrandStorySection = () => (
  <section className="py-24 px-6" style={{ background: "var(--gradient-luxury)" }}>
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-body text-[11px] tracking-widest-xl uppercase text-gold">— L'Art du Parfum —</span>
        <h2 className="font-display text-4xl md:text-5xl font-light mt-4 mb-8 leading-snug">
          Une fragrance,<br />
          <em className="text-gold">une signature</em>
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10">
          Chaque huile ROSÉLYA est pensée pour sublimer votre féminité et révéler votre essence royale. 
          Des formules concentrées pour une tenue longue durée, une sillage enveloppant et une peau délicatement parfumée.
        </p>
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "50ml", label: "Concentration pure" },
            { value: "8+", label: "Fragrances uniques" },
            { value: "∞", label: "Longue tenue" },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="font-display text-3xl text-gold font-light">{item.value}</p>
              <p className="font-body text-[11px] tracking-wide text-muted-foreground uppercase mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Index = () => {
  return (
    <main>
      <HeroSection />
      <BestsellersSection />
      <BrandStorySection />
    </main>
  );
};

export default Index;
