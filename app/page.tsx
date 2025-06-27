"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Home, Users, Box, ShoppingCart, Settings } from 'lucide-react';

const data = [
  { name: 'Jan', sales: 300 },
  { name: 'Feb', sales: 500 },
  { name: 'Mar', sales: 700 },
  { name: 'Apr', sales: 1000 },
  { name: 'May', sales: 850 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
      <aside className="bg-gray-900 text-white p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
            <Home size={18} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
            <Users size={18} /> Users
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
            <Box size={18} /> Products
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
            <ShoppingCart size={18} /> Orders
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
            <Settings size={18} /> Settings
          </a>
        </nav>
      </aside>

      <main className="p-6 space-y-6 bg-gray-50">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card><CardContent className="p-4"><p className="text-gray-500">Total Users</p><h3 className="text-xl font-bold">10,234</h3></CardContent></Card>
          <Card><CardContent className="p-4"><p className="text-gray-500">Total Orders</p><h3 className="text-xl font-bold">24,568</h3></CardContent></Card>
          <Card><CardContent className="p-4"><p className="text-gray-500">Total Sales</p><h3 className="text-xl font-bold">$75.94</h3></CardContent></Card>
          <Card><CardContent className="p-4"><p className="text-gray-500">Conversion</p><h3 className="text-xl font-bold">3.4%</h3></CardContent></Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-500 mb-2">Sales Report</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p className="text-gray-500 mb-2">Recent Orders</p>
              <div className="text-sm text-gray-700 space-y-1">
                <div>#12347 - Pratham- 04/4/2025</div>
                <div>#12348 - Abhay - 04/1/2025</div>
                <div>#12345 - Mukul - 04/2/2025</div>
                <div>#12344 - Swati - 04/12/2025</div>
                <div>#12343 - Dipali - 04/10/2025</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
