import { Suspense } from "react";
import BookingForm from "./BookingForm";
import ZNavbar from "@/components/ZNavbar";
import ZFooter from "@/components/ZFooter";

export const metadata = {
  title: "Book Your Vehicle — ENGENZ",
  description:
    "Reserve your rental car in Egypt. Fast, easy booking with the ENGENZ team confirming within 2 hours.",
};

export default function BookingPage() {
  return (
    <>
      <ZNavbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <Suspense fallback={<div className="pt-40 text-center text-white">Loading...</div>}>
          <BookingForm />
        </Suspense>
      </main>
      <ZFooter />
    </>
  );
}
