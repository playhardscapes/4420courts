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
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              We Build Courts, Not Game Skills
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 relative">
            <span className="inline-block">Ready to build your</span>{' '}
            <span className="text-blue-600 relative inline-block">
              dream kitchen?
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6 relative">
            <span className="inline-block">Where one step</span>{' '}
            <span className="text-red-500 font-bold relative inline-block">
              costs you a point
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            We don&apos;t play - we are <span className="text-blue-600 font-semibold">serious professional pickleball court builders</span> helping non-builders build better courts. 
            Professional materials, expert guidance, and tutorials to keep the process <span className="text-green-600 font-semibold">inbounds</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-not-allowed opacity-75">
              Shop Materials (Coming Soon)
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors cursor-not-allowed opacity-75">
              Rent Equipment (Coming Soon)
            </button>
          </div>

        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn From the Pros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our YouTube channel features professional court construction tutorials, material reviews, and expert tips from experienced builders.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white text-lg font-semibold">Featured Video</p>
                    <p className="text-white/80">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Professional Techniques</h3>
                    <p className="text-gray-600">Step-by-step construction methods used by commercial court builders</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Problem Solving</h3>
                    <p className="text-gray-600">Real-world solutions for common court construction challenges</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Material Reviews</h3>
                    <p className="text-gray-600">In-depth analysis of coatings, paints, and construction materials</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors cursor-not-allowed opacity-75 mb-4">
                  Subscribe to Our Channel (Coming Soon)
                </button>
                <p className="text-sm text-gray-500">
                  Be the first to know when we launch our professional court construction tutorials
                </p>
              </div>
            </div>
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
