
import { useState } from "react";

const languages = [
  { name: "ENGLISH", flag: "🇺🇸", code: "en" },
  { name: "SPANISH", flag: "🇪🇸", code: "es" },
  { name: "FRENCH", flag: "🇫🇷", code: "fr" },
  { name: "GERMAN", flag: "🇩🇪", code: "de" },
  { name: "ITALIAN", flag: "🇮🇹", code: "it" },
  { name: "PORTUGUESE", flag: "🇧🇷", code: "pt" },
  { name: "DUTCH", flag: "🇳🇱", code: "nl" },
  { name: "RUSSIAN", flag: "🇷🇺", code: "ru" },
  { name: "CHINESE", flag: "🇨🇳", code: "zh" },
  { name: "JAPANESE", flag: "🇯🇵", code: "jp" },
];

const LanguageSelector = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleLanguages = 7;

  const nextLanguages = () => {
    setCurrentIndex((prev) => 
      prev + visibleLanguages >= languages.length ? 0 : prev + 1
    );
  };

  const prevLanguages = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, languages.length - visibleLanguages) : prev - 1
    );
  };

  const displayedLanguages = languages.slice(
    currentIndex, 
    currentIndex + visibleLanguages
  );

  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <button 
            onClick={prevLanguages}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            disabled={currentIndex === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-8 mx-8">
            {displayedLanguages.map((language, index) => (
              <div 
                key={language.code}
                className="flex items-center space-x-3 cursor-pointer hover:opacity-75 transition-opacity group"
              >
                <div className="text-2xl transform group-hover:scale-110 transition-transform">
                  {language.flag}
                </div>
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {language.name}
                </span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextLanguages}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            disabled={currentIndex + visibleLanguages >= languages.length}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
