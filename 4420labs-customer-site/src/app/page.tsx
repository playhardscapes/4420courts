import Image from 'next/image';
import { BeakerIcon, CpuChipIcon, GlobeAmericasIcon, ChartBarIcon, UserGroupIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const researchAreas = [
  {
    icon: BeakerIcon,
    title: "Materials Science",
    description: "Advanced polymer research, surface durability testing, and next-generation coating formulations",
    color: "bg-blue-500"
  },
  {
    icon: CpuChipIcon,
    title: "Smart Surface Technology",
    description: "IoT-enabled courts, performance monitoring systems, and data-driven surface optimization",
    color: "bg-purple-500"
  },
  {
    icon: GlobeAmericasIcon,
    title: "Sustainability Research",
    description: "Eco-friendly materials, recycling technologies, and carbon-neutral construction methods",
    color: "bg-green-500"
  },
  {
    icon: ChartBarIcon,
    title: "Performance Analytics",
    description: "Ball bounce consistency, player impact studies, and biomechanical surface interactions",
    color: "bg-orange-500"
  }
];

const currentProjects = [
  {
    title: "Next-Gen Acrylic Formulation",
    status: "Active Research",
    timeline: "2025-2026",
    description: "Developing weather-resistant coatings with 50% longer lifespan",
    progress: 75
  },
  {
    title: "Smart Court Monitoring System",
    status: "Prototype Testing",
    timeline: "2025",
    description: "IoT sensors for real-time surface condition monitoring",
    progress: 60
  },
  {
    title: "Sustainable Surface Materials",
    status: "Lab Testing",
    timeline: "2025-2027",
    description: "100% recyclable court surfaces with zero environmental impact",
    progress: 40
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                Research & Development Division
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                Advancing the <br />
                <span className="text-primary-600">Science of Courts</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Through cutting-edge research in materials science, surface technology, and performance analytics, 
                we're building the future of athletic court construction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/research" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors text-center">
                  Explore Our Research
                </a>
                <a href="/partnerships" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors text-center">
                  Partnership Opportunities
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <BeakerIcon className="w-8 h-8 text-primary-600 mb-2" />
                    <h3 className="font-semibold text-sm">Materials Lab</h3>
                    <p className="text-xs text-gray-600">Advanced testing</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <CpuChipIcon className="w-8 h-8 text-purple-600 mb-2" />
                    <h3 className="font-semibold text-sm">Smart Tech</h3>
                    <p className="text-xs text-gray-600">IoT integration</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <GlobeAmericasIcon className="w-8 h-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-sm">Sustainability</h3>
                    <p className="text-xs text-gray-600">Eco solutions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <ChartBarIcon className="w-8 h-8 text-orange-600 mb-2" />
                    <h3 className="font-semibold text-sm">Analytics</h3>
                    <p className="text-xs text-gray-600">Performance data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary approach combines materials science, technology innovation, 
              and performance research to revolutionize court construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Current Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Active research initiatives pushing the boundaries of court construction technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {project.status}
                      </span>
                      <span className="text-gray-600">{project.timeline}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-right mb-2">
                      <span className="text-2xl font-bold text-primary-600">{project.progress}%</span>
                      <span className="text-gray-500 ml-1">complete</span>
                    </div>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Why Partner With 4420 Labs?
              </h2>
              <p className="text-xl text-gray-600">
                Leading the industry through innovation, collaboration, and scientific rigor
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LightBulbIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Innovation Leadership</h3>
                <p className="text-gray-600">
                  Pioneering research that defines industry standards and pushes technological boundaries
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Collaborative Approach</h3>
                <p className="text-gray-600">
                  Working with industry partners, universities, and manufacturers to accelerate innovation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Data-Driven Results</h3>
                <p className="text-gray-600">
                  Evidence-based research with measurable outcomes and real-world applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            Join us in advancing court construction technology. Whether you're a manufacturer, 
            university researcher, or industry professional, let's innovate together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/partnerships" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Partnership Opportunities
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