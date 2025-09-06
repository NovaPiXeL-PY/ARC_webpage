import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, TrendingUp } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Revolutionary Air Purification Technology Achieves 95% Pollution Reduction",
    excerpt: "Our latest field tests demonstrate unprecedented effectiveness in removing PM2.5 and harmful pollutants from urban air, setting new standards for environmental technology.",
    author: "Dr. Priya Sharma",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Research",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const blogPosts = [
    {
      title: "Understanding Air Quality Index: What the Numbers Really Mean",
      excerpt: "A comprehensive guide to interpreting AQI measurements and their health implications for your community.",
      author: "Vikash Singh",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Water Scarcity Solutions: From Vapor to Life-Giving Resource",
      excerpt: "Exploring innovative approaches to water generation in water-scarce regions using atmospheric water harvesting.",
      author: "Dr. Anita Kumar",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Community Success Story: Rural Village Transforms with Clean Technology",
      excerpt: "How one village in Rajasthan achieved energy independence and clean water access through our sustainable solutions.",
      author: "Rahul Patel",
      date: "November 28, 2024",
      readTime: "5 min read",
      category: "Impact",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "The Science Behind Algae Bioreactors: Nature's CO₂ Converters",
      excerpt: "Deep dive into how algae systems efficiently convert carbon dioxide to oxygen while producing valuable biomass.",
      author: "Dr. Anita Kumar",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "Research",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Solar Power Integration: Maximizing Efficiency in Environmental Systems",
      excerpt: "Best practices for solar panel optimization and energy storage in off-grid environmental monitoring systems.",
      author: "Rahul Patel",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Youth Environmental Leadership Program Launches Nationwide",
      excerpt: "Empowering the next generation of environmental leaders through hands-on technology education and community projects.",
      author: "Vikash Singh",
      date: "November 8, 2024",
      readTime: "4 min read",
      category: "Community",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = [
    { name: "All", count: 12 },
    { name: "Research", count: 4 },
    { name: "Technology", count: 3 },
    { name: "Impact", count: 2 },
    { name: "Education", count: 2 },
    { name: "Community", count: 1 }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Research: "bg-blue-100 text-blue-800",
      Technology: "bg-emerald-100 text-emerald-800",
      Impact: "bg-purple-100 text-purple-800",
      Education: "bg-yellow-100 text-yellow-800",
      Community: "bg-red-100 text-red-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Updates</h1>
            <p className="text-xl text-emerald-100">
              Stay informed with the latest insights, research findings, and success stories 
              from the world of environmental technology and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <TrendingUp className="h-6 w-6 text-emerald-600 mr-2" />
              <span className="text-emerald-600 font-semibold">Featured Article</span>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{featuredPost.date}</span>
                    </div>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-emerald-50 rounded-lg transition-colors duration-200">
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-gray-500 text-sm">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        
                        <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
                  Load More Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Subscribe to our newsletter and stay informed about the latest developments 
              in environmental technology and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;