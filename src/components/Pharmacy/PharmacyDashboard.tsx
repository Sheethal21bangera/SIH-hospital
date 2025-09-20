import React from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Pill, Package, CheckCircle, AlertTriangle } from 'lucide-react';
import { mockPrescriptions } from '../../data/mockData';

export const PharmacyDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Pharmacy Dashboard" />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="text-center">
            <Pill size={32} className="text-black mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-black">12</h3>
            <p className="text-gray-600">Prescription List</p>
          </Card>

          <Card className="text-center">
            <Package size={32} className="text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">145</h3>
            <p className="text-gray-600">Stock/Inventory</p>
          </Card>

          <Card className="text-center">
            <CheckCircle size={32} className="text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">8</h3>
            <p className="text-gray-600">Fulfilled Today</p>
          </Card>

          <Card className="text-center">
            <AlertTriangle size={32} className="text-orange-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">25</h3>
            <p className="text-gray-600">Dispense Details</p>
          </Card>
        </div>

        {/* Prescriptions Queue */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Pill size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Prescriptions to Fulfill</h3>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="space-y-4">
            {mockPrescriptions.map((prescription) => (
              <div key={prescription.prescription_id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {prescription.prescription_id} - {prescription.patient_name}
                    </h4>
                    <p className="text-sm text-gray-600">Date: {prescription.date}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    prescription.status === 'Pending' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {prescription.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Medicines:</h5>
                  <ul className="space-y-1">
                    {prescription.medicines.map((medicine, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {medicine}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm">Mark as Fulfilled</Button>
                  <Button size="sm" variant="outline">Upload Dispense Details</Button>
                </div>
              </div>
            ))}
            
            {/* Additional dummy prescriptions */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">RX-2003 - Arjun P.</h4>
                  <p className="text-sm text-gray-600">Date: 2025-09-12</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </div>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-700 mb-2">Medicines:</h5>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Amoxicillin 500mg - 1 cap 8hr
                  </li>
                  <li className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Cough Syrup - 5ml twice daily
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm">Mark as Fulfilled</Button>
                <Button size="sm" variant="outline">Upload Dispense Details</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Inventory Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Package size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Current Stock</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Paracetamol 500mg</h4>
                  <p className="text-sm text-gray-600">Tablets</p>
                </div>
                <span className="font-medium text-green-600">120 units</span>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Ibuprofen 200mg</h4>
                  <p className="text-sm text-gray-600">Tablets</p>
                </div>
                <span className="font-medium text-green-600">85 units</span>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg bg-orange-50">
                <div>
                  <h4 className="font-medium">Amoxicillin 250mg</h4>
                  <p className="text-sm text-gray-600">Capsules</p>
                </div>
                <span className="font-medium text-orange-600">15 units</span>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Recent Dispensed</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 border rounded-lg bg-green-50">
                <h4 className="font-medium text-gray-900">RX-2001</h4>
                <p className="text-sm text-gray-600">Dispensed at 10:30 AM</p>
                <p className="text-sm text-green-700">Patient: Ravi Kumar</p>
              </div>
              
              <div className="p-3 border rounded-lg bg-green-50">
                <h4 className="font-medium text-gray-900">RX-2002</h4>
                <p className="text-sm text-gray-600">Dispensed at 11:15 AM</p>
                <p className="text-sm text-green-700">Patient: Meena R.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};