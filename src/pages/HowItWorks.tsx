import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Wind, 
  Filter, 
  Droplets, 
  Zap, 
  BarChart3, 
  Sun,
  Play,
  Pause 
} from 'lucide-react';

const HowItWorks = () => {
  const processSteps = [
    {
      step: 1,
      icon: <Wind className="h-8 w-8" />,
      title: "Air Intake",
      description: "Air enters through our specialized lattice filter system, designed for maximum throughput while capturing large particles",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: <Filter className="h-8 w-8" />,
      title: "Pollutant Capture",
      description: "Advanced biochar and fly ash filters remove PM2.5, PM10, and harmful gases through multi-stage filtration",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: 3,
      icon: <Droplets className="h-8 w-8" />,
      title: "Water Condensation",
      description: "Peltier cooling technology combined with terra cotta units condenses water vapor from the air",
      color: "from-teal-500 to-teal-600"
    },
    {
      step: 4,
      icon: <Zap className="h-8 w-8" />,
      title: "CO₂ Conversion",
      description: "Algae bioreactor converts captured CO₂ into valuable biomass while producing oxygen",
      color: "from-green-500 to-green-600"
    },
    {
      step: 5,
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Integrated sensors continuously monitor air quality, system performance, and environmental impact",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 6,
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Power Operation",
      description: "100% renewable energy powers the entire system for sustainable, off-grid operation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-emerald-100">
              Discover the innovative process behind our integrated air purification 
              and water generation system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the journey from polluted air to clean water through our 
              innovative six-stage process
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-8`}
              >
                {/* Step Content */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg mr-4`}>
                      {step.step}
                    </div>
                    <div className={`p-3 bg-gradient-to-r ${step.color} text-white rounded-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Visual Element */}
                <div className="flex-1 relative">
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-xl min-h-[300px] flex items-center justify-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white opacity-80`}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Arrow Between Steps */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden"
                  >
                    <ArrowDown className="h-8 w-8 text-emerald-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Integration Section */}
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
              System Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All components work seamlessly together for maximum efficiency and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Controls</h3>
              <p className="text-gray-600">
                AI-powered system optimization adjusts operation based on environmental 
                conditions and energy availability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Management</h3>
              <p className="text-gray-600">
                Advanced battery storage and power management ensure 24/7 operation 
                even during low solar conditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modular Design</h3>
              <p className="text-gray-600">
                Scalable architecture allows customization for different environments 
                and capacity requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Gallery Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Demo Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See our technology in action through these demonstration videos and animations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Air Filtration Process",
                description: "Watch how our biochar and fly ash filters capture pollutants",
                thumbnail: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Water Generation System",
                description: "See the Peltier cooling system in action producing clean water",
                thumbnail: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Algae Bioreactor Operation",
                description: "Discover how our bioreactor converts CO₂ to valuable biomass",
                thumbnail: "https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Real-time Monitoring Dashboard",
                description: "Experience our sensor network and data visualization system",
                thumbnail: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-400">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;