import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: "RealVista",
    category: "Real Estate",
    description: "Crafted an AI-powered real estate platform that predicts market trends with 92% accuracy.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["AI/ML", "Web App", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true
  },
  {
    id: 2,
    title: "HealthPulse",
    category: "Healthcare",
    description: "Revolutionized patient care with a HIPAA-compliant platform connecting doctors and patients seamlessly.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["Healthcare", "Security", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true
  },
  {
    id: 3,
    title: "EcoTrack",
    category: "Sustainability",
    description: "Built an IoT platform for tracking and reducing corporate carbon footprints with gamification elements.",
    image: "https://images.unsplash.com/photo-1473654729523-203e25dfda10?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["IoT", "Mobile App", "Gamification"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false
  },
  {
    id: 4,
    title: "FinLeap",
    category: "Fintech",
    description: "Developed a blockchain-based microfinance platform that's democratizing access to capital in underserved regions.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["Blockchain", "Fintech", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true
  },
  {
    id: 5,
    title: "EdSpark",
    category: "Education",
    description: "Created an adaptive learning platform that personalizes education for K-12 students based on their learning style.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["Education", "AI/ML", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false
  },
  {
    id: 6,
    title: "FitSync",
    category: "Fitness",
    description: "Designed a fitness companion app that connects with wearables to provide personalized workout recommendations.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["Health Tech", "Mobile App", "IoT"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false
  }
];

const categories = ["All", "Real Estate", "Healthcare", "Sustainability", "Fintech", "Education", "Fitness"];
const tags = ["AI/ML", "Web App", "Mobile App", "IoT", "Blockchain", "Security", "Gamification", "Education", "Health Tech"];

const TrailStoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTags, setActiveTags] = useState([]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  
  const filteredStudies = caseStudies.filter(study => {
    // Filter by category
    if (activeCategory !== "All" && study.category !== activeCategory) {
      return false;
    }
    
    // Filter by tags
    if (activeTags.length > 0 && !study.tags.some(tag => activeTags.includes(tag))) {
      return false;
    }
    
    // Filter by featured status
    if (featuredOnly && !study.featured) {
      return false;
    }
    
    return true;
  });
  
  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };
  
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div 
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            >
              Trailmarks
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6"
            >
              Real Work. <span className="text-tribe-blue">Real Impact.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl text-gray-300 mb-8"
            >
              We don't just talk about building what matters—we do it. Here's proof: 
              real projects, real challenges, real solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Filters */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="py-8 bg-white border-b"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Filter size={20} className="text-earth-500" />
              <h3 className="text-lg font-medium">Filter Stories:</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    activeCategory === category 
                      ? "bg-tribe-blue text-white" 
                      : "bg-earth-100 text-earth-700 hover:bg-earth-200"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded text-tribe-blue focus:ring-tribe-blue"
                  checked={featuredOnly}
                  onChange={() => setFeaturedOnly(!featuredOnly)}
                />
                Featured Only
              </label>
            </div>
          </div>
          
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeTags.length > 0 ? "auto" : 0, opacity: activeTags.length > 0 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              <span className="text-sm font-medium text-earth-500">Active Tags:</span>
              {activeTags.map(tag => (
                <button
                  key={tag}
                  className="px-2 py-1 rounded-full bg-tribe-blue/10 text-tribe-blue text-xs font-medium flex items-center gap-1"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                  <span className="ml-1">×</span>
                </button>
              ))}
              {activeTags.length > 0 && (
                <button
                  className="px-2 py-1 text-xs text-earth-500 hover:text-earth-700"
                  onClick={() => setActiveTags([])}
                >
                  Clear All
                </button>
              )}
            </div>
          </motion.div>
          
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-medium text-earth-500 mb-2">Filter by Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium transition-colors",
                    activeTags.includes(tag) 
                      ? "bg-tribe-blue/20 text-tribe-blue" 
                      : "bg-earth-100 text-earth-600 hover:bg-earth-200"
                  )}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Case Studies Grid */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.length > 0 ? (
              filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(30, 174, 219, 0.2), 0 8px 10px -6px rgba(30, 174, 219, 0.1)"
                  }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    {study.featured && (
                      <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-tribe-blue text-white text-xs font-bold rounded-full">
                        Featured
                      </div>
                    )}
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full ${study.color} ${study.textColor} text-xs font-medium`}>
                        {study.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-tribe-blue transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-earth-600 text-sm mb-4">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-earth-100 text-earth-600 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center text-tribe-blue group-hover:underline">
                      View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-display font-semibold mb-2">No stories match your filters</h3>
                <p className="text-earth-600 mb-6">Try adjusting your filters to see more results</p>
                <Button 
                  variant="outline" 
                  className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10"
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveTags([]);
                    setFeaturedOnly(false);
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </motion.section>
      
      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="py-16 bg-earth-100"
      >
        <div className="container mx-auto px-4">
          <div 
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Create Your Own <span className="text-tribe-blue">Success Story?</span>
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's talk about how we can help you build what matters. Whether you have a clear vision or just an inkling of an idea, we're ready to blaze a trail together.
            </p>
            <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
              Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default TrailStoriesPage;
