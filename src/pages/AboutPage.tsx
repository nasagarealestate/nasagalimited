import React from 'react';
import { Building2, TrendingUp, Eye, Handshake, Users, Award, Target } from 'lucide-react';

function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgb(17, 146, 229) 0%, rgb(12, 110, 186) 100%)'
          }}
        ></div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  We're building Nigeria's real estate future — today.
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                  Nasaga Limited is a reputable and registered real estate company headquartered in Abuja, Nigeria. With over a decade of experience and expertise, we have established ourselves as a trusted and reliable partner in the industry.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                  <a
                    href="#vision"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ color: 'rgb(70, 182, 255)' }}
                  >
                    Our Vision
                  </a>
                  <a
                    href="#achievements"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ color: 'rgb(70, 182, 255)' }}
                  >
                    Achievements
                  </a>
                  <a
                    href="#partnership"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ color: 'rgb(70, 182, 255)' }}
                  >
                    Partnership
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ color: 'rgb(70, 182, 255)' }}
                  >
                    Contact us
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src="/Group 6.png" 
                  alt="Nasaga Limited Hero Image" 
                  className="w-full h-auto rounded-2xl"
                  style={{ 
                    boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6" style={{ backgroundColor: 'rgb(245, 246, 249)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#vision" className="text-base font-medium hover:underline" style={{ color: 'rgb(70, 182, 255)' }}>
              Vision
            </a>
            <a href="#achievements" className="text-base font-medium hover:underline" style={{ color: 'rgb(70, 182, 255)' }}>
              Achievements
            </a>
            <a href="#partnership" className="text-base font-medium hover:underline" style={{ color: 'rgb(70, 182, 255)' }}>
              Partnership
            </a>
            <a href="#contact" className="text-base font-medium hover:underline" style={{ color: 'rgb(70, 182, 255)' }}>
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section with Stats */}
      <section id="vision" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <p className="text-base font-bold mb-4" style={{ color: 'rgb(17, 146, 229)' }}>Our Vision</p>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'rgb(39, 54, 83)' }}>
                    At Nasaga Limited, our ultimate goal is to make homeownership a reality for all, regardless of socio-economic status.
                  </h2>
                </div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgb(39, 54, 83)' }}>
                  We strive to bridge the housing gap in Nigeria by providing access to affordable and quality housing for individuals from all walks of life. Our mission is to contribute significantly to Nigeria's housing development, benchmarking global standards and best practices from developed countries worldwide. We aim to create sustainable, comfortable, & safe living spaces that enhance the quality of life for our customers, while also promoting economic growth and social prosperity.
                </p>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl" style={{ 
                    backgroundColor: 'rgb(255, 255, 255)',
                    border: '1px solid rgb(238, 240, 246)',
                    boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
                  }}>
                    <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgb(242, 249, 254)' }}>
                      <Users size={24} style={{ color: 'rgb(70, 182, 255)' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(39, 54, 83)' }}>Unparalleled network</h3>
                    <p className="text-sm" style={{ color: 'rgb(39, 54, 83)' }}>We partner with 500+ of the top real estate agents and developers across Nigeria.</p>
                  </div>
                  
                  <div className="p-6 rounded-xl" style={{ 
                    backgroundColor: 'rgb(255, 255, 255)',
                    border: '1px solid rgb(238, 240, 246)',
                    boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
                  }}>
                    <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgb(242, 249, 254)' }}>
                      <TrendingUp size={24} style={{ color: 'rgb(70, 182, 255)' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(39, 54, 83)' }}>Proven success</h3>
                    <p className="text-sm" style={{ color: 'rgb(39, 54, 83)' }}>We support over ₦50B of real estate transactions on our platform every year.</p>
                  </div>
                  
                  <div className="p-6 rounded-xl" style={{ 
                    backgroundColor: 'rgb(255, 255, 255)',
                    border: '1px solid rgb(238, 240, 246)',
                    boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
                  }}>
                    <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgb(242, 249, 254)' }}>
                      <Award size={24} style={{ color: 'rgb(70, 182, 255)' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(39, 54, 83)' }}>Operating at scale</h3>
                    <p className="text-sm" style={{ color: 'rgb(39, 54, 83)' }}>We've worked with over 10,000 happy clients across Nigeria and counting.</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src="/awards nasaga 1.png" 
                  alt="Nasaga Awards" 
                  className="w-full h-auto rounded-2xl"
                  style={{ 
                    boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(242, 249, 254)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <img 
                  src="/nasaga-billboard 1.png" 
                  alt="Nasaga Billboard" 
                  className="w-full h-auto rounded-2xl"
                  style={{ 
                    boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
                  }}
                />
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: 'rgb(39, 54, 83)' }}>
                  By fostering strategic partnerships and driving innovation in property development and management, Nasaga Limited aims to set new standards in Nigeria's real estate landscape.
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                  Our commitment to excellence and innovation has positioned us as leaders in transforming Nigeria's real estate industry, creating sustainable solutions that benefit all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: 'rgb(39, 54, 83)' }}>
                  By achieving this goal, we hope to play a vital role in shaping the future of Nigeria's real estate industry and creating a better living environment for generations to come.
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                    Nasaga Limited is the essential technology platform used by hundreds of thousands of agents, developers, and their clients across Nigeria.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                    With our commitment to excellence and innovation, we continue to set new benchmarks in the Nigerian real estate market, ensuring every client receives world-class service and solutions.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src="https://i.ibb.co/PZtppF42/property-1.jpg"
                  alt="Nasaga Property Development" 
                  className="w-full h-auto rounded-2xl"
                  style={{ 
                    boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(242, 249, 254)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-base font-bold mb-4" style={{ color: 'rgb(17, 146, 229)' }}>Our Achievements</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'rgb(39, 54, 83)' }}>
                Our Achievements
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl" style={{ 
                backgroundColor: 'rgb(242, 248, 254)',
                border: '1px solid rgb(238, 240, 246)'
              }}>
                <div className="mb-4">
                  <TrendingUp size={32} style={{ color: 'rgb(70, 182, 255)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(39, 54, 83)' }}>
                  "Landlord's Bus Stop"
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                  Over the years, we have successfully delivered thousands of projects, earning us the nickname "Landlord's Bus stop". Our commitment to excellence and customer satisfaction has made us a household name in the Nigerian real estate market.
                </p>
              </div>
              
              <div className="p-8 rounded-xl" style={{ 
                backgroundColor: 'rgb(242, 248, 254)',
                border: '1px solid rgb(238, 240, 246)'
              }}>
                <div className="mb-4">
                  <Target size={32} style={{ color: 'rgb(70, 182, 255)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(39, 54, 83)' }}>
                  Innovative Solutions
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                  At Nasaga Limited, we take pride in our ability to provide innovative and tailored solutions to our clients' real estate needs. Our team of experts is dedicated to ensuring that every transaction is seamless and stress-free.
                </p>
              </div>
              
              <div className="p-8 rounded-xl" style={{ 
                backgroundColor: 'rgb(242, 248, 254)',
                border: '1px solid rgb(238, 240, 246)'
              }}>
                <div className="mb-4">
                  <Eye size={32} style={{ color: 'rgb(70, 182, 255)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(39, 54, 83)' }}>
                  Trusted Partner
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                  Making us the go-to partner for all your real estate requirements. We strive to bridge the housing gap in Nigeria by providing access to affordable and quality housing for individuals from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <p className="text-base font-bold mb-4" style={{ color: 'rgb(17, 146, 229)' }}>Our Partnership</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8" style={{ color: 'rgb(39, 54, 83)' }}>
                Strategic Partnerships
              </h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: 'rgb(39, 54, 83)' }}>
                We have had the privilege of collaborating with esteemed organizations, including the prestigious World Trade Center in Abuja, further solidifying our reputation as a trusted and reliable partner in the real estate industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="p-8 rounded-xl" style={{ 
                backgroundColor: 'rgb(242, 249, 254)',
                border: '1px solid rgb(238, 240, 246)',
                boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
              }}>
                <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                  <Handshake size={32} style={{ color: 'rgb(70, 182, 255)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(39, 54, 83)' }}>
                  World Trade Center Abuja
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                  Strategic collaboration with one of Nigeria's most prestigious business centers, enhancing our market presence and credibility.
                </p>
              </div>
              
              <div className="p-8 rounded-xl" style={{ 
                backgroundColor: 'rgb(242, 249, 254)',
                border: '1px solid rgb(238, 240, 246)',
                boxShadow: 'rgba(108, 129, 171, 0.3) 0px 14px 60px -20px'
              }}>
                <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                  <Building2 size={32} style={{ color: 'rgb(70, 182, 255)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(39, 54, 83)' }}>
                  Innovation in Real Estate
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: 'rgb(39, 54, 83)' }}>
                  By fostering strategic partnerships and driving innovation in property development and management, Nasaga Limited aims to set new standards in Nigeria's real estate landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: 'rgb(39, 54, 83)' }}>
                  Contact us
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgb(39, 54, 83)' }}>
                  We're real people (no robots here!) who love helping home buyers, sellers, and our real estate agent and developer partners succeed. For immediate service during business hours, please call us at the number below.
                </p>
                <a 
                  href="tel:+2349046583307" 
                  className="text-2xl font-bold hover:underline"
                  style={{ color: 'rgb(70, 182, 255)' }}
                >
                  +234 904 658 3307
                </a>
              </div>
              
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(39, 54, 83)' }}>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(39, 54, 83)' }}>
                      Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="Email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(39, 54, 83)' }}>
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      placeholder="Phone number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(39, 54, 83)' }}>
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Hey Nasaga Limited⏤I'd like to know more, please contact me."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <button 
                    className="w-full py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: 'rgb(17, 146, 229)',
                      color: 'rgb(255, 255, 255)'
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgb(17, 146, 229) 0%, rgb(12, 110, 186) 100%)'
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Work With Us?
            </h2>
            <p className="text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied clients who have made their real estate dreams a reality with Nasaga Limited.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white font-semibold rounded-xl border-2 border-white hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl text-lg hover:scale-105"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgb(17, 146, 229)',
              }}
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
