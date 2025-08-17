import { BeakerIcon, CpuChipIcon, GlobeAmericasIcon, ChartBarIcon, WrenchScrewdriverIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const researchAreas = [
  {
    icon: BeakerIcon,
    title: "Materials Science",
    description: "Advanced polymer research for next-generation court surfaces",
    color: "bg-blue-500",
    projects: [
      "Ultra-durable acrylic formulations",
      "Weather-resistant coating technology",
      "Impact-absorbing surface materials",
      "Anti-slip texture optimization"
    ]
  },
  {
    icon: CpuChipIcon,
    title: "Smart Surface Technology",
    description: "IoT-enabled courts with real-time monitoring capabilities",
    color: "bg-purple-500",
    projects: [
      "Embedded sensor networks",
      "Court condition monitoring",
      "Performance tracking systems",
      "Predictive maintenance alerts"
    ]
  },
  {
    icon: GlobeAmericasIcon,
    title: "Sustainability Research",
    description: "Eco-friendly materials and carbon-neutral construction",
    color: "bg-green-500",
    projects: [
      "100% recyclable surface materials",
      "Bio-based coating components",
      "Carbon footprint reduction",
      "Circular economy integration"
    ]
  },
  {
    icon: ChartBarIcon,
    title: "Performance Analytics",
    description: "Data-driven optimization of court playing characteristics",
    color: "bg-orange-500",
    projects: [
      "Ball bounce consistency studies",
      "Player biomechanics analysis",
      "Surface friction optimization",
      "Climate adaptation research"
    ]
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Construction Innovation",
    description: "Revolutionary installation methods and tools",
    color: "bg-red-500",
    projects: [
      "Rapid installation techniques",
      "Quality control automation",
      "Precision application tools",
      "Modular construction systems"
    ]
  },
  {
    icon: AcademicCapIcon,
    title: "Industry Standards",
    description: "Developing next-generation testing protocols",
    color: "bg-indigo-500",
    projects: [
      "Enhanced durability testing",
      "Performance benchmarking",
      "Safety standard development",
      "Quality assurance protocols"
    ]
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Pioneering the future of court construction through multidisciplinary research, 
              advanced materials science, and innovative technology integration.
            </p>
            <div className="inline-block px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-semibold">
              6 Active Research Areas • 15+ Ongoing Projects
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Research Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each research area represents a critical component in advancing court construction technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Active Projects:</h4>
                    <ul className="space-y-2">
                      {area.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-8 py-4">
                  <a href="/contact" className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
              Our Research Methodology
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600 mb-4">01</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Scientific Rigor</h3>
                <p className="text-gray-600">
                  Peer-reviewed protocols, controlled testing environments, and reproducible results
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600 mb-4">02</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Real-World Testing</h3>
                <p className="text-gray-600">
                  Field trials, long-term studies, and validation in diverse climate conditions
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600 mb-4">03</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Industry Collaboration</h3>
                <p className="text-gray-600">
                  Partnerships with manufacturers, universities, and professional organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Interested in Collaborative Research?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            We welcome partnerships with academic institutions, industry leaders, and innovative companies 
            committed to advancing court construction technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/partnerships" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Partnership Programs
            </a>
            <a href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors">
              Contact Research Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}