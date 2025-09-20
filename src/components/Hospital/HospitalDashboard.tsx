import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Activity, 
  UserPlus, 
  ClipboardList,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';

interface DashboardStats {
  totalPatients: number;
  todayAppointments: number;
  totalRevenue: number;
  activeStaff: number;
  pendingBills: number;
  occupancyRate: number;
}

const HospitalDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalPatients: 0,
    todayAppointments: 0,
    totalRevenue: 0,
    activeStaff: 0,
    pendingBills: 0,
    occupancyRate: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch dashboard stats
    const fetchStats = async () => {
      try {
        // Mock data - replace with actual API call
        const mockStats: DashboardStats = {
          totalPatients: 1247,
          todayAppointments: 23,
          totalRevenue: 125000,
          activeStaff: 45,
          pendingBills: 12,
          occupancyRate: 78
        };
        
        setTimeout(() => {
          setStats(mockStats);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const quickActions = [
    {
      title: 'Register Patient',
      icon: UserPlus,
      color: 'bg-blue-500',
      action: () => console.log('Navigate to patient registration')
    },
    {
      title: 'Schedule Appointment',
      icon: Calendar,
      color: 'bg-green-500',
      action: () => console.log('Navigate to appointment scheduling')
    },
    {
      title: 'View Billing',
      icon: DollarSign,
      color: 'bg-purple-500',
      action: () => console.log('Navigate to billing management')
    },
    {
      title: 'Staff Management',
      icon: Users,
      color: 'bg-orange-500',
      action: () => console.log('Navigate to staff management')
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hospital Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Activity className="w-4 h-4 mr-2" />
            View Reports
          </Button>
          <Button>
            <AlertCircle className="w-4 h-4 mr-2" />
            Emergency Alert
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Patients</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalPatients.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+12% from last month</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
              <p className="text-3xl font-bold text-gray-900">{stats.todayAppointments}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-600">5 pending confirmations</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-3xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+8% from last month</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
              <p className="text-3xl font-bold text-gray-900">{stats.occupancyRate}%</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Activity className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${stats.occupancyRate}%` }}
              ></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className={`p-2 ${action.color} rounded-lg mr-3`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-gray-900">{action.title}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Appointments</h2>
          <div className="space-y-3">
            {[
              { patient: 'John Doe', doctor: 'Dr. Smith', time: '10:00 AM', status: 'Confirmed' },
              { patient: 'Jane Wilson', doctor: 'Dr. Johnson', time: '11:30 AM', status: 'Pending' },
              { patient: 'Mike Brown', doctor: 'Dr. Davis', time: '2:00 PM', status: 'Confirmed' }
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{appointment.patient}</p>
                  <p className="text-sm text-gray-600">{appointment.doctor} • {appointment.time}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  appointment.status === 'Confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Bills</h2>
          <div className="space-y-3">
            {[
              { patient: 'Sarah Johnson', amount: 1250, days: 3 },
              { patient: 'Robert Lee', amount: 890, days: 7 },
              { patient: 'Emily Davis', amount: 2100, days: 12 }
            ].map((bill, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{bill.patient}</p>
                  <p className="text-sm text-gray-600">{bill.days} days overdue</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${bill.amount}</p>
                  <Button size="sm" variant="outline" className="mt-1">
                    Send Reminder
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HospitalDashboard;