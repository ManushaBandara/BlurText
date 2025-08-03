"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getFallbackTranslation } from "@/utils/fallbackTranslations";

export type Language = "en" | "ru" | "es" | "fr" | "de" | "it" | "pt" | "ja" | "ko" | "zh";

interface TranslationContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translate: (text: string) => Promise<string>;
  translations: { [key: string]: string };
  isTranslating: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Cache for translations to avoid repeated API calls
const translationCache: { [key: string]: string } = {};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language;
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    // Clear translations cache when language changes
    setTranslations({});
  };

  const translate = async (text: string): Promise<string> => {
    // If the target language is English, return the original text
    if (currentLanguage === "en" || !text.trim()) {
      return text;
    }

    // Check if translation is already cached
    const cacheKey = `${text}_${currentLanguage}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    // Check local state cache
    if (translations[cacheKey]) {
      return translations[cacheKey];
    }

    try {
      setIsTranslating(true);
      
      // Call our translation API with better error handling
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLanguage: currentLanguage,
        }),
      });

      if (!response.ok) {
        console.warn(`Translation API returned ${response.status}: ${response.statusText}`);
        throw new Error(`Translation API error: ${response.status}`);
      }

      const result = await response.json();
      const translatedText = result.translatedText || text;
      
      // Cache the translation
      translationCache[cacheKey] = translatedText;
      setTranslations(prev => ({
        ...prev,
        [cacheKey]: translatedText,
      }));
      
      return translatedText;
    } catch (error) {
      console.warn('Translation API failed, using fallback:', error);
      
      // Try fallback translation first
      const fallbackText = getFallbackTranslation(text, currentLanguage);
      if (fallbackText !== text) {
        // Cache the fallback translation
        translationCache[cacheKey] = fallbackText;
        setTranslations(prev => ({
          ...prev,
          [cacheKey]: fallbackText,
        }));
        return fallbackText;
      }
      
      // Return original text if no fallback available
      return text;
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <TranslationContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      translations,
      isTranslating,
    }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

// Language mapping for display names
export const languageNames: { [key in Language]: string } = {
  en: "English",
  ru: "Русский",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
};
