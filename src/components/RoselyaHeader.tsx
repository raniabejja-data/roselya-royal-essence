import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logoImg from "@/assets/logo-roselya.png";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onSearchOpen: () => void;
}

const Header = ({ onSearchOpen }: HeaderProps) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Accueil", to: "/" },
    { label: "Nos Huiles Parfumées", to: "/huiles" },
    { label: "Nos Packs", to: "/packs" },
    { label: "À propos", to: "/apropos" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop nav left */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 3).map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[12px] tracking-luxury uppercase text-foreground/70 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo centered */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src={logoImg}
            alt="ROSÉLYA"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav right */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(3).map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[12px] tracking-luxury uppercase text-foreground/70 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={onSearchOpen}
            className="text-foreground/70 hover:text-gold transition-colors"
            aria-label="Recherche"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-foreground/70 hover:text-gold transition-colors"
            aria-label="Panier"
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-[10px] text-background rounded-full w-4 h-4 flex items-center justify-center font-body font-500">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile icons right */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={onSearchOpen} className="text-foreground/70 hover:text-gold transition-colors" aria-label="Recherche">
            <Search size={18} />
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative text-foreground/70 hover:text-gold transition-colors" aria-label="Panier">
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-[10px] text-background rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-gold/15 overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-8 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-body text-[13px] tracking-luxury uppercase text-foreground/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
