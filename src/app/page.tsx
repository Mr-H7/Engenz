import ZNavbar from "@/components/ZNavbar";
import ZHero from "@/components/ZHero";
import ZCollection from "@/components/ZCollection";
import ZStats from "@/components/ZStats";
import ZFooter from "@/components/ZFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <ZNavbar />
      <ZHero />
      <ZCollection />
      <ZStats />
      <ZFooter />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
