import React, { useState, useEffect } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "Harmoniq",
    category: "Social Media",
    description: "From Lagging App to Scalable Product: How TTT Transformed a React Native iOS App Into a Modern, Future-Proof Platform.",
    image: "/lovable-uploads/ebc03188-4dc2-480f-a081-b9f1b76e6706.png",
    tags: ["React Native", "Social Media", "Performance"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "harmoniq"
  },
  {
    id: 2,
    title: "Lively Pencil",
    category: "Social Media",
    description: "A Frontend Rebuild that Unlocked a Social Platform for Readers & Bloggers. Clean, scalable architecture for the literary community.",
    image: "/lovable-uploads/eda53215-87db-46b6-9dc6-e564e4de3a33.png",
    tags: ["React Native", "Social Platform", "Literary"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "lively-pencil"
  },
  {
    id: 3,
    title: "Little Dreams",
    category: "AI",
    description: "AI-Powered Bedtime Magic: How TTT Engineered a Personalized Storytelling App That Scales Imagination and Revenue.",
    image: "/lovable-uploads/f6b70bdc-127d-42e9-979e-4de34287c471.png",
    tags: ["AI/ML", "Mobile App", "Storytelling"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "little-dreams"
  },
  {
    id: 4,
    title: "Little Lingo",
    category: "Education",
    description: "Language Learning That Grows With Kids: How TTT Revamped a Buggy Codebase into a Vibrant, Multilingual EdTech Platform.",
    image: "/lovable-uploads/ede72a27-07fd-482a-8246-02db292f3af7.png",
    tags: ["Education", "Language Learning", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false,
    slug: "little-lingo"
  },
  {
    id: 5,
    title: "Calories Counter",
    category: "Health & Wellness",
    description: "Your Smart Guide to Food & Fitness: AI-powered calorie tracking with personalized nutrition insights and recipe recommendations.",
    image: "/lovable-uploads/800ed702-a0aa-4553-877a-29a576fd7a09.png",
    tags: ["React Native", "AI/ML", "Health", "Firebase"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "calories-counter"
  },
  {
    id: 6,
    title: "Latte Delivery",
    category: "Food & Beverage",
    description: "End-to-End Food Delivery Ecosystem: Complete multi-app platform with real-time tracking and seamless vendor management.",
    image: "/lovable-uploads/7ee4e9e3-9210-4950-a3cc-ed8e05e2e10a.png",
    tags: ["Flutter", "Laravel", "Food Delivery", "Real-time"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "latte-delivery"
  },
  {
    id: 7,
    title: "SnapPick",
    category: "AR",
    description: "Augmented Reality-Powered Warehouse Management System that revolutionizes logistics with AR-driven navigation and intelligent picking automation.",
    image: "/lovable-uploads/2d410c50-cc88-4056-89c1-a15f0460509f.png",
    tags: ["AR/VR", "Logistics", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "snappick"
  },
  {
    id: 8,
    title: "Calm Quest",
    category: "Gamification",
    description: "A Journey Into Digital Serenity: An immersive mobile wellness application that merges casual gaming with mindfulness and stress relief.",
    image: "/lovable-uploads/7c42af98-a63c-4803-9f4f-5932f2da099e.png",
    tags: ["Gaming", "Wellness", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "calm-quest"
  },
  {
    id: 9,
    title: "Divine Duelists",
    category: "Gamification",
    description: "Strategy Meets Power in a Tactical Card RPG: A deep, strategic deck-building experience with evolving AI battles and card synergies.",
    image: "/lovable-uploads/6d4bd372-b964-406e-9f75-bbebf64cc458.png",
    tags: ["Gaming", "Strategy", "Card Game"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false,
    slug: "divine-duelists"
  },
  {
    id: 10,
    title: "Ice Cream Roll",
    category: "Gamification",
    description: "A Delightful Dessert Simulation Game with engaging, visually rich gameplay that appeals to a broad audience from kids to casual players.",
    image: "/lovable-uploads/0a80d8ac-9a2b-447d-9e61-23b6e38e5353.png",
    tags: ["Gaming", "Simulation", "Unity"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "ice-cream-roll"
  },
  {
    id: 11,
    title: "Perfect Organizing",
    category: "Gamification",
    description: "Calming Sorting & Puzzle Game designed for stress relief with simple yet satisfying gameplay and mindful activities.",
    image: "/lovable-uploads/e4002e94-9933-4886-a1d6-63e196bad607.png",
    tags: ["Gaming", "Puzzle", "Relaxation"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false,
    slug: "perfect-organizing"
  }
];

const categories = ["All", "Social Media", "AI", "Education", "Health & Wellness", "Food & Beverage", "Gamification", "AR"];
const tags = ["React Native", "AI/ML", "Web App", "Mobile App", "Social Media", "Performance", "Gaming", "Education", "Language Learning", "Storytelling", "AR/VR", "Logistics", "Wellness", "Strategy", "Card Game", "Social Platform", "Literary", "Simulation", "Unity", "Puzzle", "Relaxation", "Health", "Firebase", "Flutter", "Laravel", "Food Delivery", "Real-time"];

const TrailStoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTags, setActiveTags] = useState([]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
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
              {/* <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded text-tribe-blue focus:ring-tribe-blue"
                  checked={featuredOnly}
                  onChange={() => setFeaturedOnly(!featuredOnly)}
                />
                Featured Only
              </label> */}
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
                  <Link to={`/case-study/${study.slug}`}>
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
                  </Link>
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
            <Link to="/contact">
              <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default TrailStoriesPage;
