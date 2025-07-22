import { PhoneIcon, VideoCameraIcon, ClipboardDocumentListIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const processSteps = [
  {
    id: 1,
    name: 'Initial Consultation',
    description: 'Every great project starts with understanding your vision. We begin with a comprehensive phone or video call to discuss your goals, timeline, and preferences.',
    icon: PhoneIcon,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    details: [
      'Understand your vision and goals',
      'Discuss timeline and budget expectations',
      'Review your property and space requirements',
      'Explain our service levels and approach'
    ],
    duration: '30-45 minutes',
    deliverable: 'Clear understanding of your needs'
  },
  {
    id: 2,
    name: 'Service Level Assessment',
    description: 'Based on our consultation, we help you identify the perfect service level that matches your involvement preference, timeline, and budget.',
    icon: ClipboardDocumentListIcon,
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    details: [
      'Analyze your specific situation and needs',
      'Review service levels 1-5.5 in detail',
      'Discuss what you want to handle vs. what we handle',
      'Provide transparent pricing for your chosen level'
    ],
    duration: '15-30 minutes',
    deliverable: 'Customized service level recommendation'
  },
  {
    id: 3,
    name: 'Project Planning',
    description: 'Once we agree on the service level, we create a detailed project plan tailored to your specific situation and chosen level of involvement.',
    icon: VideoCameraIcon,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    details: [
      'Site evaluation and technical assessment',
      'Create detailed project timeline',
      'Develop material lists and specifications',
      'Coordinate contractor requirements (if applicable)'
    ],
    duration: '1-2 weeks',
    deliverable: 'Complete project roadmap'
  },
  {
    id: 4,
    name: 'Team Assembly',
    description: 'We assemble the right team based on your service level - from basic guidance for DIY projects to full contractor management for turnkey builds.',
    icon: UserGroupIcon,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    details: [
      'Identify required expertise for your project',
      'Vet and coordinate contractors (Levels 4-5.5)',
      'Establish communication protocols',
      'Set up project management systems'
    ],
    duration: '3-5 days',
    deliverable: 'Project team ready to execute'
  },
  {
    id: 5,
    name: 'Project Execution',
    description: 'Your project begins with the level of support you chose. We provide guidance, oversight, or full management - whatever fits your needs best.',
    icon: CheckCircleIcon,
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    details: [
      'Execute according to your chosen service level',
      'Provide regular updates and communication',
      'Handle quality control at appropriate level',
      'Ensure professional results regardless of level'
    ],
    duration: 'Varies by project scope',
    deliverable: 'Your dream court, built right'
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Our Process</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            A Consultative Approach to Your Perfect Court
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We start every project with a conversation. Our consultative approach ensures we understand your vision, timeline, and preferences before recommending the perfect service level for your unique situation.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Start with a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="relative py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
                
                <div className={`group relative bg-white rounded-2xl border-2 ${step.borderColor} p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon and Header */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className={`inline-block px-3 py-1 text-sm font-semibold ${step.lightColor} text-gray-700 rounded-full mb-2`}>
                            Step {step.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {step.name}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-2/3">
                      <div className="grid md:grid-cols-1 gap-6">
                        {/* Details */}
                        <div className={`${step.lightColor} rounded-xl p-6`}>
                          <h4 className="text-lg font-bold text-gray-800 mb-4">
                            What Happens in This Step:
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <div className={`w-2 h-2 ${step.color.replace('bg-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                                <span className="text-gray-700 font-medium">{detail}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-gray-800 mb-1">Duration:</h5>
                              <p className="text-gray-600">{step.duration}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-800 mb-1">Deliverable:</h5>
                              <p className="text-gray-600">{step.deliverable}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why This Approach Works */}
      <div className="py-16 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Consultative Approach Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every court project is unique. Our process ensures we understand your specific needs before recommending a solution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Pressure Sales</h3>
              <p className="text-gray-600">
                We focus on understanding your needs first, then recommend the right solution. No pushy sales tactics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ClipboardDocumentListIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                Every project gets a tailored approach based on your timeline, budget, and involvement preference.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Results</h3>
              <p className="text-gray-600">
                Regardless of service level, we ensure professional-quality results through expert guidance and oversight.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start the Conversation?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our free consultation is the first step toward your dream court. No commitment required - just an honest conversation about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Schedule Free Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Service Levels
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}