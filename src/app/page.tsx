import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Coming Soon Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="text-lg font-semibold">
            🚧 COMING SOON - New Content & Products Launching Soon! 🚧
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              We Build Courts, Not Game Skills
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Looking to Build a New <span className="text-blue-600">Kitchen</span>?
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
            The Kind You <span className="text-green-600">Can't Step In</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            We don&apos;t play pickleball - we build the courts where champions are made. 
            Professional materials, expert guidance, and everything contractors need to build courts that last.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-not-allowed opacity-75">
              Shop Materials (Coming Soon)
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors cursor-not-allowed opacity-75">
              Rent Equipment (Coming Soon)
            </button>
          </div>

          {/* YouTube Channel Teaser */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">YouTube Channel Coming Soon!</h3>
            <p className="text-gray-600 mb-4">
              Professional court construction tutorials, material reviews, and contractor tips. 
              Subscribe to be notified when we launch!
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-not-allowed opacity-75">
              Subscribe (Coming Soon)
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            We&apos;re Court Construction Experts
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Not players, not coaches - we&apos;re builders who understand what makes a great court
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5m6 0v-4h4v4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Materials</h3>
              <p className="text-gray-600">Professional-grade surfacing materials, line paint, and tools used by commercial court builders.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Equipment Rental</h3>
              <p className="text-gray-600">Rent professional squeegees, line machines, and specialized tools for court construction and maintenance.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Contractor Resources</h3>
              <p className="text-gray-600">Concrete specs, coating processes, and professional tips for contractors building pickleball courts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Who We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Contractors & Builders</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Concrete slab specifications and requirements
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional coating application techniques
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Material sourcing and bulk pricing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Equipment rental for specialized tools
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">DIY Court Builders</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Step-by-step construction guides
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Material calculators and specifications
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Tool rentals for weekend projects
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic court rules and dimensions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Courts That Last?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our community of professional court builders and get notified when we launch our full product line and YouTube channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors cursor-not-allowed opacity-75">
              Get Notified (Coming Soon)
            </button>
            <Link 
              href="/planning-guide" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Planning Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
