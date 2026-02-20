import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const HuilesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Page header */}
      <section className="py-20 px-6 text-center bg-ivory border-b border-gold/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-[11px] tracking-widest-xl uppercase text-gold">— Collection —</span>
          <h1 className="font-display text-5xl md:text-6xl font-light mt-3 mb-4">
            Nos Huiles Parfumées
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Chaque huile est une invitation au voyage sensoriel. Des formules concentrées 50ml, conçues pour une féminité royale et un sillage inoubliable.
          </p>
        </motion.div>
      </section>

      {/* Products grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HuilesPage;
