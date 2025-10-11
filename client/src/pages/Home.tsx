import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
