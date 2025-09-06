import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Heart, 
  Users, 
  Recycle, 
  Award, 
  Globe,
  BarChart3,
  Droplets,
  Wind,
  Sun
} from 'lucide-react';

const Impact = () => {
  const environmentalStats = [
    { icon: <Wind className="h-8 w-8" />, value: "2400m³", label: "Air Cleaned Daily", color: "text-blue-600" },
    { icon: <Droplets className="h-8 w-8" />, value: "13.77L", label: "Clean Water Generated", color: "text-teal-600" },
    { icon: <Recycle className="h-8 w-8" />, value: "85%", label: "CO₂ Reduction", color: "text-green-600" },
    { icon: <Sun className="h-8 w-8" />, value: "0kg", label: "Carbon Emissions", color: "text-yellow-600" }
  ];

  const healthBenefits = [
    {
      title: "Respiratory Health",
      description: "Reduces PM2.5 and PM10 exposure by up to 85%, significantly decreasing respiratory illness risk",
      impact: "75% reduction in respiratory symptoms"
    },
    {
      title: "Cardiovascular Benefits",
      description: "Clean air reduces cardiovascular disease risk and improves overall heart health",
      impact: "30% lower heart disease risk"
    },
    {
      title: "Child Development",
      description: "Cleaner air supports healthy lung development in children and reduces asthma rates",
      impact: "50% fewer asthma cases"
    }
  ];

  const communityImpacts = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Urban Communities",
      description: "Deployed in high-pollution urban areas to provide immediate air quality improvement",
      locations: "Mumbai, Delhi, Bangalore"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Rural Villages",
      description: "Off-grid operation makes it perfect for remote areas without electrical infrastructure",
      locations: "50+ villages across India"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Disaster Response",
      description: "Rapid deployment capability for emergency situations and disaster-affected areas",
      locations: "Emergency response teams"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Gupta",
      role: "Public Health Official, Mumbai",
      quote: "The installation in our community has shown measurable improvements in air quality indices. Residents report fewer respiratory issues.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sunita Devi",
      role: "Village Leader, Rajasthan",
      quote: "Having access to clean water and air in our village has been life-changing. Our children are healthier and happier.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Prof. Amit Sharma",
      role: "Environmental Science, IIT Delhi",
      quote: "This technology represents a breakthrough in sustainable environmental solutions. The data shows impressive real-world results.",
      image: "https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&w=400"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Impact & Benefits</h1>
            <p className="text-xl text-emerald-100">
              Measurable environmental improvements, health benefits, and positive community impact 
              through our sustainable technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Section */}
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
              Environmental Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real data showing the measurable environmental benefits of our technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {environmentalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-b from-emerald-50 to-white rounded-xl border border-emerald-100">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-emerald-600 text-white p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Pollution Reduction Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-emerald-200">PM2.5 Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">88%</div>
                <div className="text-emerald-200">PM10 Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-emerald-200">Harmful Gas Removal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Health Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cleaner air translates directly to better health outcomes for communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-emerald-700 font-semibold">{benefit.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
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
              Community Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deployable solutions that adapt to diverse community needs and environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityImpacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-emerald-50 to-white p-8 rounded-xl border border-emerald-100 text-center"
              >
                <div className="text-emerald-600 mb-6 flex justify-center">
                  {impact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{impact.title}</h3>
                <p className="text-gray-600 mb-4">{impact.description}</p>
                <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {impact.locations}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sustainability Features
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Built for long-term environmental benefit with circular design principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "100% Renewable", description: "Solar powered operation", icon: <Sun className="h-8 w-8" /> },
              { title: "Zero Waste", description: "Circular design principles", icon: <Recycle className="h-8 w-8" /> },
              { title: "Long Lasting", description: "15+ year lifespan", icon: <Award className="h-8 w-8" /> },
              { title: "Scalable", description: "Modular expansion", icon: <TrendingUp className="h-8 w-8" /> }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-emerald-300 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-emerald-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from communities where our technology has made a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;