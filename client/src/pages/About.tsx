import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
