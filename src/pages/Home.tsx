import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Wind, 
  Droplets, 
  Sun, 
  BarChart3, 
  Recycle, 
  Users,
  Award,
  TrendingUp 
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Real-time Air Quality Monitoring",
      description: "Advanced multi-sensor system tracks pollutants 24/7"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "13.77L Clean Water Daily",
      description: "Innovative condensation system produces drinking water"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Cleans 2400m³ Air/Day",
      description: "High-efficiency filtration for maximum impact"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "13.77L Clean Water Daily",
      description: "100% off-grid operation with renewable energy"
    }
  ];

  const stats = [
    { number: "2400m³", label: "Air Cleaned Daily" },
    { number: "13.77L", label: "Water Produced Daily" },
    { number: "100%", label: "Solar Powered" },
    { number: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Clean Air, Pure Water
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 font-light">
              Sustainable Solutions for a Healthier Planet
            </p>
            <p className="text-lg mb-10 text-white/90 max-w-2xl mx-auto">
              Our innovative solar-powered system combines advanced air purification 
              with water generation technology, creating a sustainable solution for 
              urban environmental challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/how-it-works"
                className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-semibold rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Addressing Critical Environmental Challenges
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our mission is to combat air pollution and water scarcity through innovative, 
              scalable technology. With solar-powered operation, multi-sensor monitoring, 
              algae bioreactor systems, and modular design, we're creating solutions 
              that adapt to diverse environmental needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-emerald-50 rounded-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Features Snapshot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated system combines cutting-edge technology with sustainable design
              to deliver measurable environmental impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                <div className="text-emerald-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly & Off-Grid</h3>
              <p className="text-gray-600">
                Completely sustainable operation powered by solar energy with zero carbon footprint
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Solution</h3>
              <p className="text-gray-600">
                Modular design allows deployment in urban areas, rural communities, and disaster zones
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Low-Cost Design</h3>
              <p className="text-gray-600">
                Affordable technology designed for widespread adoption and maximum community impact
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Join us in creating a sustainable future with cleaner air and pure water for everyone.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 hover:bg-emerald-50 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;