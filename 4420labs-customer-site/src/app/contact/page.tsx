export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Contact Research Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with our researchers, explore collaboration opportunities, 
              or learn more about our ongoing projects and findings.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Research Inquiries */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Research Inquiries</h3>
                <p className="text-gray-600 mb-6">
                  Questions about our research projects, methodology, or findings
                </p>
                <a href="mailto:research@4420labs.com" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  research@4420labs.com
                </a>
              </div>

              {/* Partnership Opportunities */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Partnership Opportunities</h3>
                <p className="text-gray-600 mb-6">
                  Collaboration proposals, joint research initiatives, and industry partnerships
                </p>
                <a href="mailto:partnerships@4420labs.com" className="text-secondary-600 font-semibold hover:text-secondary-700 transition-colors">
                  partnerships@4420labs.com
                </a>
              </div>

              {/* Media & Publications */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Media & Publications</h3>
                <p className="text-gray-600 mb-6">
                  Press inquiries, publication requests, and media resources
                </p>
                <a href="mailto:media@4420labs.com" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  media@4420labs.com
                </a>
              </div>
            </div>

            {/* Research Team */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
                Research Team Leadership
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Dr. Materials Science</h3>
                  <p className="text-primary-600 font-semibold mb-3">Director of Materials Research</p>
                  <p className="text-gray-600 text-sm">
                    Leading polymer science and surface coating development
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Prof. Technology Innovation</h3>
                  <p className="text-primary-600 font-semibold mb-3">Smart Systems Research Lead</p>
                  <p className="text-gray-600 text-sm">
                    IoT integration and performance monitoring systems
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Dr. Sustainability Research</h3>
                  <p className="text-primary-600 font-semibold mb-3">Environmental Impact Director</p>
                  <p className="text-gray-600 text-sm">
                    Eco-friendly materials and carbon-neutral solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
                Research Facility
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">4420 Labs Research Center</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Advanced Materials Testing Lab<br />
                      Virginia Research Park
                    </p>
                    <p className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      research@4420labs.com
                    </p>
                    <p className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (540) 384-4854
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Lab Hours & Visits</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Research Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                    <p><strong>Lab Tours:</strong> Available by appointment</p>
                    <p><strong>Collaboration Meetings:</strong> Scheduled upon request</p>
                  </div>
                  
                  <div className="mt-6">
                    <a href="mailto:research@4420labs.com" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block">
                      Schedule Lab Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}