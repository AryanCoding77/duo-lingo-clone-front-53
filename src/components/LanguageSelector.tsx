
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <button 
            onClick={prevLanguages}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors mr-4"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-6">
            {displayedLanguages.map((language, index) => (
              <div 
                key={language.code}
                className="flex items-center space-x-2 cursor-pointer hover:opacity-75 transition-opacity px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-8 h-6 flex items-center justify-center text-lg">
                  {language.flag}
                </div>
                <span className="text-sm font-medium text-gray-700 uppercase tracking-wide whitespace-nowrap">
                  {language.name}
                </span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextLanguages}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors ml-4"
            disabled={currentIndex + visibleLanguages >= languages.length}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
