
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-duolingo-green rounded-full flex items-center justify-center mr-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-duolingo-green rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-bold text-duolingo-green">duolingo</span>
        </div>
        <div className="text-sm text-gray-600 uppercase tracking-wide">
          SITE LANGUAGE: ENGLISH
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Left side - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
            {/* Phone mockup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-80 bg-gray-100 rounded-3xl shadow-lg border-8 border-gray-200">
              <div className="w-full h-full bg-gradient-to-b from-blue-50 to-green-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-duolingo-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-20 h-3 bg-gray-300 rounded mx-auto"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating characters */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float shadow-lg flex items-center justify-center">
              <div className="text-white text-xl">🎭</div>
            </div>
            
            <div className="absolute top-16 right-12 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-float-delayed shadow-lg flex items-center justify-center">
              <div className="text-white text-2xl">👧</div>
            </div>
            
            <div className="absolute top-32 right-4 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-float shadow-lg flex items-center justify-center">
              <div className="text-white text-lg">🦊</div>
            </div>
            
            <div className="absolute bottom-32 left-4 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float-delayed shadow-lg flex items-center justify-center">
              <div className="text-white text-xl">👨</div>
            </div>
            
            <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-float shadow-lg flex items-center justify-center">
              <div className="text-white text-xl">📚</div>
            </div>
            
            <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-float-delayed shadow-lg flex items-center justify-center">
              <div className="text-white text-2xl">🦉</div>
            </div>
            
            <div className="absolute bottom-16 right-32 w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-float shadow-lg flex items-center justify-center">
              <div className="text-white text-lg">👩</div>
            </div>
            
            <div className="absolute top-40 left-16 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full animate-float-delayed shadow-lg flex items-center justify-center">
              <div className="text-white text-xl">🐻</div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            The free, fun, and effective way to learn a language!
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-duolingo-green hover:bg-duolingo-green-dark text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              size="lg"
            >
              GET STARTED
            </Button>
            
            <button className="text-duolingo-blue hover:text-duolingo-blue-dark font-bold py-4 px-8 text-lg transition-colors duration-200 uppercase tracking-wide">
              I ALREADY HAVE AN ACCOUNT
            </button>
          </div>
        </div>
      </main>

      {/* Language Selector */}
      <LanguageSelector />
    </div>
  );
};

export default Index;
