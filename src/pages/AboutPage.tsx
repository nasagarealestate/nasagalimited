import { useEffect, useRef } from 'react';
import { HomeIcon, TargetIcon, AwardIcon } from 'lucide-react';

export function AboutPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 translate-y-8 transition-all duration-1000 animate-on-scroll">
            Building Nigeria's Future, One Home at a Time
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <section className="mb-16 opacity-0 translate-y-8 transition-all duration-1000 animate-on-scroll">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Welcome to Nasaga Limited, a premier real estate company headquartered in the heart of Abuja, Nigeria. 
            With over a decade of experience, we have established ourselves as a trusted partner in the industry. 
            We've earned the affectionate nickname "Landlord's Bus Stop," as we are the final, reliable destination 
            for aspiring homeowners and property investors.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-16 opacity-0 translate-y-8 transition-all duration-1000 animate-on-scroll">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-700">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <TargetIcon className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to make homeownership an attainable reality for all Nigerians, regardless of socio-economic status. 
              We are driven to create a nation where every individual has access to affordable and quality housing.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16 opacity-0 translate-y-8 transition-all duration-1000 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-700 p-3 rounded-lg mr-4">
                <HomeIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Nasaga Limited, we are on a mission to redefine the real estate landscape in Nigeria. We achieve this by:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Bridging the Housing Gap</h3>
                <p className="text-gray-600">
                  Contributing significantly to Nigeria's housing development by creating accessible living solutions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Benchmarking Excellence</h3>
                <p className="text-gray-600">
                  Adhering to global standards and incorporating international best practices in every project.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Creating Quality Lifestyles</h3>
                <p className="text-gray-600">
                  Designing and building sustainable, comfortable, and safe living spaces that enhance our customers' quality of life.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Promoting Growth</h3>
                <p className="text-gray-600">
                  Fostering economic growth and social prosperity, playing a vital role in creating a better living environment for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Recognition Section */}
        <section className="mb-16 opacity-0 translate-y-8 transition-all duration-1000 animate-on-scroll">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <AwardIcon className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Impact & Recognition</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the years, we have successfully delivered thousands of projects, making us a household name in the 
                Nigerian real estate market. Our commitment to excellence and customer satisfaction is paramount. Our expert 
                team provides innovative, tailored solutions, ensuring every transaction is seamless and stress-free and 
                making us the go-to partner for all your real estate requirements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our reputation is strengthened by strategic collaborations with esteemed organizations, including a proud 
                partnership with the prestigious World Trade Center in Abuja. This commitment to innovation and excellence 
                is consistently recognized, as highlighted by our participation in events like the AIDCA AWARDS 2024 at the 
                Transcorp Hilton, Abuja.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mt-6">
                <p className="text-lg text-blue-800 font-medium text-center">
                  By fostering key partnerships and driving innovation, Nasaga Limited continues to set new standards 
                  in Nigeria's real estate sector.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Default export for lazy loading
export default AboutPage;
