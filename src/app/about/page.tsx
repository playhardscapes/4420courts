export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About 4420 Courts
          </h1>
          <p className="text-xl text-gray-300">
            Empowering homeowners to create amazing backyard pickleball experiences.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pickleball is the fastest-growing sport in America, and we believe every family should have access to a quality court right in their backyard. 
              That's why we created 4420 Courts - to demystify the court building process and make it accessible to everyone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a seasoned player looking for convenience or a newcomer excited to learn, we provide the knowledge, 
              tools, and guidance you need to make informed decisions about your court project.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why 4420?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The name "4420" comes from the official pickleball court dimensions: 44 feet long by 20 feet wide. 
              These simple numbers represent the foundation of every great pickleball experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Just like those precise measurements create the perfect playing field, we believe in providing precise, 
              reliable information to help you create your perfect court.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">Comprehensive Guides</h3>
                <p className="text-gray-700 text-sm">
                  Step-by-step planning guides, surface comparisons, and budget breakdowns to help you make informed decisions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Educational Content</h3>
                <p className="text-gray-700 text-sm">
                  Learn the game, improve your skills, and understand equipment so you can maximize your court investment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">Real-World Advice</h3>
                <p className="text-gray-700 text-sm">
                  Practical tips from actual court owners about what works, what doesn't, and what they wish they'd known.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-3">Community Focus</h3>
                <p className="text-gray-700 text-sm">
                  Resources for families, neighborhoods, and communities looking to bring people together through pickleball.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}