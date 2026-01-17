import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import DeliveryInfo from "./pages/DeliveryInfo";
import ProductDetail from "./pages/ProductDetail";
import Grocery from "./pages/Grocery";
import PaymentMethod from "./pages/account/PaymentMethod";
import Address from "./pages/account/Address";
import Reviews from "./pages/account/Reviews";
import Settings from "./pages/account/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout/delivery" element={<DeliveryInfo />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/account" element={<Settings />} />
            <Route path="/account/payment" element={<PaymentMethod />} />
            <Route path="/account/address" element={<Address />} />
            <Route path="/account/reviews" element={<Reviews />} />
            <Route path="/account/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
