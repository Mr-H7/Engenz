import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickBooking from "@/components/QuickBooking";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import SpecialOffers from "@/components/SpecialOffers";
import VehicleCategories from "@/components/VehicleCategories";
import TrustStats from "@/components/TrustStats";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuickBooking />
      <Fleet />
      <WhyChooseUs />
      <HowItWorks />
      <SpecialOffers />
      <VehicleCategories />
      <TrustStats />
      <Reviews />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
