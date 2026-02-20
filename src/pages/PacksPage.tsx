import { motion } from "framer-motion";
import { packs } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { products, getProductById } from "@/data/products";
import { ShoppingBag } from "lucide-react";

const PacksPage = () => {
  const { addToCart } = useCart();

  const handleAddPack = (packProducts: string[]) => {
    packProducts.forEach(id => {
      const product = getProductById(id);
      if (product) addToCart(product);
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-6 text-center bg-ivory border-b border-gold/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-[11px] tracking-widest-xl uppercase text-gold">— Coffrets —</span>
          <h1 className="font-display text-5xl md:text-6xl font-light mt-3 mb-4">Nos Packs</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Des associations pensées avec soin pour sublimer chaque moment et offrir une expérience olfactive complète.
          </p>
        </motion.div>
      </section>

      {/* Packs */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-20">
        {packs.map((pack, i) => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
          >
            {/* Images */}
            <div className="w-full md:w-1/2">
              <div className={`grid ${pack.images.length === 3 ? "grid-cols-3" : "grid-cols-2"} gap-3`}>
                {pack.images.map((img, j) => (
                  <div key={j} className="aspect-[3/4] overflow-hidden rounded-sm shadow-card">
                    <img
                      src={img}
                      alt={pack.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 flex flex-col gap-5">
              <div>
                <span className="font-body text-[10px] tracking-luxury uppercase text-gold">Coffret exclusif</span>
                <h2 className="font-display text-3xl md:text-4xl font-light mt-2">{pack.name}</h2>
                <p className="font-display text-lg italic text-gold/80 mt-1">{pack.subtitle}</p>
              </div>

              <div className="w-12 h-px bg-gold/30" />

              <p className="font-body text-sm text-muted-foreground leading-relaxed">{pack.description}</p>

              <div>
                <p className="font-body text-[11px] tracking-luxury uppercase text-muted-foreground mb-2">Comprend :</p>
                <div className="flex flex-wrap gap-2">
                  {pack.products.map(id => {
                    const p = getProductById(id);
                    return p ? (
                      <span key={id} className="font-body text-[12px] border border-gold/30 text-foreground px-3 py-1 rounded-full">
                        {p.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="font-display text-2xl text-gold">
                    {pack.products.length * 149} MAD
                  </span>
                  <p className="font-body text-[11px] text-muted-foreground">{pack.products.length} huiles · 50ml chacune</p>
                </div>
                <button
                  onClick={() => handleAddPack(pack.products)}
                  className="flex items-center gap-2 bg-noir text-gold-light px-6 py-3 font-body text-[11px] tracking-luxury uppercase hover:bg-gold hover:text-background transition-all duration-300"
                >
                  <ShoppingBag size={14} />
                  Ajouter le pack
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default PacksPage;
