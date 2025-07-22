import Link from "next/link";

export default function PlanningGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">
            ← Back to 4420 Courts
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-green-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Planning Your Perfect Pickleball Court
          </h1>
          <p className="text-xl text-green-100">
            Everything you need to know before breaking ground on your backyard court project.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Start Checklist */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">Quick Start Checklist</h2>
            <div className="space-y-4">
              {[
                "Measure your available space (minimum 20' x 44' needed)",
                "Check local building codes and HOA requirements", 
                "Determine your budget ($3,000 - $15,000+ range)",
                "Choose your surface type (concrete, asphalt, or modular)",
                "Plan for drainage and site preparation",
                "Consider lighting for evening play"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Court Dimensions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Official Court Dimensions</h3>
              <div className="space-y-3">
                <p><strong>Playing Area:</strong> 20&apos; x 44&apos;</p>
                <p><strong>Recommended Total:</strong> 30&apos; x 60&apos;</p>
                <p><strong>Minimum Total:</strong> 24&apos; x 54&apos;</p>
                <p><strong>Net Height:</strong> 36&quot; at ends, 34&quot; at center</p>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Tip:</strong> Extra space around the court improves safety and playability!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Budget Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>DIY Concrete Base:</span>
                  <span className="font-semibold">$3,000-$6,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Professional Install:</span>
                  <span className="font-semibold">$8,000-$15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium Materials:</span>
                  <span className="font-semibold">$12,000-$25,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Lighting (optional):</span>
                  <span className="font-semibold">$2,000-$5,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step by Step Guide */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">Step-by-Step Planning Process</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">1. Site Assessment</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Measure your yard carefully</li>
                  <li>• Check for underground utilities (call 811)</li>
                  <li>• Assess drainage and slope</li>
                  <li>• Consider sun exposure and wind patterns</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">2. Permits & Approvals</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Check local building codes</li>
                  <li>• Review HOA guidelines</li>
                  <li>• Apply for permits if required</li>
                  <li>• Consider neighbor relations</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">3. Surface Selection</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Concrete: Most durable, professional feel</li>
                  <li>• Asphalt: Cost-effective, good performance</li>
                  <li>• Modular tiles: DIY-friendly, quick install</li>
                  <li>• Consider climate and usage patterns</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">4. Getting Quotes</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Get 3+ contractor estimates</li>
                  <li>• Compare materials and warranties</li>
                  <li>• Ask about maintenance requirements</li>
                  <li>• Check references and portfolio</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Ready for the Next Step?</h3>
              <p className="text-gray-700 mb-6">
                Learn about different surface options and find the perfect match for your needs and budget.
              </p>
              <Link 
                href="/surface-options"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Explore Surface Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}