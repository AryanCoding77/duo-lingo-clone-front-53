import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
        <div className="flex items-center mb-2 sm:mb-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-duolingo-green rounded-full flex items-center justify-center mr-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-duolingo-green rounded-full"></div>
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-duolingo-green">duolingo</span>
        </div>
        <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
          SITE LANGUAGE: ENGLISH
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-20">
        {/* Left side - Animated Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 sm:mb-10 md:mb-12 lg:mb-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <img src="/lovable-uploads/56b70118-b402-49fa-9176-d862283f1ecf.png" alt="Duolingo characters learning together" className="w-full h-full object-contain animate-float" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8 xl:pl-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
            The free, fun, and effective way to learn a language!
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-duolingo-green hover:bg-duolingo-green-dark text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" size="lg">
              GET STARTED
            </Button>
            
            <button className="text-duolingo-blue hover:text-duolingo-blue-dark font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg transition-colors duration-200 uppercase tracking-wide">
              I ALREADY HAVE AN ACCOUNT
            </button>
          </div>
        </div>
      </main>

      {/* Language Selector */}
      <LanguageSelector />

      {/* Second Section - Duplicate */}
      <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-duolingo-green">free.</span>{" "}
            <span className="text-duolingo-blue">fun.</span>{" "}
            <span className="text-duolingo-green">effective.</span>
          </h2>
          
          <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
            Learning with Duolingo is fun, and{" "}
            <span className="text-duolingo-blue font-semibold">research shows that it works!</span>{" "}
            With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining real-world communication skills.
          </p>
        </div>

        {/* Right side - Animated Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <img alt="Duolingo learning effectiveness illustration" className="w-full h-full object-contain" src="/lovable-uploads/583b6e29-4e88-457b-a94b-675daf57e35e.png" />
          </div>
        </div>
      </section>

      {/* Third Section - Backed by Science */}
      <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Left side - Animated Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <img alt="Duolingo backed by science illustration" className="w-full h-full object-contain" src="/lovable-uploads/9879c1c2-58c7-472e-a4ec-e6736866e343.png" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-duolingo-green">backed by science</span>
          </h2>
          
          <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
            We use a combination of research-backed teaching methods and delightful content to create courses that effectively teach reading, writing, listening, and speaking skills!
          </p>
        </div>
      </section>

      {/* Fourth Section - Stay Motivated */}
      <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-20 bg-gray-50">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-duolingo-green">stay motivated</span>
          </h2>
          
          <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
            We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl.
          </p>
        </div>

        {/* Right side - Animated Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <img alt="Duolingo stay motivated illustration" className="w-full h-full object-contain" src="/lovable-uploads/a43d8c16-4ae8-4b6b-ae04-f99d9e467639.png" />
          </div>
        </div>
      </section>

      {/* Fifth Section - Personalized Learning */}
      <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Left side - Animated Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <img alt="Duolingo personalized learning illustration" className="w-full h-full object-contain" src="/lovable-uploads/c3edb795-1d20-4e55-bce3-3c85059ffdc1.png" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 leading-relaxed">
            <span className="text-duolingo-green block font-bold">personalized</span>
            <span className="text-duolingo-green block font-bold my-[8px]">learning</span>
          </h2>
          
          <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
            Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.
          </p>
        </div>
      </section>

      {/* Sixth Section - Super Duolingo */}
      <section style={{
      backgroundColor: '#100f3e'
    }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Super Duo Character */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[400px] flex items-center justify-center">
                <img alt="Super Duolingo character with cape" className="w-full h-full object-contain animate-float" src="/lovable-uploads/9abd2d83-e337-423f-86c4-b59df7d77333.png" />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wide">
                Power up with
              </h2>
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-none">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  SUPER DUOLINGO
                </span>
              </h1>
              
              <Button className="bg-white text-gray-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wide">
                TRY 1 WEEK FREE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - Duolingo English Test */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-duolingo-green">duolingo english test</span>
              </h2>
              
              <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
                Our convenient, fast, and affordable English test integrates the latest assessment science and AI — empowering anyone to accurately test their English where and when they're at their best.
              </p>
              
              <Button className="bg-white border-2 border-duolingo-blue text-duolingo-blue hover:bg-duolingo-blue hover:text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wide">
                CERTIFY YOUR ENGLISH
              </Button>
            </div>

            {/* Right side - Animated Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[400px] flex items-center justify-center">
                <img alt="Duolingo English Test illustration" className="w-full h-full object-contain" src="/lovable-uploads/ee60c5dc-66e0-462b-8670-bbcfcac102b6.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eighth Section - Duolingo for Schools */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Schools Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[400px] flex items-center justify-center">
                <img alt="Duolingo for Schools illustration with character sitting on green book" className="w-full h-full object-contain" src="/lovable-uploads/c839d867-27f4-49df-afd4-3fef29cff6b9.png" />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-duolingo-green">duolingo for schools</span>
              </h2>
              
              <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
                Teachers, we're here to help you! Our free tools support your students as they learn languages through the Duolingo app, both in and out of the classroom.
              </p>
              
              <Button className="bg-white border-2 border-duolingo-blue text-duolingo-blue hover:bg-duolingo-blue hover:text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wide">
                GET YOUR CLASS STARTED
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ninth Section - Duolingo ABC */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-duolingo-green">duolingo abc</span>
              </h2>
              
              <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
                From language to literacy! With fun phonics lessons and delightful stories, Duolingo ABC helps kids ages 3–8 learn to read and write — 100% free.
              </p>
              
              <Button className="bg-white border-2 border-duolingo-blue text-duolingo-blue hover:bg-duolingo-blue hover:text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wide">
                LEARN MORE ABOUT ABC
              </Button>
            </div>

            {/* Right side - ABC Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[400px] flex items-center justify-center">
                <img alt="Duolingo ABC illustration with characters and building blocks" className="w-full h-full object-contain" src="/lovable-uploads/6af3e279-58fc-4d6e-8001-8462880cbc06.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenth Section - Duolingo Math */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Math Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[400px] flex items-center justify-center">
                <img alt="Duolingo Math illustration with green owl character and mathematical elements" className="w-full h-full object-contain" src="/lovable-uploads/db33998e-c88e-470c-9ac3-71efa96afc5a.png" />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-duolingo-green">duolingo math</span>
              </h2>
              
              <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
                Our free, bite-sized approach — but for math! Fun lessons help students get ahead in their math classes, while adults can brain train to boost their mental math skills.
              </p>
              
              <Button className="bg-white border-2 border-duolingo-blue text-duolingo-blue hover:bg-duolingo-blue hover:text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wide">
                GET BETTER AT MATH
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section - Learn a Language with Duolingo */}
      <section className="bg-duolingo-green py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            learn a language<br />
            with duolingo
          </h2>
          
          <Button className="bg-white text-duolingo-green hover:bg-gray-100 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wide">
            GET STARTED
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Duolingo Owl Character */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img 
              src="/lovable-uploads/379eeed7-157d-4241-b511-f2fc8ef11913.png" 
              alt="Duolingo owl character with floating elements" 
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px] object-contain"
            />
          </div>

          {/* Additional floating decorative elements - adjusted for better small screen visibility */}
          <div className="absolute top-10 sm:top-20 left-6 sm:left-20 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full opacity-80"></div>
          <div className="absolute top-16 sm:top-32 right-8 sm:right-32 w-4 sm:w-6 h-4 sm:h-6 bg-blue-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-32 w-8 sm:w-10 h-8 sm:h-10 bg-red-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-16 sm:bottom-32 right-6 sm:right-20 w-5 sm:w-7 h-5 sm:h-7 bg-orange-400 rounded-full opacity-75"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-duolingo-green text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* About us */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">About us</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#" className="hover:underline">Courses</a></li>
                <li><a href="#" className="hover:underline">Mission</a></li>
                <li><a href="#" className="hover:underline">Approach</a></li>
                <li><a href="#" className="hover:underline">Efficacy</a></li>
                <li><a href="#" className="hover:underline">Duolingo Handbook</a></li>
                <li><a href="#" className="hover:underline">Research</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Brand guidelines</a></li>
                <li><a href="#" className="hover:underline">Store</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Products</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#" className="hover:underline">Duolingo</a></li>
                <li><a href="#" className="hover:underline">Duolingo for Schools</a></li>
                <li><a href="#" className="hover:underline">Duolingo English Test</a></li>
                <li><a href="#" className="hover:underline">Duolingo Math</a></li>
                <li><a href="#" className="hover:underline">Podcast</a></li>
                <li><a href="#" className="hover:underline">Duolingo for Business</a></li>
                <li><a href="#" className="hover:underline">Super Duolingo</a></li>
                <li><a href="#" className="hover:underline">Gift Super Duolingo</a></li>
                <li><a href="#" className="hover:underline">Duolingo Max</a></li>
              </ul>
            </div>

            {/* Apps */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Apps</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#" className="hover:underline">Duolingo for Android</a></li>
                <li><a href="#" className="hover:underline">Duolingo for iOS</a></li>
              </ul>
            </div>

            {/* Help and support */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Help and support</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#" className="hover:underline">Duolingo FAQs</a></li>
                <li><a href="#" className="hover:underline">Schools FAQs</a></li>
                <li><a href="#" className="hover:underline">Duolingo English Test FAQs</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
              </ul>
            </div>

            {/* Privacy and terms & Social */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Privacy and terms</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm mb-6 sm:mb-8">
                <li><a href="#" className="hover:underline">Community guidelines</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Respecting your "do not sell my personal information" rights</a></li>
              </ul>

              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Social</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">TikTok</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">YouTube</a></li>
              </ul>
            </div>
          </div>

          {/* Site language section */}
          <div className="border-t border-green-400 pt-6 sm:pt-8">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Site language:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs sm:text-sm">
              <a href="#" className="hover:underline">العربية</a>
              <a href="#" className="hover:underline">বাংলা</a>
              <a href="#" className="hover:underline">Čeština</a>
              <a href="#" className="hover:underline">Deutsch</a>
              <a href="#" className="hover:underline">Ελληνικά</a>
              <a href="#" className="hover:underline">English</a>
              <a href="#" className="hover:underline">Español</a>
              <a href="#" className="hover:underline">Français</a>
              <a href="#" className="hover:underline">हिंदी</a>
              <a href="#" className="hover:underline">Magyar</a>
              <a href="#" className="hover:underline">Bahasa Indonesia</a>
              <a href="#" className="hover:underline">Italiano</a>
              <a href="#" className="hover:underline">日本語</a>
              <a href="#" className="hover:underline">한국어</a>
              <a href="#" className="hover:underline">Nederlands</a>
              <a href="#" className="hover:underline">Polski</a>
              <a href="#" className="hover:underline">Português</a>
              <a href="#" className="hover:underline">Română</a>
              <a href="#" className="hover:underline">Русский</a>
              <a href="#" className="hover:underline">svenska</a>
              <a href="#" className="hover:underline">தமிழ்</a>
              <a href="#" className="hover:underline">తెలుగు</a>
              <a href="#" className="hover:underline">ภาษาไทย</a>
              <a href="#" className="hover:underline">Tagalog</a>
              <a href="#" className="hover:underline">Türkçe</a>
              <a href="#" className="hover:underline">Українською</a>
              <a href="#" className="hover:underline">Tiếng Việt</a>
              <a href="#" className="hover:underline">中文</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
