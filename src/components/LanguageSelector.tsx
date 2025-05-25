
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
  
  // Responsive visible languages count
  const getVisibleLanguages = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // mobile: 2 languages
      if (window.innerWidth < 768) return 3; // small tablet: 3 languages
      if (window.innerWidth < 1024) return 5; // tablet: 5 languages
      return 7; // desktop: 7 languages
    }
    return 7; // default fallback
  };

  const [visibleLanguages, setVisibleLanguages] = useState(getVisibleLanguages());

  // Update visible languages on window resize
  useState(() => {
    const handleResize = () => {
      setVisibleLanguages(getVisibleLanguages());
      // Reset to start if current view would show empty languages
      if (currentIndex + getVisibleLanguages() > languages.length) {
        setCurrentIndex(Math.max(0, languages.length - getVisibleLanguages()));
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

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
    <div className="bg-white border-t border-gray-200 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <button 
            onClick={prevLanguages}
            className="p-2 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors mr-2 sm:mr-4 touch-manipulation"
            disabled={currentIndex === 0}
            aria-label="Previous languages"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 overflow-hidden">
            {displayedLanguages.map((language, index) => (
              <div 
                key={language.code}
                className="flex items-center space-x-1 sm:space-x-2 cursor-pointer hover:opacity-75 transition-opacity px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-50 min-w-0 flex-shrink-0"
              >
                <div className="w-6 h-4 sm:w-8 sm:h-6 flex items-center justify-center text-sm sm:text-lg flex-shrink-0">
                  {language.flag}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wide whitespace-nowrap truncate">
                  {language.name}
                </span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextLanguages}
            className="p-2 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors ml-2 sm:ml-4 touch-manipulation"
            disabled={currentIndex + visibleLanguages >= languages.length}
            aria-label="Next languages"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
