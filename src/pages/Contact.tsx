import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Users,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "gitanjali.thiyagu@gmail.com | pratyushyadav.bbps@gmail.com | monishaaggarwal818@gmail.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 9220428914",
      description: "Mon-Fri 9:00 AM to 6:00 PM IST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "Dwarka, Delhi",
      description: "Schedule an appointment"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      details: "< 24 Hours",
      description: "Average response time"
    }
  ];

  const inquiryTypes = [
    { value: "partnership", label: "Partnership & Collaboration", icon: <Users className="h-5 w-5" /> },
    { value: "media", label: "Media & Press Inquiries", icon: <MessageSquare className="h-5 w-5" /> },
    { value: "support", label: "Support & Donations", icon: <CheckCircle className="h-5 w-5" /> },
    { value: "education", label: "Educational Programs", icon: <Globe className="h-5 w-5" /> },
    { value: "technical", label: "Technical Questions", icon: <Send className="h-5 w-5" /> },
    { value: "general", label: "General Inquiry", icon: <Mail className="h-5 w-5" /> }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: ''
    });
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-emerald-100">
              Ready to make a difference? Get in touch with our team for partnerships, 
              collaborations, or to learn more about our environmental solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-emerald-50 to-white p-8 rounded-xl border border-emerald-100 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-emerald-600">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <div className="text-emerald-600 font-semibold mb-2">{info.details}</div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Type of Inquiry
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label key={type.value} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-emerald-50 transition-colors">
                        <input
                          type="radio"
                          name="type"
                          value={type.value}
                          checked={formData.type === type.value}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                          className="text-emerald-600 focus:ring-emerald-500"
                        />
                        <div className="ml-3 flex items-center">
                          <div className="text-emerald-600 mr-2">{type.icon}</div>
                          <span className="text-sm text-gray-700">{type.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                      <p className="text-gray-600">
                        Collaborate with us on environmental projects and technology development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Media Inquiries</h3>
                      <p className="text-gray-600">
                        Press releases, interviews, and media coverage requests.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Globe className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Educational Programs</h3>
                      <p className="text-gray-600">
                        Bring our technology to schools and communities for hands-on learning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Support Our Mission</h3>
                      <p className="text-gray-600">
                        Learn about donation opportunities and how to support our work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-emerald-100 mb-6">
                  We understand the urgency of environmental challenges. Our team is committed 
                  to responding to all inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center text-emerald-200">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Professional and personalized responses</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect on Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Follow us for daily updates, environmental tips, and behind-the-scenes content.
                </p>
                <div className="flex space-x-4">
                  {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((platform, index) => (
                    <button 
                      key={platform}
                      className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors duration-200"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Innovation Hub</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Located in the heart of Mumbai, our facility houses our research lab, 
              testing center, and demonstration units. Schedule a visit to see our 
              technology in action.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Schedule a Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;