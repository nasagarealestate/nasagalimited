import React from 'react';
export function PropertyGallery() {
  const properties = [{
    id: 1,
    title: 'Modern Duplex',
    description: 'Spacious 4-bedroom duplex with solar panels',
    image: "/IMG-20250804-WA0022.jpg",
    type: 'For Sale',
    featured: true
  }, {
    id: 2,
    title: 'Executive Office Complex',
    description: 'Contemporary office building with large windows and modern design',
    image: "/IMG-20250804-WA0021.jpg",
    type: 'For Lease',
    featured: false
  }, {
    id: 3,
    title: 'Luxury Apartment Complex',
    description: 'Multi-story residential building with premium finishes',
    image: "/IMG-20250804-WA0046.jpg",
    type: 'For Sale/Rent',
    featured: false
  }, {
    id: 4,
    title: 'Modern Family Home',
    description: 'Beautiful detached house with contemporary architecture',
    image: "/IMG-20250804-WA0045.jpg",
    type: 'For Sale',
    featured: true
  }, {
    id: 5,
    title: 'Residential Apartment Building',
    description: 'Multi-unit property with brick facade and modern amenities',
    image: "/IMG-20250804-WA0030.jpg",
    type: 'For Rent',
    featured: false
  }];
  return <section id="properties" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive selection of premium properties across
            Nigeria
          </p>
        </div>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Property 1 - Large Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg group relative">
            <img src={properties[0].image} alt={properties[0].title} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" style={{
            maxHeight: '600px'
          }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                {properties[0].type}
              </span>
              <h3 className="text-2xl font-bold mb-2">{properties[0].title}</h3>
              <p>{properties[0].description}</p>
            </div>
          </div>
          {/* Regular Property Cards */}
          {properties.slice(1).map(property => <div key={property.id} className="rounded-xl overflow-hidden shadow-lg group relative">
              <img src={property.image} alt={property.title} className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2 w-fit">
                  {property.type}
                </span>
                <h3 className="text-lg font-bold mb-1">{property.title}</h3>
                <p className="text-sm">{property.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>;
}