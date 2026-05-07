"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en, { type Translations } from "@/locales/en";
import ar from "@/locales/ar";

type Lang = "en" | "ar";

type LanguageContextType = {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: en,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("engenz_lang") as Lang | null;
    if (saved === "ar") {
      setLang("ar");
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("engenz_lang", next);
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = next;
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: lang === "ar" ? ar : en, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
