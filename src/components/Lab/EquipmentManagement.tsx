import React, { useState } from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';
import { Settings, Plus, Search, AlertTriangle, Calendar, CheckCircle } from 'lucide-react';
import { labEquipment } from '../../data/enhancedMockData';

interface Equipment {
  equipment_id: string;
  name: string;
  status: 'Active' | 'Under Maintenance' | 'Out of Order';
  last_maintenance: string;
  next_maintenance: string;
}

export const EquipmentManagement: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment[]>(labEquipment);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMaintenanceComplete = () => {
    if (selectedEquipment) {
      const today = new Date().toISOString().split('T')[0];
      const nextMaintenance = new Date();
      nextMaintenance.setMonth(nextMaintenance.getMonth() + 6);
      
      setEquipment(prev => prev.map(eq => 
        eq.equipment_id === selectedEquipment.equipment_id
          ? {
              ...eq,
              status: 'Active' as const,
              last_maintenance: today,
              next_maintenance: nextMaintenance.toISOString().split('T')[0]
            }
          : eq
      ));
      
      setShowMaintenanceModal(false);
      setSelectedEquipment(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Under Maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Order': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isMaintenanceDue = (nextMaintenance: string) => {
    const next = new Date(nextMaintenance);
    const today = new Date();
    const diffTime = next.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30; // Due within 30 days
  };

  return (
    <div className="min-h-screen bg-white">
      <Header title="Equipment Management" showBackButton />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Settings size={24} className="text-black" />
            <h2 className="text-xl font-semibold text-black">Lab Equipment</h2>
          </div>
          <Button>
            <Plus size={16} className="mr-2" />
            Add Equipment
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-black">{equipment.length}</h3>
            <p className="text-gray-600">Total Equipment</p>
          </Card>
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-green-600">
              {equipment.filter(eq => eq.status === 'Active').length}
            </h3>
            <p className="text-gray-600">Active</p>
          </Card>
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-yellow-600">
              {equipment.filter(eq => eq.status === 'Under Maintenance').length}
            </h3>
            <p className="text-gray-600">Under Maintenance</p>
          </Card>
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-orange-600">
              {equipment.filter(eq => isMaintenanceDue(eq.next_maintenance)).length}
            </h3>
            <p className="text-gray-600">Maintenance Due</p>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </Card>

        {/* Equipment Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Equipment ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Last Maintenance</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Next Maintenance</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEquipment.map((item) => {
                  const maintenanceDue = isMaintenanceDue(item.next_maintenance);
                  
                  return (
                    <tr key={item.equipment_id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{item.equipment_id}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{item.name}</span>
                          {maintenanceDue && item.status === 'Active' && (
                            <AlertTriangle size={16} className="text-orange-500" title="Maintenance due soon" />
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{item.last_maintenance}</td>
                      <td className="py-3 px-4">
                        <span className={maintenanceDue ? 'text-orange-600 font-medium' : 'text-gray-700'}>
                          {item.next_maintenance}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          {item.status === 'Under Maintenance' && (
                            <Button 
                              size="sm"
                              onClick={() => {
                                setSelectedEquipment(item);
                                setShowMaintenanceModal(true);
                              }}
                            >
                              <CheckCircle size={14} className="mr-1" />
                              Complete
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Calendar size={14} className="mr-1" />
                            Schedule
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Maintenance Complete Modal */}
      <Modal
        isOpen={showMaintenanceModal}
        onClose={() => setShowMaintenanceModal(false)}
        title="Complete Maintenance"
        size="md"
      >
        {selectedEquipment && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Equipment: {selectedEquipment.name}</h4>
              <p className="text-blue-800">ID: {selectedEquipment.equipment_id}</p>
              <p className="text-blue-800">Current Status: {selectedEquipment.status}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Notes</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter maintenance details and any issues resolved..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Technician Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter technician name"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={handleMaintenanceComplete} className="flex-1">
                <CheckCircle size={16} className="mr-2" />
                Mark as Complete
              </Button>
              <Button variant="outline" onClick={() => setShowMaintenanceModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};