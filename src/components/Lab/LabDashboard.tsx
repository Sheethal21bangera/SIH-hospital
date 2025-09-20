import React from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { TestTube, Upload, FileText, Clock } from 'lucide-react';
import { mockTestRequests } from '../../data/mockData';

export const LabDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Lab Dashboard" />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="text-center" padding="sm">
            <TestTube size={24} className="text-black mx-auto mb-2" />
            <h3 className="text-xl font-bold text-black">8</h3>
            <p className="text-sm text-gray-600">Test Requests</p>
          </Card>

          <Card className="text-center" padding="sm">
            <Upload size={24} className="text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-gray-900">12</h3>
            <p className="text-sm text-gray-600">Upload Results</p>
          </Card>

          <Card className="text-center" padding="sm">
            <FileText size={24} className="text-purple-600 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-gray-900">25</h3>
            <p className="text-sm text-gray-600">Patient Reports</p>
          </Card>
        </div>

        {/* Test Requests */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TestTube size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Test Requests Panel</h3>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="space-y-4">
            {mockTestRequests.map((request) => (
              <div key={request.request_id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {request.request_id} - {request.test_type}
                    </h4>
                    <p className="text-sm text-gray-600">Patient: {request.patient_name}</p>
                    <p className="text-sm text-gray-600">Date: {request.date}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    request.status === 'Requested' 
                      ? 'bg-blue-100 text-blue-800'
                      : request.status === 'Sample Collected'
                      ? 'bg-yellow-100 text-yellow-800'
                      : request.status === 'In Progress'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {request.status}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  {request.status === 'Requested' && (
                    <Button size="sm">Collect Sample</Button>
                  )}
                  {request.status === 'Sample Collected' && (
                    <Button size="sm">Start Processing</Button>
                  )}
                  {request.status === 'In Progress' && (
                    <Button size="sm">Upload Results</Button>
                  )}
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </div>
            ))}
            
            {/* Additional dummy test requests */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">LR-4002 - Lipid Profile</h4>
                  <p className="text-sm text-gray-600">Patient: Meena R.</p>
                  <p className="text-sm text-gray-600">Date: 2025-09-16</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-800">
                  In Progress
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm">Upload Results</Button>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">LR-4003 - Blood Sugar</h4>
                  <p className="text-sm text-gray-600">Patient: Arjun P.</p>
                  <p className="text-sm text-gray-600">Date: 2025-09-17</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                  Requested
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm">Collect Sample</Button>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Upload Test Results & Patient Report History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Upload size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Upload Test Results</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload size={32} className="text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-4">Drag & drop PDF files here</p>
                <Button variant="outline">Browse Files</Button>
              </div>
              
              <div className="flex gap-2">
                <Button fullWidth>Upload & Mark Complete</Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2 mb-4">
              <FileText size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Patient Report History</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border rounded-lg bg-green-50">
                <div>
                  <h4 className="font-medium">CBC - Ravi Kumar</h4>
                  <p className="text-sm text-gray-600">Completed September 1, 2025</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg bg-green-50">
                <div>
                  <h4 className="font-medium">Lipid Profile - Meena R.</h4>
                  <p className="text-sm text-gray-600">Completed August 28, 2025</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg bg-green-50">
                <div>
                  <h4 className="font-medium">Blood Sugar - Arjun P.</h4>
                  <p className="text-sm text-gray-600">Completed August 25, 2025</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg bg-green-50">
                <div>
                  <h4 className="font-medium">Urine Test - Priya S.</h4>
                  <p className="text-sm text-gray-600">Completed August 22, 2025</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};