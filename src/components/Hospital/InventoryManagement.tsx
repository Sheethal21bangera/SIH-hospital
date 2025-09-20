import React, { useState } from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';
import { Package, Plus, Search, AlertTriangle, Edit3, Trash2 } from 'lucide-react';
import { pharmacyInventory } from '../../data/enhancedMockData';

interface InventoryItem {
  medicine_id: string;
  name: string;
  type: string;
  stock: number;
  expiry_date: string;
  supplier: string;
  price: number;
}

export const InventoryManagement: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>(pharmacyInventory);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [newItem, setNewItem] = useState({
    name: '',
    type: 'Tablet',
    stock: 0,
    expiry_date: '',
    supplier: '',
    price: 0
  });

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = () => {
    const medicine_id = `MED-${String(inventory.length + 1).padStart(3, '0')}`;
    const newInventoryItem: InventoryItem = {
      medicine_id,
      ...newItem
    };
    
    setInventory(prev => [...prev, newInventoryItem]);
    setNewItem({
      name: '',
      type: 'Tablet',
      stock: 0,
      expiry_date: '',
      supplier: '',
      price: 0
    });
    setShowAddModal(false);
  };

  const handleDeleteItem = (medicine_id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setInventory(prev => prev.filter(item => item.medicine_id !== medicine_id));
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock < 50) return { color: 'text-red-600', status: 'Low Stock' };
    if (stock < 100) return { color: 'text-yellow-600', status: 'Medium Stock' };
    return { color: 'text-green-600', status: 'Good Stock' };
  };

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 90; // Expiring within 3 months
  };

  return (
    <div className="min-h-screen bg-white">
      <Header title="Inventory Management" showBackButton />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Package size={24} className="text-black" />
            <h2 className="text-xl font-semibold text-black">Medicine Inventory</h2>
          </div>
          <Button onClick={() => setShowAddModal(true)}>
            <Plus size={16} className="mr-2" />
            Add Medicine
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-black">{inventory.length}</h3>
            <p className="text-gray-600">Total Items</p>
          </Card>
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-red-600">
              {inventory.filter(item => item.stock < 50).length}
            </h3>
            <p className="text-gray-600">Low Stock</p>
          </Card>
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-orange-600">
              {inventory.filter(item => isExpiringSoon(item.expiry_date)).length}
            </h3>
            <p className="text-gray-600">Expiring Soon</p>
          </Card>
          <Card className="text-center" padding="sm">
            <h3 className="text-2xl font-bold text-green-600">
              ₹{inventory.reduce((sum, item) => sum + (item.stock * item.price), 0).toLocaleString()}
            </h3>
            <p className="text-gray-600">Total Value</p>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicines or suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </Card>

        {/* Inventory Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Medicine ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Stock</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Expiry Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Supplier</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item) => {
                  const stockStatus = getStockStatus(item.stock);
                  const expiringSoon = isExpiringSoon(item.expiry_date);
                  
                  return (
                    <tr key={item.medicine_id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{item.medicine_id}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{item.name}</span>
                          {expiringSoon && (
                            <AlertTriangle size={16} className="text-orange-500" title="Expiring soon" />
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{item.type}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${stockStatus.color}`}>
                          {item.stock} units
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">₹{item.price}</td>
                      <td className="py-3 px-4">
                        <span className={expiringSoon ? 'text-orange-600 font-medium' : 'text-gray-700'}>
                          {item.expiry_date}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{item.supplier}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button 
                            className="p-1 text-gray-600 hover:text-blue-600"
                            onClick={() => setSelectedItem(item)}
                          >
                            <Edit3 size={16} />
                          </button>
                          <button 
                            className="p-1 text-gray-600 hover:text-red-600"
                            onClick={() => handleDeleteItem(item.medicine_id)}
                          >
                            <Trash2 size={16} />
                          </button>
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

      {/* Add Medicine Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Medicine"
        size="md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Paracetamol 500mg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              value={newItem.type}
              onChange={(e) => setNewItem(prev => ({ ...prev, type: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Tablet">Tablet</option>
              <option value="Capsule">Capsule</option>
              <option value="Syrup">Syrup</option>
              <option value="Injection">Injection</option>
              <option value="Cream">Cream</option>
              <option value="Drops">Drops</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
              <input
                type="number"
                value={newItem.stock}
                onChange={(e) => setNewItem(prev => ({ ...prev, stock: parseInt(e.target.value) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price per Unit</label>
              <input
                type="number"
                step="0.01"
                value={newItem.price}
                onChange={(e) => setNewItem(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input
              type="date"
              value={newItem.expiry_date}
              onChange={(e) => setNewItem(prev => ({ ...prev, expiry_date: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
            <input
              type="text"
              value={newItem.supplier}
              onChange={(e) => setNewItem(prev => ({ ...prev, supplier: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., ABC Pharmaceuticals"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleAddItem} className="flex-1">
              Add Medicine
            </Button>
            <Button variant="outline" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};