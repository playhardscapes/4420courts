import { ClockIcon, CheckCircleIcon, PlayIcon } from '@heroicons/react/24/solid';

const activeProjects = [
  {
    id: 1,
    title: "Next-Generation Acrylic Formulation",
    status: "Active Research",
    phase: "Laboratory Testing",
    progress: 75,
    timeline: "2025-2026",
    team: ["Materials Science", "Performance Analytics"],
    description: "Developing weather-resistant acrylic coatings with 50% longer lifespan and improved performance characteristics.",
    objectives: [
      "Increase durability by 50% over current formulations",
      "Improve weather resistance in extreme climates",
      "Reduce maintenance frequency requirements",
      "Maintain cost-effectiveness for commercial application"
    ],
    milestones: [
      { name: "Initial formulation development", completed: true },
      { name: "Laboratory durability testing", completed: true },
      { name: "Weather simulation trials", completed: true },
      { name: "Field testing deployment", completed: false },
      { name: "Performance validation", completed: false }
    ]
  },
  {
    id: 2,
    title: "Smart Court Monitoring System",
    status: "Prototype Testing",
    phase: "Field Validation",
    progress: 60,
    timeline: "2025",
    team: ["Smart Technology", "Performance Analytics"],
    description: "IoT-enabled sensor network for real-time court condition monitoring and predictive maintenance alerts.",
    objectives: [
      "Real-time surface condition monitoring",
      "Predictive maintenance scheduling",
      "Performance data collection",
      "Integration with existing court management systems"
    ],
    milestones: [
      { name: "Sensor development", completed: true },
      { name: "IoT platform creation", completed: true },
      { name: "Prototype testing", completed: false },
      { name: "Field deployment trials", completed: false },
      { name: "Commercial system development", completed: false }
    ]
  },
  {
    id: 3,
    title: "100% Recyclable Court Surfaces",
    status: "Lab Testing",
    phase: "Material Development",
    progress: 40,
    timeline: "2025-2027",
    team: ["Sustainability", "Materials Science"],
    description: "Developing completely recyclable court surface materials with zero environmental impact.",
    objectives: [
      "100% recyclable material composition",
      "Carbon-neutral manufacturing process",
      "Performance parity with traditional materials",
      "Cost-competitive pricing structure"
    ],
    milestones: [
      { name: "Material composition research", completed: true },
      { name: "Recyclability testing", completed: false },
      { name: "Performance benchmarking", completed: false },
      { name: "Pilot production trials", completed: false },
      { name: "Market validation", completed: false }
    ]
  },
  {
    id: 4,
    title: "Advanced Construction Automation",
    status: "Concept Development",
    phase: "Research & Design",
    progress: 25,
    timeline: "2026-2027",
    team: ["Construction Innovation", "Smart Technology"],
    description: "Robotic systems for precision court installation and quality control automation.",
    objectives: [
      "Automated surface application systems",
      "Real-time quality control monitoring",
      "Reduced installation time by 40%",
      "Consistent quality across all installations"
    ],
    milestones: [
      { name: "Concept development", completed: true },
      { name: "System design", completed: false },
      { name: "Prototype development", completed: false },
      { name: "Testing and validation", completed: false },
      { name: "Commercial deployment", completed: false }
    ]
  }
];

const completedProjects = [
  {
    title: "Enhanced Durability Testing Protocol",
    completedDate: "December 2024",
    team: ["Industry Standards", "Performance Analytics"],
    description: "New industry-standard testing methods for court surface longevity assessment.",
    impact: "Adopted by 12 major manufacturers as standard testing protocol"
  },
  {
    title: "Climate-Adaptive Surface Formulations",
    completedDate: "October 2024",
    team: ["Materials Science", "Performance Analytics"],
    description: "Surface materials optimized for different climate zones and weather patterns.",
    impact: "15% improvement in surface performance across varied climates"
  },
  {
    title: "Rapid Installation Technique Study",
    completedDate: "August 2024",
    team: ["Construction Innovation"],
    description: "Research into faster, more efficient court construction methods.",
    impact: "30% reduction in installation time while maintaining quality standards"
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'Active Research':
      return 'bg-green-100 text-green-800';
    case 'Prototype Testing':
      return 'bg-blue-100 text-blue-800';
    case 'Lab Testing':
      return 'bg-purple-100 text-purple-800';
    case 'Concept Development':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Research Projects
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Explore our current research initiatives and completed projects that are 
              shaping the future of court construction technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
                {activeProjects.length} Active Projects
              </div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                {completedProjects.length} Completed in 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            Active Research Projects
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {activeProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-gray-600">{project.phase}</span>
                        <span className="text-gray-600">Timeline: {project.timeline}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.team.map((team, index) => (
                          <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                            {team}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 text-right">
                      <div className="text-3xl font-bold text-primary-600 mb-1">{project.progress}%</div>
                      <div className="text-gray-500">Complete</div>
                      <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-600 text-lg mb-6">{project.description}</p>

                  {/* Objectives and Milestones */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Objectives */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Project Objectives</h4>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Key Milestones</h4>
                      <ul className="space-y-3">
                        {project.milestones.map((milestone, index) => (
                          <li key={index} className="flex items-center gap-3">
                            {milestone.completed ? (
                              <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <ClockIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                            <span className={milestone.completed ? "text-gray-900" : "text-gray-500"}>
                              {milestone.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            Recently Completed Projects
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-6">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-green-600 font-semibold">Completed {project.completedDate}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.team.map((team, teamIndex) => (
                        <span key={teamIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Impact & Results</h4>
                  <p className="text-green-700">{project.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Want to Collaborate on Research?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            We're always looking for research partners, funding opportunities, 
            and collaborative projects that advance court construction technology.
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