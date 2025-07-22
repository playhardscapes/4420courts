import { CalendarIcon, PlusIcon, VideoCameraIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

// Mock data - will be replaced with database queries
const mockAppointments = [
  {
    id: '1',
    title: 'Initial Consultation - Johnson Family',
    customer: 'Mike Johnson',
    type: 'video_consultation',
    startTime: new Date(2025, 0, 24, 10, 0), // Jan 24, 10:00 AM
    endTime: new Date(2025, 0, 24, 10, 30),
    status: 'confirmed',
    notes: 'Interested in Level 3 service - backyard court project',
  },
  {
    id: '2',
    title: 'Site Visit - Davis Court Project',
    customer: 'Sarah Davis',
    type: 'site_visit',
    startTime: new Date(2025, 0, 24, 14, 0), // Jan 24, 2:00 PM
    endTime: new Date(2025, 0, 24, 15, 30),
    status: 'scheduled',
    location: '123 Oak Street, Springfield, IL',
  },
  {
    id: '3',
    title: 'Phone Follow-up - Wilson Quote',
    customer: 'Tom Wilson',
    type: 'phone_consultation',
    startTime: new Date(2025, 0, 25, 9, 0), // Jan 25, 9:00 AM
    endTime: new Date(2025, 0, 25, 9, 30),
    status: 'scheduled',
    notes: 'Follow up on Level 4 project quote sent last week',
  },
];

const getAppointmentIcon = (type: string) => {
  switch (type) {
    case 'video_consultation':
      return VideoCameraIcon;
    case 'phone_consultation':
      return PhoneIcon;
    case 'site_visit':
      return MapPinIcon;
    default:
      return CalendarIcon;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'scheduled':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-gray-100 text-gray-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function CalendarPage() {
  const today = new Date();
  const todayAppointments = mockAppointments.filter(apt => 
    apt.startTime.toDateString() === today.toDateString()
  );

  const upcomingAppointments = mockAppointments.filter(apt => 
    apt.startTime > today
  ).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Calendar & Scheduling</h1>
              <p className="mt-2 text-gray-600">Manage your consultations and appointments</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <PlusIcon className="w-5 h-5" />
              <span>Schedule Appointment</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
                <p className="text-sm text-gray-600">{today.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
              <div className="p-6">
                {todayAppointments.length === 0 ? (
                  <div className="text-center py-8">
                    <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No appointments scheduled for today</p>
                    <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                      Schedule your first appointment
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {todayAppointments.map((appointment) => {
                      const IconComponent = getAppointmentIcon(appointment.type);
                      return (
                        <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <IconComponent className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900">{appointment.title}</h3>
                                <p className="text-sm text-gray-600">with {appointment.customer}</p>
                                <div className="flex items-center mt-1 space-x-4">
                                  <span className="text-sm text-gray-500">
                                    {appointment.startTime.toLocaleTimeString('en-US', { 
                                      hour: 'numeric', 
                                      minute: '2-digit',
                                      hour12: true 
                                    })} - {appointment.endTime.toLocaleTimeString('en-US', { 
                                      hour: 'numeric', 
                                      minute: '2-digit',
                                      hour12: true 
                                    })}
                                  </span>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                                    {appointment.status}
                                  </span>
                                </div>
                                {appointment.location && (
                                  <p className="text-sm text-gray-500 mt-1">📍 {appointment.location}</p>
                                )}
                                {appointment.notes && (
                                  <p className="text-sm text-gray-600 mt-2">{appointment.notes}</p>
                                )}
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                Edit
                              </button>
                              <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">This Week</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Appointments</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Consultations</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Site Visits</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="font-semibold text-green-600">75%</span>
                </div>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Upcoming</h3>
              <div className="space-y-3">
                {upcomingAppointments.map((appointment) => {
                  const IconComponent = getAppointmentIcon(appointment.type);
                  return (
                    <div key={appointment.id} className="flex items-center space-x-3 py-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {appointment.customer}
                        </p>
                        <p className="text-xs text-gray-500">
                          {appointment.startTime.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })} at {appointment.startTime.toLocaleTimeString('en-US', { 
                            hour: 'numeric', 
                            minute: '2-digit',
                            hour12: true 
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {upcomingAppointments.length === 0 && (
                  <p className="text-sm text-gray-500">No upcoming appointments</p>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  📞 Schedule Phone Consultation
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  🎥 Schedule Video Call
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  📍 Schedule Site Visit
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  📅 View Full Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}