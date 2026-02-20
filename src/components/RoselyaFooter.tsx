import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logoImg from "@/assets/logo-roselya.png";

const Footer = () => {
  return (
    <footer className="bg-noir text-gold-light/80">
      {/* Gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logoImg} alt="ROSÉLYA" className="h-20 w-auto object-contain brightness-0 invert opacity-90" />
          <p className="font-body text-[12px] leading-relaxed text-gold-light/60 text-center md:text-left max-w-xs">
            Huiles parfumées concentrées — Longue tenue · Élégance · Féminité
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-display text-lg text-gold tracking-wide">Navigation</h4>
          {[
            { label: "Accueil", to: "/" },
            { label: "Nos Huiles Parfumées", to: "/huiles" },
            { label: "Nos Packs", to: "/packs" },
            { label: "À propos", to: "/apropos" },
            { label: "Contact", to: "/contact" },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[11px] tracking-luxury uppercase hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h4 className="font-display text-lg text-gold tracking-wide">Nous suivre</h4>
          <a
            href="https://www.instagram.com/roselya_huile_parfumees?utm_source=qr&igsh=ZDFmZHR2azQ5MWR4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-[12px] hover:text-gold transition-colors"
          >
            <Instagram size={15} />
            @roselya__huiles_parfumees
          </a>
          <a
            href="https://wa.me/212775526509"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-[12px] hover:text-gold transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            +212 775 526 509
          </a>
          <p className="font-body text-[11px] text-gold-light/40 mt-4 text-center md:text-right">
            © 2025 ROSÉLYA · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
