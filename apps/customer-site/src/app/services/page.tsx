import { CheckCircleIcon, AcademicCapIcon, WrenchScrewdriverIcon, PaintBrushIcon, CogIcon, BuildingOffice2Icon, SparklesIcon } from '@heroicons/react/24/solid';

const serviceLevels = [
  {
    id: 1,
    name: 'Free DIY Resources',
    priceRange: '$0',
    description: 'Get started with our comprehensive free resources. Perfect for DIY builders who want professional guidance without the cost.',
    icon: AcademicCapIcon,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    weProvide: [
      'General consultation materials (downloadable)',
      'Material lists and sourcing guidance',
      'Instructional video library access',
      'Basic expert guidance'
    ],
    youHandle: [
      'All physical work',
      'Equipment procurement',
      'Material purchasing',
      'Day-to-day execution'
    ],
    ideal: 'DIY enthusiasts with construction experience',
    note: 'Upgrade to Level 2 membership for personalized consultation'
  },
  {
    id: 2,
    name: 'Monthly Membership',
    priceRange: '$49.99/month',
    description: 'Get ongoing support with monthly consultation calls and exclusive access to our expert community.',
    icon: WrenchScrewdriverIcon,
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    weProvide: [
      'Everything from Level 1',
      '30-minute monthly Zoom consultation',
      'Access to private member community',
      'Priority email support',
      'Cancel anytime'
    ],
    youHandle: [
      'Most physical work',
      'Material coordination',
      'Equipment management',
      'Primary execution'
    ],
    ideal: 'Ambitious DIYers who want ongoing support'
  },
  {
    id: 3,
    name: 'Coating & Lining Specialist',
    priceRange: '$10,000-15,000',
    description: 'We handle the technical finish work that makes or breaks a court. You handle the foundation, we deliver the professional playing surface.',
    icon: PaintBrushIcon,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    weProvide: [
      'Professional surface coating',
      'Precise court lining',
      'Color consultation',
      'Surface preparation expertise'
    ],
    youHandle: [
      'Excavation and base prep',
      'Concrete pour',
      'Curing process',
      'Initial site preparation'
    ],
    ideal: 'Contractors who want professional finishing'
  },
  {
    id: 4,
    name: 'Project Management + Finish',
    priceRange: '$15,000-25,000',
    description: 'We become your project partner. We help you find the right contractors and ensure quality execution, plus handle all professional finishing.',
    icon: CogIcon,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    weProvide: [
      'Contractor vetting and recommendations',
      'On-site supervision for concrete pour',
      'Complete coating and lining',
      'Quality control oversight'
    ],
    youHandle: [
      'Contractor hiring decisions',
      'Overall project coordination',
      'Payment management',
      'Timeline management'
    ],
    ideal: 'Busy homeowners who want professional results'
  },
  {
    id: 5,
    name: 'Full Project Management',
    priceRange: '$30,000-45,000',
    description: 'Complete project oversight from start to finish. We manage everything so you can focus on the excitement of getting your dream court.',
    icon: BuildingOffice2Icon,
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    weProvide: [
      'Source and vet all contractors',
      'Daily on-site construction oversight',
      'Complete coating and lining',
      'Project timeline management'
    ],
    youHandle: [
      'Final approval decisions',
      'Payment processing',
      'Vision and preferences',
      'Enjoy the process'
    ],
    ideal: 'Hands-off homeowners who want turnkey service'
  },
  {
    id: 5.5,
    name: 'Premium Personalized',
    priceRange: 'Contact for Pricing',
    description: 'Every detail customized to your vision. Premium materials, custom graphics, and unlimited revisions until perfect.',
    icon: SparklesIcon,
    color: 'bg-rose-500',
    lightColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    weProvide: [
      'Everything from Level 5',
      'Custom logos and court graphics',
      'Landscape planning coordination',
      'Premium finishes and accessories'
    ],
    youHandle: [
      'Approval and payment decisions',
      'Design preference input',
      'Vision and customization choices',
      'Enjoy your custom court'
    ],
    ideal: 'Luxury homeowners wanting a signature court'
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Our Services</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Level of Involvement
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            From DIY guidance to complete turnkey service, we have a solution that fits your timeline, budget, and involvement preference. Every level delivers professional results.
          </p>
        </div>
      </div>

      {/* Service Levels */}
      <div className="relative py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:gap-12">
            {serviceLevels.map((level) => (
              <div key={level.id} className="relative">
                <div className={`group relative bg-white rounded-2xl border-2 ${level.borderColor} p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Header Section */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 ${level.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <level.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className={`inline-block px-3 py-1 text-sm font-semibold ${level.lightColor} text-gray-700 rounded-full mb-2`}>
                            Level {level.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {level.name}
                          </h3>
                          <p className="text-xl font-semibold text-green-600">
                            {level.priceRange}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        {level.description}
                      </p>
                      
                      <div className={`inline-block px-4 py-2 ${level.lightColor} rounded-lg mb-3`}>
                        <span className="text-sm font-semibold text-gray-700">
                          Ideal for: {level.ideal}
                        </span>
                      </div>
                      
                      {level.note && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-sm text-yellow-800 font-medium">
                            💡 {level.note}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-2/3">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* We Provide */}
                        <div className="bg-green-50 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5" />
                            We Provide
                          </h4>
                          <ul className="space-y-2">
                            {level.weProvide.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-green-700 font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* You Handle */}
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5" />
                            You Handle
                          </h4>
                          <ul className="space-y-2">
                            {level.youHandle.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-blue-700 font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6 flex justify-end">
                    <a
                      href="/contact"
                      className={`${level.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                    >
                      Learn More About Level {level.id}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Level Is Right for You?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss your project, timeline, and preferences to find the perfect service level for your dream court.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get a Custom Consultation
              </a>
              <a
                href="/portfolio"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Our Builds
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}