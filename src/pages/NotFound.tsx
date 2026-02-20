import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="text-center">
        <p className="font-display text-8xl text-gold/20 font-light">404</p>
        <h1 className="font-display text-3xl font-light mt-2 mb-4">Page introuvable</h1>
        <p className="font-body text-sm text-muted-foreground mb-8">Cette page n'existe pas ou a été déplacée.</p>
        <Link
          to="/"
          className="font-body text-[11px] tracking-luxury uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-background transition-all duration-300 inline-block"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
