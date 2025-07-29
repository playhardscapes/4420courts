'use client';

import { useState } from 'react';
import { 
  WrenchScrewdriverIcon, 
  PlusIcon, 
  EyeIcon, 
  CameraIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const sampleProjects = [
  {
    id: 1,
    projectNumber: 'P-2025-001',
    customer: 'Sarah Smith',
    address: '456 Pine Ave, Cary, NC',
    serviceLevel: 'Level 3 - Coating & Lining Specialist',
    status: 'in_progress',
    phase: 'Surface Preparation',
    progress: 65,
    startDate: '2025-02-01',
    estimatedCompletion: '2025-02-15',
    contractValue: 12500,
    nextMilestone: 'Apply base coating',
    photos: 8,
    lastUpdate: '2025-01-29'
  },
  {
    id: 2,
    projectNumber: 'P-2025-002',
    customer: 'Mike Johnson',
    address: '123 Oak Street, Raleigh, NC',
    serviceLevel: 'Level 5 - Full Project Management',
    status: 'planning',
    phase: 'Site Planning',
    progress: 15,
    startDate: '2025-02-15',
    estimatedCompletion: '2025-03-30',
    contractValue: 42500,
    nextMilestone: 'Finalize contractor selection',
    photos: 3,
    lastUpdate: '2025-01-28'
  },
  {
    id: 3,
    projectNumber: 'P-2024-045',
    customer: 'Davis Family',
    address: '789 Maple Dr, Durham, NC',
    serviceLevel: 'Level 4 - Project Management + Finish',
    status: 'completed',
    phase: 'Project Complete',
    progress: 100,
    startDate: '2024-12-01',
    estimatedCompletion: '2025-01-15',
    contractValue: 22000,
    nextMilestone: 'Follow-up inspection',
    photos: 25,
    lastUpdate: '2025-01-20'
  }
];

const projectPhases = {
  'Level 3': ['Site Prep', 'Surface Preparation', 'Base Coating', 'Line Painting', 'Final Inspection'],
  'Level 4': ['Planning', 'Contractor Selection', 'Site Prep', 'Construction', 'Finishing', 'Final Inspection'],
  'Level 5': ['Planning', 'Design', 'Permits', 'Contractor Management', 'Construction', 'Finishing', 'Completion']
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'planning':
      return 'bg-blue-100 text-blue-800';
    case 'in_progress':
      return 'bg-yellow-100 text-yellow-800';
    case 'on_hold':
      return 'bg-red-100 text-red-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'planning':
      return <ClockIcon className="h-4 w-4" />;
    case 'in_progress':
      return <WrenchScrewdriverIcon className="h-4 w-4" />;
    case 'on_hold':
      return <ExclamationTriangleIcon className="h-4 w-4" />;
    case 'completed':
      return <CheckCircleIcon className="h-4 w-4" />;
    default:
      return <ClockIcon className="h-4 w-4" />;
  }
};

export default function ProjectsPage() {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Track active court construction and management projects</p>
          </div>
          <button 
            onClick={() => setShowNewProjectForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            New Project
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Active Projects</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-yellow-600">1</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">$77,000</div>
          <div className="text-sm text-gray-600">Total Value</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">100%</div>
          <div className="text-sm text-gray-600">On Schedule</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sampleProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            {/* Project Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{project.projectNumber}</h3>
                  <p className="text-sm text-gray-600">{project.customer}</p>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.status.replace('_', ' ')}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{project.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span>{project.serviceLevel}</span>
                </div>
              </div>
            </div>

            {/* Project Progress */}
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-gray-900">Current Phase: {project.phase}</span>
                  <span className="text-gray-600">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Due: {project.estimatedCompletion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4" />
                  <span>Next: {project.nextMilestone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CameraIcon className="h-4 w-4" />
                  <span>{project.photos} photos</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">
                  ${project.contractValue.toLocaleString()}
                </span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedProject(project.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal (Placeholder) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Project Details - {sampleProjects.find(p => p.id === selectedProject)?.projectNumber}
                </h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Timeline */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Project Timeline</h3>
                  <div className="space-y-3">
                    {projectPhases['Level 3'].map((phase, index) => (
                      <div key={phase} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${index < 3 ? 'bg-green-500' : index === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                        <span className={`text-sm ${index < 3 ? 'text-green-700' : index === 3 ? 'text-blue-700' : 'text-gray-500'}`}>
                          {phase}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery Placeholder */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Progress Photos</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                        <CameraIcon className="h-6 w-6 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-end gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Add Photos
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Update Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Project Form (Placeholder) */}
      {showNewProjectForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Create New Project</h2>
            <button 
              onClick={() => setShowNewProjectForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source Contract</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select existing contract</option>
                  <option value="C-2025-001">C-2025-001 - Sarah Smith</option>
                  <option value="C-2025-002">C-2025-002 - Mike Johnson</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Manager</label>
                <input 
                  type="text" 
                  placeholder="Assigned project manager"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input 
                  type="date" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Notes</label>
                <textarea 
                  placeholder="Special requirements, weather considerations, etc."
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Contacts</label>
                <input 
                  type="text" 
                  placeholder="Contractors, suppliers, etc."
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={() => setShowNewProjectForm(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Create Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
}