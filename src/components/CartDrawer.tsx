import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart, PRODUCT_PRICE } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold/15">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-gold" />
                <h2 className="font-display text-xl font-light">
                  Panier <span className="text-gold">({totalItems})</span>
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
                  <ShoppingBag size={40} className="text-gold/30" />
                  <p className="font-display text-xl text-muted-foreground">Votre panier est vide</p>
                  <p className="font-body text-sm text-muted-foreground/70">Découvrez nos huiles parfumées</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 font-body text-[11px] tracking-luxury uppercase border border-gold text-gold px-6 py-2 hover:bg-gold hover:text-background transition-all duration-300"
                  >
                    Explorer
                  </button>
                </div>
              ) : (
                <div className="px-6 space-y-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover shrink-0 rounded-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-lg font-light">{item.product.name}</h4>
                        <p className="font-body text-[11px] text-muted-foreground tracking-wide">50ml · Huile concentrée</p>
                        <p className="font-display text-base text-gold mt-1">{PRODUCT_PRICE * item.quantity} MAD</p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-gold/20">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-gold/10 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center font-body text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-gold/10 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-muted-foreground/50 hover:text-destructive transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gold/15 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm tracking-wide text-muted-foreground">Total</span>
                  <span className="font-display text-2xl text-gold">{totalPrice} MAD</span>
                </div>
                <a
                  href={`https://wa.me/212775526509?text=Bonjour, je souhaite commander: ${items.map(i => `${i.product.name} x${i.quantity}`).join(', ')} - Total: ${totalPrice} MAD`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-noir text-gold-light text-center py-3 font-body text-[12px] tracking-luxury uppercase hover:bg-gold hover:text-background transition-all duration-300"
                >
                  Commander via WhatsApp
                </a>
                <p className="text-center font-body text-[10px] text-muted-foreground/60 tracking-wide">
                  Livraison rapide · Paiement sécurisé
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
