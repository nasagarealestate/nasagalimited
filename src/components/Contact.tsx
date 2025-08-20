import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

export function Contact() {
  const offices = [
    {
      title: 'Head Office (Abuja)',
      address: 'No. 5 Mubi Close, Off Emeka Anyaoku Street, Area 11, Abuja, Nigeria',
      phone: '09046583307'
    },
    {
      title: 'Branch Office (Kano)',
      address: 'Yammusa Plaza, Ring Road, Hotoro By-pass, Kano State, Nigeria',
      phone: '07042722548'
    },
    {
      title: 'Branch Office (Kaduna)',
      address: 'The Nexus Space, No. 8 Bida Road Central Business District, Kaduna State, Nigeria',
      phone: '09046583307'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Contact Us</h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: 'rgb(70, 182, 255)' }}
          ></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Get in touch with our team of experts to discuss your real estate needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <div 
              className="p-8 rounded-lg border"
              style={{
                backgroundColor: 'rgb(17, 146, 229)',
                borderColor: 'rgb(17, 146, 229)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-white font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded border bg-white/10 text-white placeholder-blue-200 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-white font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded border bg-white/10 text-white placeholder-blue-200 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-white font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded border bg-white/10 text-white placeholder-blue-200 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-normal py-3 px-6 rounded border hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    color: 'rgb(70, 182, 255)',
                    borderColor: 'rgb(238, 240, 246)',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Office Information */}
          <div>
            <div 
              className="p-8 rounded-lg border h-full"
              style={{
                backgroundColor: 'rgb(249, 250, 251)',
                borderColor: 'rgb(229, 231, 235)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Our Offices
              </h3>
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgb(238, 240, 246)' }}
                      >
                        <MapPinIcon 
                          className="h-5 w-5" 
                          style={{ color: 'rgb(70, 182, 255)' }}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {office.title}
                      </h4>
                      <p className="text-gray-600 mb-3 leading-relaxed">{office.address}</p>
                      <div className="flex items-center text-gray-700">
                        <PhoneIcon className="h-4 w-4 mr-2" />
                        <span className="font-medium">{office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Contact Email */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgb(238, 240, 246)' }}
                      >
                        <MailIcon 
                          className="h-5 w-5" 
                          style={{ color: 'rgb(70, 182, 255)' }}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        Email Us
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        info@nasagalimited.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
