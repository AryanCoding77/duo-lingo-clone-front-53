import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
const Index = () => {
  return <div className="min-h-screen bg-white">
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
        {/* Left side - Animated Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <img src="/lovable-uploads/56b70118-b402-49fa-9176-d862283f1ecf.png" alt="Duolingo characters learning together" className="w-full h-full object-contain animate-float" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            The free, fun, and effective way to learn a language!
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-duolingo-green hover:bg-duolingo-green-dark text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" size="lg">
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
    </div>;
};
export default Index;