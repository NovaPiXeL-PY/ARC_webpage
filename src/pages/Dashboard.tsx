import React from 'react';
import { motion } from 'framer-motion';
import SensorDashboard from '../components/SensorDashboard';
import { BarChart3, TrendingUp, Activity, Database } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Environmental Monitoring Dashboard</h1>
            <p className="text-xl text-emerald-100">
              Real-time sensor data from our Clean Air, Pure Water system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SensorDashboard />
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Data Analytics</h3>
              </div>
              <p className="text-gray-600">
                Advanced analytics and trend analysis for environmental data patterns and insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
              </div>
              <p className="text-gray-600">
                Track system efficiency, air purification rates, and water generation performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">System Health</h3>
              </div>
              <p className="text-gray-600">
                Monitor system status, maintenance alerts, and operational efficiency indicators.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;