import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Gitanjali",
      role: "Founder and lead researcher",
      bio: "Environmental researcher specialized in sustainable technology development",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Pratyush Yadav",
      role: "Lead Engineer",
      bio: "Specialist in IoT sensors and solar power systems for environmental monitoring",
      image:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Monisha Aggarwal",
      role: "Biotechnology Researcher",
      bio: "Expert in algae bioreactors and sustainable water purification technologies",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Divya Grover",
      role: "Community Outreach Director",
      bio: "Focused on implementing solutions in urban and rural communities across India",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const technologies = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Biochar Filter",
      description: "Advanced carbon filtration system that captures fine particulate matter and harmful pollutants from the air"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Fly Ash Unit",
      description: "Innovative use of industrial waste materials for enhanced air purification and pollutant absorption"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Peltier Cooling System",
      description: "Thermoelectric cooling technology combined with terra cotta units for efficient water vapor condensation"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Algae Bioreactor",
      description: "Living system that converts CO₂ to biomass while producing oxygen and generating valuable algae products"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Mission</h1>
            <p className="text-xl text-emerald-100">
              We're dedicated to creating sustainable solutions that address the urgent challenges 
              of air pollution and water scarcity in communities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate experts behind our environmental solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Motivation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why This Solution is Needed
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Air Pollution Crisis</h3>
                    <p className="text-gray-600">
                      Urban India faces severe air quality challenges with PM2.5 levels often exceeding WHO guidelines by 5-10 times, 
                      leading to respiratory diseases and reduced life expectancy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Scarcity</h3>
                    <p className="text-gray-600">
                      Over 600 million people in India face acute water shortage, with groundwater depletion 
                      and contamination affecting millions of households daily.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Need for Innovation</h3>
                    <p className="text-gray-600">
                      Traditional solutions often require extensive infrastructure and high costs, 
                      making them inaccessible to many communities that need them most.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Environmental challenges"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Overview Section */}
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
              Technology Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core components work together to create an integrated environmental solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-emerald-600 mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-emerald-600 text-white p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Integrated Sensor Network</h3>
            <p className="text-emerald-100 mb-6">
              Our advanced monitoring system includes PM2.5, PM10, CO₂, humidity, temperature, 
              and air quality sensors that provide real-time data for optimal system performance 
              and environmental impact measurement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-emerald-200">Real-time Monitoring</div>
              </div>
              <div>
                <div className="text-2xl font-bold">8+</div>
                <div className="text-emerald-200">Sensor Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold">IoT</div>
                <div className="text-emerald-200">Cloud Integration</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;