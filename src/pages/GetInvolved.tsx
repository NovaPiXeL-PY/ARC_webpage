import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Handshake,
  Lightbulb,
  Gift
} from 'lucide-react';

const GetInvolved = () => {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });

  const opportunityCards = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Support Our Mission",
      description: "Help us expand our impact through donations and sponsorships",
      color: "from-red-500 to-red-600",
      actions: ["Monthly donations", "Equipment sponsorship", "Research funding"]
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Partnership Opportunities",
      description: "Collaborate with us on environmental solutions and technology development",
      color: "from-blue-500 to-blue-600",
      actions: ["Corporate partnerships", "NGO collaborations", "Government initiatives"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Educational Programs",
      description: "Bring environmental awareness and hands-on learning to schools and communities",
      color: "from-green-500 to-green-600",
      actions: ["School workshops", "DIY kits", "Teacher training"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Volunteer Programs",
      description: "Join our team of passionate volunteers working on environmental solutions",
      color: "from-purple-500 to-purple-600",
      actions: ["Community outreach", "Technical support", "Event coordination"]
    }
  ];

  const educationalKits = [
    {
      title: "Air Quality Monitor Kit",
      description: "Build your own air quality monitoring system with sensors and microcontrollers",
      price: "₹3,999",
      features: ["PM2.5 & PM10 sensors", "Arduino-based control", "Mobile app integration", "Assembly guide"]
    },
    {
      title: "Mini Water Generator",
      description: "Learn water condensation principles with a scaled-down version of our system",
      price: "₹5,899",
      features: ["Peltier cooling demo", "Temperature sensors", "Data logging", "Science experiments"]
    },
    {
      title: "Algae Bioreactor Kit",
      description: "Discover how algae converts CO₂ to oxygen with this educational bioreactor",
      price: "₹2,499",
      features: ["Live algae culture", "CO₂ monitoring", "Growth tracking", "pH testing kit"]
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setFormData({
      name: '',
      email: '',
      organization: '',
      interest: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-emerald-100 mb-8">
              Join us in creating a sustainable future. There are many ways to support 
              our mission and make a real environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Making Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
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
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to contribute to our environmental mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunityCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${card.color} p-6`}>
                  <div className="text-white mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white/90">{card.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {card.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gray-100 hover:bg-emerald-50 text-emerald-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Kits Section */}
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
              Educational Kits & DIY Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on learning tools for schools, colleges, and communities to understand 
              environmental technology and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalKits.map((kit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-48 flex items-center justify-center">
                  <div className="text-white">
                    <Gift className="h-16 w-16 mx-auto mb-4" />
                    <div className="text-center text-2xl font-bold">{kit.price}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{kit.title}</h3>
                  <p className="text-gray-600 mb-4">{kit.description}</p>
                  <ul className="space-y-2 mb-6">
                    {kit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                    Order Kit
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Subscribe to our newsletter for the latest updates on environmental technology, 
              project milestones, and community impact stories.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get involved? Send us a message and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="partnership">Partnership</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="education">Educational Programs</option>
                    <option value="support">Support/Donations</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">gitanjali.thiyagu@gmail.com | pratyushyadav.bbps@gmail.com | monishaaggarwal818@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 92204 28914</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Dwarka, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                <p className="text-emerald-100 mb-6">
                  Connect with like-minded individuals working towards a sustainable future. 
                  Follow us on social media for daily updates and inspiration.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-emerald-800 transition-colors">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-emerald-800 transition-colors">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-emerald-800 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;