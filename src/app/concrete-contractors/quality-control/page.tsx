'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ConcreteContractorsQualityControlPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 mb-6">
              Quality Control & <span className="text-blue-600">Documentation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Professional inspection and documentation services that verify specification compliance and protect your project with detailed quality records.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Request Quality Control Services
              </Link>
              <Link
                href="/concrete-contractors/specifications"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg"
              >
                View Our Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Inspection Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Professional Inspection & Verification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thorough inspection and documentation at every critical phase to ensure ASBA compliance and protect your project with detailed quality records.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">Comprehensive Documentation Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pre-Pour Inspection Reports</h4>
                    <p className="text-gray-600">Detailed verification of base preparation, form placement, and reinforcement installation against specifications.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pour Day Testing & Documentation</h4>
                    <p className="text-gray-600">Slump tests, core samples, and photographic documentation of concrete delivery and finishing processes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Post-Pour Quality Assessment</h4>
                    <p className="text-gray-600">Surface quality evaluation, curing documentation, and coating readiness certification.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">ASBA Compliance Verification</h4>
                    <p className="text-gray-600">Detailed records proving adherence to American Sport Court Builders Association standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Complete Project Protection</h3>
                <p className="text-gray-600">
                  Professional documentation that proves you followed specifications and meets the highest industry standards for court construction.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-heading font-bold text-blue-900 mb-4">
              "We Documented Everything Per Specification"
            </h3>
            <p className="text-blue-800 text-lg">
              Professional inspection reports and quality documentation that prove specification compliance and protect your reputation when questions arise.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Inspection Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Three-Phase Quality Control Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic inspection and documentation at each critical phase ensures nothing is missed and provides complete project protection.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Phase 1: Pre-Pour Inspection</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">Base Preparation Verification</h4>
                    <p className="text-orange-800 text-sm">Document compaction results, verify grade elevations, inspect drainage installation and compliance with specifications</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">Form and Reinforcement Inspection</h4>
                    <p className="text-orange-800 text-sm">Verify layout accuracy, elevation compliance, reinforcement placement, and spacing per ASBA standards</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">Pre-Pour Checklist Completion</h4>
                    <p className="text-orange-800 text-sm">Complete inspection checklist confirming all pre-pour requirements are met before concrete delivery</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Phase 2: Pour Day Documentation</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 mb-2">Concrete Quality Testing</h4>
                    <p className="text-red-800 text-sm">Document slump tests, pour core samples, verify concrete company delivered specified material and mix design</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 mb-2">Surface Finishing Documentation</h4>
                    <p className="text-red-800 text-sm">Photograph texture application, verify slope accuracy, document finishing techniques and timing</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 mb-2">Progress Photography</h4>
                    <p className="text-red-800 text-sm">Systematic photography of key stages, any deviations from specifications, and overall project progress</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Phase 3: Post-Pour Assessment</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">Curing Process Documentation</h4>
                    <p className="text-blue-800 text-sm">Monitor and document curing procedures, weather protection measures, and timeline adherence</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">Surface Quality Evaluation</h4>
                    <p className="text-blue-800 text-sm">Assess coating readiness, evaluate surface conditions, document any defects or areas of concern</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">Final Compliance Report</h4>
                    <p className="text-blue-800 text-sm">Comprehensive report documenting adherence to specifications and ASBA standards throughout construction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Documentation Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Protection Through Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional quality control documentation provides multiple layers of protection for your business and reputation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-8">What You Get</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">📋</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Detailed Inspection Reports</h4>
                      <p className="text-gray-600">Phase-by-phase inspection reports with photographs, measurements, and compliance verification.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">🧪</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Material Testing Documentation</h4>
                      <p className="text-gray-600">Slump test results, core sample analysis, and verification of concrete specification compliance.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">📸</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Professional Photography</h4>
                      <p className="text-gray-600">Systematic photography documenting each phase of construction and specification compliance.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">📄</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">ASBA Compliance Certification</h4>
                      <p className="text-gray-600">Official documentation proving adherence to American Sport Court Builders Association standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Liability Protection</h4>
                  <p className="text-gray-600 text-sm">Documented proof you followed specifications protects against warranty claims and disputes</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Professional Credibility</h4>
                  <p className="text-gray-600 text-sm">Industry-standard documentation demonstrates your commitment to quality and professionalism</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-1.414L7 14h10z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Client Communication</h4>
                  <p className="text-gray-600 text-sm">Professional reports help explain technical decisions and build client confidence in your work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Industry-Leading Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quality control process follows American Sport Court Builders Association standards, ensuring your project meets the highest industry requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">ASBA Compliance Standards</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Base preparation and compaction requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Concrete mix design and placement standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Surface texture and slope requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Curing and protection protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Quality control and testing procedures</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-heading font-bold text-blue-900 mb-6">Professional Documentation</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-800 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-blue-800">Detailed inspection checklists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-800 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-blue-800">Material testing results and analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-800 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-blue-800">Progressive photography documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-800 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-blue-800">Compliance certification reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-800 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-blue-800">Professional project summaries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready for Professional Quality Control?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Protect your project with professional inspection and documentation services that prove specification compliance and industry standards adherence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Request Quality Control Services
              </Link>
              <Link
                href="/concrete-contractors/specifications"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
              >
                Review Our Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}