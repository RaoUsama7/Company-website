import React, { useState, useEffect } from 'react';
import { ArrowRight, Filter, Layout, Code2, Zap, Sparkles, ChevronDown, ChevronUp, Settings2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "Harmoniq",
    category: "Mobile",
    description: "From Lagging App to Scalable Product: How TTT Transformed a React Native iOS App Into a Modern, Future-Proof Platform.",
    image: "/lovable-uploads/ebc03188-4dc2-480f-a081-b9f1b76e6706.png",
    tags: ["React Native", "Social Media", "Performance Optimization"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "harmoniq"
  },
  {
    id: 2,
    title: "TalkieTotz",
    category: "Mobile",
    description: "Launching a Lesson-Based App for Parents: From Figma to Functional MVP. A complete educational platform for bilingual families.",
    image: "/lovable-uploads/826c450a-5486-4505-a9cd-ab9a1726fb62.png",
    tags: ["React Native", "Education", "MVP", "NestJS"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "talkie-totz"
  },
  {
    id: 3,
    title: "Lively Pencil",
    category: "Mobile",
    description: "A Frontend Rebuild that Unlocked a Social Platform for Readers & Bloggers. Clean, scalable architecture for the literary community.",
    image: "/lovable-uploads/eda53215-87db-46b6-9dc6-e564e4de3a33.png",
    tags: ["React Native", "Social Platform", "Literary"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "lively-pencil"
  },
  {
    id: 4,
    title: "Little Dreams",
    category: "Mobile",
    description: "AI-Powered Bedtime Magic: How TTT Engineered a Personalized Storytelling App That Scales Imagination and Revenue.",
    image: "/lovable-uploads/f6b70bdc-127d-42e9-979e-4de34287c471.png",
    tags: ["AI/ML", "Mobile App", "Storytelling"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "little-dreams"
  },
  {
    id: 5,
    title: "Little Lingo",
    category: "Mobile",
    description: "Language Learning That Grows With Kids: How TTT Revamped a Buggy Codebase into a Vibrant, Multilingual EdTech Platform.",
    image: "/lovable-uploads/ede72a27-07fd-482a-8246-02db292f3af7.png",
    tags: ["Education", "Language Learning", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false,
    slug: "little-lingo"
  },
  {
    id: 6,
    title: "Calories Counter",
    category: "Mobile",
    description: "Your Smart Guide to Food & Fitness: AI-powered calorie tracking with personalized nutrition insights and recipe recommendations.",
    image: "/lovable-uploads/800ed702-a0aa-4553-877a-29a576fd7a09.png",
    tags: ["React Native", "AI/ML", "Health", "Firebase"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "calories-counter"
  },
  {
    id: 7,
    title: "Latte Delivery",
    category: "Mobile",
    description: "End-to-End Food Delivery Ecosystem: Complete multi-app platform with real-time tracking and seamless vendor management.",
    image: "/lovable-uploads/7ee4e9e3-9210-4950-a3cc-ed8e05e2e10a.png",
    tags: ["Flutter", "Laravel", "Food Delivery", "Real-time"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "latte-delivery"
  },
  {
    id: 8,
    title: "SnapPick",
    category: "Mobile",
    description: "Augmented Reality-Powered Warehouse Management System that revolutionizes logistics with AR-driven navigation and intelligent picking automation.",
    image: "/lovable-uploads/2d410c50-cc88-4056-89c1-a15f0460509f.png",
    tags: ["AR/VR", "Logistics", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "snappick"
  },
  {
    id: 9,
    title: "Calm Quest",
    category: "Game",
    description: "A Journey Into Digital Serenity: An immersive mobile wellness application that merges casual gaming with mindfulness and stress relief.",
    image: "/lovable-uploads/7c42af98-a63c-4803-9f4f-5932f2da099e.png",
    tags: ["Gaming", "Wellness", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "calm-quest"
  },
  {
    id: 10,
    title: "Divine Duelists",
    category: "Game",
    description: "Strategy Meets Power in a Tactical Card RPG: A deep, strategic deck-building experience with evolving AI battles and card synergies.",
    image: "/lovable-uploads/6d4bd372-b964-406e-9f75-bbebf64cc458.png",
    tags: ["Gaming", "Strategy", "Card Game"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false,
    slug: "divine-duelists"
  },
  {
    id: 11,
    title: "Ice Cream Roll",
    category: "Game",
    description: "A Delightful Dessert Simulation Game with engaging, visually rich gameplay that appeals to a broad audience from kids to casual players.",
    image: "/lovable-uploads/0a80d8ac-9a2b-447d-9e61-23b6e38e5353.png",
    tags: ["Gaming", "Simulation", "Unity"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "ice-cream-roll"
  },
  {
    id: 12,
    title: "Perfect Organizing",
    category: "Game",
    description: "Calming Sorting & Puzzle Game designed for stress relief with simple yet satisfying gameplay and mindful activities.",
    image: "/lovable-uploads/e4002e94-9933-4886-a1d6-63e196bad607.png",
    tags: ["Gaming", "Puzzle", "Relaxation"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: false,
    slug: "perfect-organizing"
  },
  {
    id: 13,
    title: "Team2Challenge (T2C)",
    category: "Mobile",
    description: "The T2C Platform is a comprehensive digital ecosystem built to simplify how clubs, coaches, parents, and players connect, organize, and grow together.",
    image: "/t2c latest.png",
    tags: ["Community", "Sports", "Gamification"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "team2challenge"
  },
  {
    id: 17,
    title: "Team2Challenge (Web)",
    category: "Web",
    description: "The T2C Web Dashboard provides the administrative spine for the entire ecosystem, empowering club owners with deep analytical insights and complex management tools.",
    image: "/t2c latest.png",
    tags: ["Next.js", "SaaS", "Dashboard", "Real-time"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "team2challenge-web"
  },
  {
    id: 14,
    title: "VenluShop",
    category: "Web",
    description: "Anime-Inspired Global Retail: A dynamic Shopify Plus storefront bridging the gap between anime culture and high-performance activewear.",
    image: "/venlu shop/VenluSHop.png",
    tags: ["Shopify", "E-commerce", "Performance Optimization"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "venlushop"
  },
  {
    id: 15,
    title: "Lume Reader",
    category: "Mobile",
    description: "The Distraction-Free Reading App: A production-ready Flutter MVP solving usability gaps with a reader-first UI and offline-first sync.",
    image: "/lume reader/Lume Reader.png",
    tags: ["Study", "Education", "Flutter", "MVP"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "lume-reader"
  },
  {
    id: 16,
    title: "DANI by Daniel K",
    category: "Web",
    description: "Luxury Jewelry E-Commerce: A custom-built Shopify Plus storefront with internationalization and conversion-driven UI/UX.",
    image: "/danbydk/danibydk.png",
    tags: ["Shopify", "Luxury", "E-commerce", "Internationalization"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "dani"
  },
  {
    id: 17,
    title: "Renée",
    category: "Web",
    description: "AI-Powered Emotional Support: A 24/7 judgment-free therapeutic companion built with Next.js 15 and Prismic CMS for mental wellness.",
    image: "/rene/reene.png",
    tags: ["AI", "Health & Wellness", "Next.js 15", "Prismic CMS"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "renee"
  },
  {
    id: 18,
    title: "Rentigo",
    category: "Web",
    description: "Enterprise Property Management: A complete lifecycle PMS with multi-role access, financial automation, and portal syndication.",
    image: "/rentigo/rentigo.png",
    tags: ["Laravel", "PropTech", "Enterprise", "FinTech", "DocuSign"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "rentigo"
  },
  {
    id: 19,
    title: "Fundreef",
    category: "Web",
    description: "AI-Powered Fundraising: An intelligent platform matching startups with investors using Gemini AI, Meilisearch, and real-time CRM tools.",
    image: "/fundreef/Fundreef.png",
    tags: ["Laravel 10", "AI", "FinTech", "Marketplace", "Meilisearch"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "fundreef"
  },
  {
    id: 20,
    title: "Freecer.at",
    category: "Web",
    description: "Premium Luxury E-commerce: A high-performance Shopify storefront with advanced SEO, global reach, and conversion-focused design.",
    image: "/freecer/_Freecer.png",
    tags: ["Shopify", "E-commerce", "MERN Stack", "SEO Optimization"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "freecer"
  },
  {
    id: 21,
    title: "EXRE",
    category: "Web",
    description: "Professional Agency Platform: A multilingual, high-performance website built with Next.js and Sanity CMS for brand authority and lead generation.",
    image: "/exre/EXRE.png",
    tags: ["Next.js", "Sanity CMS", "Agency", "SEO", "Multilingual"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "exre"
  },
  {
    id: 22,
    title: "Avenir",
    category: "Web",
    description: "Luxury Home Decor E-commerce: A premium Shopify storefront with curated collection designs, performance tuning, and high-conversion UX.",
    image: "/avenenir/Avenir.png",
    tags: ["Shopify", "E-commerce", "Liquid", "Luxury", "UX/UI"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "avenir"
  }
];

const categories = ["All", "Social Media", "AI", "Education", "Health & Wellness", "Food & Beverage", "E-commerce", "Gamification", "AR", "Sports", "PropTech", "Agency"];
const platforms = ["All", "Mobile", "Web", "Game"];

const techTags = [
  "React Native", "Flutter", "Next.js 15", "Next.js", "Laravel 10", "Laravel",
  "NestJS", "Unity", "MERN Stack", "React.js", "Liquid", "AI/ML", "AI", "AR/VR",
  "Web App", "Mobile App"
];

const ecosystemTags = [
  "Shopify", "Sanity CMS", "Prismic CMS", "Firebase", "Stripe", "Meilisearch",
  "DocuSign", "SEO Optimization", "SEO", "Performance Optimization", "UX/UI",
  "Real-time", "MVP", "SaaS", "E-commerce", "Marketplace", "Enterprise",
  "Collaboration", "Internationalization", "Multilingual"
];

const domainTags = [
  "Social Media", "Social Platform", "Community", "Education", "Study",
  "Language Learning", "Gaming", "Strategy", "Card Game", "Simulation",
  "Puzzle", "Relaxation", "Storytelling", "Logistics", "Food Delivery",
  "Sports", "Health", "Wellness", "PropTech", "FinTech", "Luxury", "Literary", "Agency"
];

const allTags = [...techTags, ...ecosystemTags, ...domainTags];

const TrailStoriesPage = () => {
  const [activePlatform, setActivePlatform] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTags, setActiveTags] = useState([]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredStudies = caseStudies.filter(study => {
    // Filter by platform
    if (activePlatform !== "All" && study.category !== activePlatform) {
      return false;
    }

    // Filter by industry (we reuse tags for industry mapping in some cases, or just specific grouping)
    if (activeCategory !== "All") {
      // If we find the category in tags, we filter by that
      if (!study.tags.includes(activeCategory) && study.category !== activeCategory) {
        return false;
      }
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
        className="py-12 bg-gray-50/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 md:p-8">
            <div className="flex flex-col gap-10">
              {/* Platform Toggle - High Level */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="inline-flex p-1.5 bg-earth-100/50 rounded-2xl border border-earth-100 shadow-inner mb-4">
                  {platforms.map(platform => (
                    <button
                      key={platform}
                      className={cn(
                        "px-10 py-3 rounded-xl text-sm font-bold transition-all duration-400 relative z-10",
                        activePlatform === platform
                          ? "bg-white text-tribe-blue shadow-lg scale-105 border border-earth-100/50"
                          : "text-earth-500 hover:text-earth-700"
                      )}
                      onClick={() => setActivePlatform(platform)}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
                <p className="text-earth-400 text-xs font-medium uppercase tracking-[0.2em]">Select Your Interest Platform</p>
              </div>

              {/* Category Filter */}
              <div className="pt-8 border-t border-earth-100/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-tribe-blue/10 p-2 rounded-lg">
                    <Filter size={20} className="text-tribe-blue" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-earth-900">Industries & Domains</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={cn(
                        "px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform active:scale-95",
                        activeCategory === category
                          ? "bg-tribe-blue text-white shadow-lg shadow-tribe-blue/30 -translate-y-0.5"
                          : "bg-white text-earth-600 hover:bg-earth-100 hover:shadow-md border border-earth-100"
                      )}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm hover:shadow-md",
                    showAdvancedFilters
                      ? "bg-earth-900 text-white border-earth-900"
                      : "bg-white text-earth-700 border-earth-100 hover:border-tribe-blue"
                  )}
                >
                  <Settings2 size={16} className={showAdvancedFilters ? "animate-spin-slow" : ""} />
                  {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Engineering Filters"}
                  {showAdvancedFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              <AnimatePresence>
                {showAdvancedFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden space-y-10"
                  >
                    {/* Tech Stack Section */}
                    <div className="pt-8 border-t border-earth-100/50">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-earth-100 p-2 rounded-lg">
                            <Code2 size={20} className="text-earth-600" />
                          </div>
                          <h3 className="text-xl font-display font-bold text-earth-900">Tech Stack</h3>
                        </div>
                        {activeTags.length > 0 && (
                          <button
                            className="text-sm font-semibold text-earth-500 hover:text-tribe-blue transition-colors flex items-center gap-1 group"
                            onClick={() => setActiveTags([])}
                          >
                            Reset All Filters
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">×</span>
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {techTags.map(tag => (
                          <button
                            key={tag}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                              activeTags.includes(tag)
                                ? "bg-earth-900 text-white border-earth-900 shadow-md scale-105"
                                : "bg-white text-earth-500 border-earth-100 hover:border-tribe-blue hover:text-tribe-blue"
                            )}
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Ecosystem Section */}
                    <div className="pt-8 border-t border-earth-100/50">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-earth-100 p-2 rounded-lg">
                          <Zap size={20} className="text-earth-600" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-earth-900">Partner Ecosystem</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {ecosystemTags.map(tag => (
                          <button
                            key={tag}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                              activeTags.includes(tag)
                                ? "bg-earth-900 text-white border-earth-900 shadow-md scale-105"
                                : "bg-white text-earth-500 border-earth-100 hover:border-tribe-blue hover:text-tribe-blue"
                            )}
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Domains Section */}
                    <div className="pt-8 border-t border-earth-100/50">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-earth-100 p-2 rounded-lg">
                          <Sparkles size={20} className="text-earth-600" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-earth-900">Specialized Domains</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {domainTags.map(tag => (
                          <button
                            key={tag}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                              activeTags.includes(tag)
                                ? "bg-earth-900 text-white border-earth-900 shadow-md scale-105"
                                : "bg-white text-earth-500 border-earth-100 hover:border-tribe-blue hover:text-tribe-blue"
                            )}
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Selection Status */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeTags.length > 0 ? "auto" : 0,
                  opacity: activeTags.length > 0 ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-dashed border-earth-200">
                  <span className="text-sm font-bold text-earth-900">Current Focus:</span>
                  {activeTags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-tribe-blue/10 text-tribe-blue text-xs font-bold animate-in fade-in zoom-in duration-300"
                    >
                      {tag}
                      <button
                        onClick={() => toggleTag(tag)}
                        className="hover:bg-tribe-blue/20 rounded-full p-0.5"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </motion.div>
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
                    <div className="relative h-48 overflow-hidden bg-earth-100 flex items-center justify-center">
                      {study.featured && (
                        <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-tribe-blue text-white text-xs font-bold rounded-full">
                          Featured
                        </div>
                      )}
                      {study.image ? (
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="text-earth-300 font-display font-bold text-lg opacity-50">
                          {study.title}
                        </div>
                      )}
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
