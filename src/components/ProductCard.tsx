import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <div className="bg-background shadow-card hover:shadow-product transition-all duration-500 overflow-hidden rounded-sm">
        {/* Image */}
        <Link to={`/huiles/${product.id}`}>
          <div className="relative overflow-hidden aspect-[3/4]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Link>

        {/* Info */}
        <div className="p-5">
          <div className="mb-1">
            <span className="font-body text-[10px] tracking-luxury uppercase text-gold">
              {product.type}
            </span>
          </div>
          <Link to={`/huiles/${product.id}`}>
            <h3 className="font-display text-xl font-light text-foreground hover:text-gold transition-colors duration-200 mb-1">
              {product.name}
            </h3>
          </Link>
          <p className="font-body text-[12px] text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {product.tagline}
          </p>

          {/* Separator */}
          <div className="w-8 h-px bg-gold/30 mb-4" />

          <div className="flex items-center justify-between">
            <span className="font-display text-lg text-foreground font-medium">149 MAD</span>
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-noir text-gold-light px-4 py-2 text-[11px] font-body tracking-luxury uppercase hover:bg-gold hover:text-background transition-all duration-300"
            >
              <ShoppingBag size={13} />
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
