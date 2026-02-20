import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background shadow-product"
          >
            <div className="max-w-2xl mx-auto p-6">
              <div className="flex items-center gap-4 border-b border-gold/20 pb-4">
                <Search size={18} className="text-gold" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Rechercher une huile parfumée..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="flex-1 font-body text-lg bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50"
                />
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={20} />
                </button>
              </div>

              {filtered.length > 0 && (
                <div className="py-4 space-y-3 max-h-80 overflow-y-auto">
                  {filtered.map(product => (
                    <Link
                      key={product.id}
                      to={`/huiles/${product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 hover:bg-gold-pale rounded-sm transition-colors group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-14 object-cover rounded-sm shrink-0"
                      />
                      <div>
                        <p className="font-display text-lg group-hover:text-gold transition-colors">{product.name}</p>
                        <p className="font-body text-[12px] text-muted-foreground">{product.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {query.trim() && filtered.length === 0 && (
                <div className="py-8 text-center">
                  <p className="font-body text-muted-foreground">Aucun résultat pour "{query}"</p>
                </div>
              )}

              {!query.trim() && (
                <div className="py-4">
                  <p className="font-body text-[11px] tracking-luxury uppercase text-muted-foreground/60 mb-3">
                    Nos fragrances
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {products.map(p => (
                      <Link
                        key={p.id}
                        to={`/huiles/${p.id}`}
                        onClick={onClose}
                        className="font-body text-[12px] border border-gold/20 px-3 py-1 hover:border-gold hover:text-gold transition-colors rounded-full"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
