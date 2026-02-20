import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HuilesPage from "./pages/HuilesPage";
import PacksPage from "./pages/PacksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import TopBar from "./components/TopBar";
import RoselyaHeader from "./components/RoselyaHeader";
import RoselyaFooter from "./components/RoselyaFooter";
import CartDrawer from "./components/CartDrawer";
import SearchModal from "./components/SearchModal";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

const AppLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <RoselyaHeader onSearchOpen={() => setSearchOpen(true)} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/huiles" element={<HuilesPage />} />
          <Route path="/huiles/:id" element={<ProductDetailPage />} />
          <Route path="/packs" element={<PacksPage />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <RoselyaFooter />
      <CartDrawer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <AppLayout />
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
