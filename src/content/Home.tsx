import React from "react";
import { TranslatedText } from "@/hooks/useTranslation";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Main Content */}
      <div>
        <h1 className="text-3xl font-bold mb-4">
          <TranslatedText>Welcome to the Home Page</TranslatedText>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          <TranslatedText>This is the main content area.</TranslatedText>
        </p>
      </div>

      {/* Additional test content */}
      <div className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold">
          <TranslatedText>More Examples</TranslatedText>:
        </h2>
        <p>
          <TranslatedText>Home</TranslatedText>
        </p>
        <p>
          <TranslatedText>Messages</TranslatedText>
        </p>
        <p>
          <TranslatedText>games</TranslatedText>
        </p>
        <p>
          <TranslatedText>Privacy & safety</TranslatedText>
        </p>
      </div>
    </div>
  );
};

export default Home;
