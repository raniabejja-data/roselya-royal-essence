import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCT_PRICE } from "@/context/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || "");
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-2xl">Produit introuvable</p>
        <Link to="/huiles" className="font-body text-sm text-gold hover:underline">
          ← Retour aux huiles
        </Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="px-6 py-4 border-b border-gold/10 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-body text-[11px] tracking-wide text-muted-foreground">
          <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
          <ChevronRight size={12} />
          <Link to="/huiles" className="hover:text-gold transition-colors">Nos Huiles</Link>
          <ChevronRight size={12} />
          <span className="text-foreground">{product.name}</span>
        </div>
      </nav>

      {/* Product */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-product">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold/30" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 pt-4"
          >
            <div>
              <span className="font-body text-[10px] tracking-luxury uppercase text-gold">{product.type} · {product.volume}</span>
              <h1 className="font-display text-4xl md:text-5xl font-light mt-2">{product.name}</h1>
              <p className="font-display text-lg italic text-gold/80 mt-1">{product.tagline}</p>
            </div>

            <div className="w-12 h-px bg-gold/30" />

            <p className="font-body text-sm text-muted-foreground leading-loose">{product.description}</p>

            <div className="bg-ivory border border-gold/15 p-5 rounded-sm">
              <p className="font-body text-[11px] tracking-luxury uppercase text-gold mb-2">Notes olfactives</p>
              <p className="font-body text-sm text-muted-foreground">{product.notes}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="font-display text-3xl text-gold">{PRODUCT_PRICE} MAD</span>
                <p className="font-body text-[11px] text-muted-foreground mt-1">Flacon 50ml · Huile concentrée</p>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="flex items-center justify-center gap-3 bg-noir text-gold-light px-8 py-4 font-body text-[12px] tracking-luxury uppercase hover:bg-gold hover:text-background transition-all duration-300 shadow-gold"
            >
              <ShoppingBag size={16} />
              Ajouter au panier
            </button>

            <a
              href={`https://wa.me/212775526509?text=Bonjour, je souhaite commander l'huile ROSÉLYA ${product.name} 50ml.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-gold/30 text-gold font-body text-[12px] tracking-luxury uppercase px-8 py-3 hover:bg-gold hover:text-background hover:border-gold transition-all duration-300"
            >
              Commander via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 px-6 bg-ivory border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-body text-[11px] tracking-luxury uppercase text-gold">— Vous aimerez aussi —</span>
            <h2 className="font-display text-3xl font-light mt-3">Nos autres fragrances</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
