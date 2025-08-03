"use client";

import { useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { TranslatedText } from "@/hooks/useTranslation";

export default function TranslationTest() {
  const { currentLanguage, setLanguage } = useTranslation();
  const [testResult, setTestResult] = useState("");

  const testTranslations = async () => {
    const testTexts = ["Home", "Messages", "Privacy & safety", "Loading..."];
    const results = [];
    
    for (const text of testTexts) {
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLanguage: currentLanguage })
        });
        
        if (response.ok) {
          const data = await response.json();
          results.push(`"${text}" → "${data.translatedText}"`);
        } else {
          results.push(`"${text}" → API Error: ${response.status}`);
        }
      } catch (error) {
        results.push(`"${text}" → Fetch Error: ${error}`);
      }
    }
    
    setTestResult(results.join('\n'));
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-800 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">🌍 Translation System Test</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Current Language: {currentLanguage}</h2>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setLanguage("en")} className="px-3 py-1 bg-blue-500 text-white rounded">EN</button>
          <button onClick={() => setLanguage("ru")} className="px-3 py-1 bg-blue-500 text-white rounded">RU</button>
          <button onClick={() => setLanguage("es")} className="px-3 py-1 bg-blue-500 text-white rounded">ES</button>
          <button onClick={() => setLanguage("fr")} className="px-3 py-1 bg-blue-500 text-white rounded">FR</button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Component Translation Test:</h2>
        <ul className="space-y-2">
          <li>Home: <TranslatedText>Home</TranslatedText></li>
          <li>Messages: <TranslatedText>Messages</TranslatedText></li>
          <li>Privacy & safety: <TranslatedText>Privacy & safety</TranslatedText></li>
          <li>Loading: <TranslatedText>Loading...</TranslatedText></li>
        </ul>
      </div>

      <div className="mb-4">
        <button 
          onClick={testTranslations}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Test API Translations
        </button>
      </div>

      {testResult && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">API Test Results:</h3>
          <pre className="text-sm whitespace-pre-wrap">{testResult}</pre>
        </div>
      )}
    </div>
  );
}
