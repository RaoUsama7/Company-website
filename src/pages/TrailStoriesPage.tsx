import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Filter, Layout, Code2, Zap, Sparkles, ChevronDown, ChevronUp, Settings2, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 101,
    title: "Team2Challenge (Design)",
    category: "Design",
    description: "Designing a sport-centric community platform: A masterclass in UI/UX for engagement, focusing on seamless user flows and vibrant visual identity.",
    image: "/t2c design/1.png",
    tags: ["UI/UX Design", "Brand Identity", "User Research", "Design System"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "team2challenge-design"
  },
  {
    id: 102,
    title: "Harmoniq (Design)",
    category: "Design",
    description: "Visual identity and product design for a social platform. Creating a harmonious balance between functionality and aesthetic appeal.",
    image: "/harmoniq design/14.png",
    tags: ["UI/UX Design", "Product Design", "Social Platform"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "harmoniq-design"
  },
  {
    id: 103,
    title: "Nexiun (Design)",
    category: "Design",
    description: "Modernizing digital experiences: A high-fidelity design project focusing on futuristic aesthetics and intuitive data visualization.",
    image: "/nexiun/4.png",
    tags: ["UI/UX Design", "Data Visualization", "Future-Proof"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "nexiun-design"
  },
  {
    id: 104,
    title: "Split-Trip (Design)",
    category: "Design",
    description: "Travel made social: A comprehensive design study for sharing trips, focusing on group dynamics and expense sharing interfaces.",
    image: "/splittrip/11.png",
    tags: ["UI/UX Design", "Mobile App", "Travel", "FinTech"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "split-trip-design"
  },
  {
    id: 105,
    title: "TalkieTotz (Design)",
    category: "Design",
    description: "Educational design for the next generation: Creating a playful yet structured interface for bilingual family learning.",
    image: "/talkitotz design/7.png",
    tags: ["UI/UX Design", "Education", "Family-First"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "talkietotz-design"
  },
  {
    id: 1,
    title: "Harmoniq",
    category: "Mobile",
    description: "From Lagging App to Scalable Product: How TTT Transformed a React Native iOS App Into a Modern, Future-Proof Platform.",
    image: "/lovable-uploads/ebc03188-4dc2-480f-a081-b9f1b76e6706.png",
    tags: ["React Native", "Social Media", "Performance Optimization", "Mobile App"],
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
    tags: ["React Native", "Education", "MVP", "NestJS", "Mobile App"],
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
    tags: ["React Native", "Social Platform", "Literary", "Mobile App"],
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
    tags: ["React Native", "AI/ML", "Health", "Firebase", "Mobile App"],
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
    tags: ["Flutter", "Laravel", "Food Delivery", "Real-time", "Mobile App"],
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
    title: "Team2Challenge (Mobile)",
    category: "Mobile",
    description: "The T2C Platform is a comprehensive digital ecosystem built to simplify how clubs, coaches, parents, and players connect, organize, and grow together.",
    image: "/t2c app/main.png",
    tags: ["Community", "Sports", "Gamification", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "team2challenge"
  },
  {
    id: 14,
    title: "Team2Challenge (Web)",
    category: "Web",
    description: "The T2C Web Dashboard provides the administrative spine for the entire ecosystem, empowering club owners with deep analytical insights and complex management tools.",
    image: "/t2c web/main.png",
    tags: ["Next.js", "SaaS", "Dashboard", "Real-time", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "team2challenge-web"
  },
  {
    id: 15,
    title: "VenluShop",
    category: "Web",
    description: "Anime-Inspired Global Retail: A dynamic Shopify Plus storefront bridging the gap between anime culture and high-performance activewear.",
    image: "/venlu shop/main.png",
    tags: ["Shopify", "E-commerce", "Performance Optimization", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "venlushop"
  },
  {
    id: 16,
    title: "Lume Reader",
    category: "Mobile",
    description: "The Distraction-Free Reading App: A production-ready Flutter MVP solving usability gaps with a reader-first UI and offline-first sync.",
    image: "/lume reader/main.png",
    tags: ["Study", "Education", "Flutter", "MVP", "Mobile App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "lume-reader"
  },
  {
    id: 17,
    title: "DANI by Daniel K",
    category: "Web",
    description: "Luxury Jewelry E-Commerce: A custom-built Shopify Plus storefront with internationalization and conversion-driven UI/UX.",
    image: "/danbydk/main.png",
    tags: ["Shopify", "Luxury", "E-commerce", "Internationalization", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "dani"
  },
  {
    id: 18,
    title: "Renée",
    category: "Web",
    description: "AI-Powered Emotional Support: A 24/7 judgment-free therapeutic companion built with Next.js 15 and Prismic CMS for mental wellness.",
    image: "/rene/main.png",
    tags: ["AI", "Health & Wellness", "Next.js 15", "Prismic CMS", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "renee"
  },
  {
    id: 19,
    title: "Rentigo",
    category: "Web",
    description: "Enterprise Property Management: A complete lifecycle PMS with multi-role access, financial automation, and portal syndication.",
    image: "/rentigo/main.png",
    tags: ["Laravel", "PropTech", "Enterprise", "FinTech", "DocuSign", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "rentigo"
  },
  {
    id: 20,
    title: "Fundreef",
    category: "Web",
    description: "AI-Powered Fundraising: An intelligent platform matching startups with investors using Gemini AI, Meilisearch, and real-time CRM tools.",
    image: "/fundreef/main.png",
    tags: ["Laravel 10", "AI", "FinTech", "Marketplace", "Meilisearch", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "fundreef"
  },
  {
    id: 21,
    title: "Freecer.at",
    category: "Web",
    description: "Premium Luxury E-commerce: A high-performance Shopify storefront with advanced SEO, global reach, and conversion-focused design.",
    image: "/freecer/main.png",
    tags: ["Shopify", "E-commerce", "MERN Stack", "SEO Optimization", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "freecer"
  },
  {
    id: 22,
    title: "EXRE",
    category: "Web",
    description: "Professional Agency Platform: A multilingual, high-performance website built with Next.js and Sanity CMS for brand authority and lead generation.",
    image: "/exre/main.png",
    tags: ["Next.js", "Sanity CMS", "Agency", "SEO", "Multilingual", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "exre"
  },
  {
    id: 23,
    title: "Avenir",
    category: "Web",
    description: "Luxury Home Decor E-commerce: A premium Shopify storefront with curated collection designs, performance tuning, and high-conversion UX.",
    image: "/avenenir/main.png",
    tags: ["Shopify", "E-commerce", "Liquid", "Luxury", "UX/UI", "Web App"],
    color: "bg-tribe-blue/10",
    textColor: "text-tribe-blue",
    featured: true,
    slug: "avenir"
  }
];

const categories = ["All", "Social Media", "AI", "Education", "Health & Wellness", "Food & Beverage", "E-commerce", "Gamification", "AR", "Sports", "PropTech", "Agency", "Design"];
const platforms = ["All", "Mobile", "Web", "Game", "Design"];

const techTags = [
  "React Native", "Flutter", "Next.js 15", "Next.js", "Laravel 10", "Laravel",
  "NestJS", "Unity", "MERN Stack", "React.js", "Liquid", "AI/ML", "AI", "AR/VR",
  "Web App", "Mobile App", "UI/UX Design", "Product Design"
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
  "Sports", "Health", "Wellness", "PropTech", "FinTech", "Luxury", "Literary", "Agency", "Design"
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

  const filteredStudies = caseStudies
    .filter(study => {
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
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const toggleTag = (tag: string) => {
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
        className="relative py-24 md:py-32 bg-gradient-to-b from-earth-900 via-earth-800 to-earth-900 text-white overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(30, 174, 219, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(30, 174, 219, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tribe-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tribe-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-tribe-blue/20 text-tribe-blue px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-tribe-blue/40 shadow-lg shadow-tribe-blue/20"
            >
              <TrendingUp className="h-4 w-4" />
              Trailmarks
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 leading-tight"
            >
              Real Work. <span className="text-tribe-blue bg-gradient-to-r from-tribe-blue to-tribe-blue/80 bg-clip-text text-transparent">Real Impact.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            >
              We don't just talk about building what matters—we do it. Here's proof:
              real projects, real challenges, real solutions.
            </motion.p>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-center gap-8 md:gap-12 flex-wrap"
            >
              {[
                { label: "Projects", value: caseStudies.length },
                { label: "Categories", value: 4 },
                { label: "Technologies", value: 15 }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + idx * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-tribe-blue mb-1">{stat.value}+</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 md:p-10 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tribe-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="flex flex-col gap-10 relative z-10">
              {/* Platform Toggle - High Level */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="inline-flex p-1.5 bg-gradient-to-r from-earth-100/80 to-earth-50/80 rounded-2xl border border-earth-200/50 shadow-lg backdrop-blur-sm mb-4">
                  {platforms.map(platform => (
                    <button
                      key={platform}
                      className={cn(
                        "px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative z-10",
                        activePlatform === platform
                          ? "bg-white text-tribe-blue shadow-xl scale-105 border border-tribe-blue/20 transform -translate-y-0.5"
                          : "text-earth-500 hover:text-earth-700 hover:bg-white/50"
                      )}
                      onClick={() => setActivePlatform(platform)}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
                <p className="text-earth-400 text-xs font-medium uppercase tracking-[0.2em] mt-2">Select Your Interest Platform</p>
              </div>

              {/* Category Filter */}
              <div className="pt-8 border-t border-earth-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-tribe-blue/20 to-tribe-blue/10 p-2.5 rounded-xl shadow-sm border border-tribe-blue/20">
                    <Filter size={20} className="text-tribe-blue" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-earth-900">Industries & Domains</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {categories.map(category => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform",
                        activeCategory === category
                          ? "bg-gradient-to-r from-tribe-blue to-tribe-blue/90 text-white shadow-xl shadow-tribe-blue/40 -translate-y-1 border border-tribe-blue/30"
                          : "bg-white text-earth-600 hover:bg-gradient-to-r hover:from-earth-50 hover:to-white hover:shadow-lg border border-earth-200 hover:border-earth-300"
                      )}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="pt-4 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border shadow-lg hover:shadow-xl",
                    showAdvancedFilters
                      ? "bg-gradient-to-r from-earth-900 to-earth-800 text-white border-earth-900 shadow-xl"
                      : "bg-white text-earth-700 border-earth-200 hover:border-tribe-blue hover:bg-gradient-to-r hover:from-white hover:to-earth-50"
                  )}
                >
                  <Settings2 size={16} className={showAdvancedFilters ? "animate-spin-slow" : ""} />
                  {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Engineering Filters"}
                  {showAdvancedFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </motion.button>
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
                          <motion.button
                            key={tag}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                              activeTags.includes(tag)
                                ? "bg-gradient-to-r from-earth-900 to-earth-800 text-white border-earth-900 shadow-lg scale-105"
                                : "bg-white text-earth-500 border-earth-200 hover:border-tribe-blue hover:text-tribe-blue hover:bg-tribe-blue/5 hover:shadow-md"
                            )}
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </motion.button>
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
                          <motion.button
                            key={tag}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                              activeTags.includes(tag)
                                ? "bg-gradient-to-r from-earth-900 to-earth-800 text-white border-earth-900 shadow-lg scale-105"
                                : "bg-white text-earth-500 border-earth-200 hover:border-tribe-blue hover:text-tribe-blue hover:bg-tribe-blue/5 hover:shadow-md"
                            )}
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </motion.button>
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
                          <motion.button
                            key={tag}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                              activeTags.includes(tag)
                                ? "bg-gradient-to-r from-earth-900 to-earth-800 text-white border-earth-900 shadow-lg scale-105"
                                : "bg-white text-earth-500 border-earth-200 hover:border-tribe-blue hover:text-tribe-blue hover:bg-tribe-blue/5 hover:shadow-md"
                            )}
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </motion.button>
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
        className="py-16 bg-gradient-to-b from-white via-gray-50/30 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.length > 0 ? (
              filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{
                    y: -12,
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer relative"
                >
                  <Link to={`/case-study/${study.slug}`}>
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200/50 h-full flex flex-col relative backdrop-blur-sm hover:shadow-2xl hover:shadow-tribe-blue/10 transition-all duration-500">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-tribe-blue/0 via-tribe-blue/0 to-tribe-blue/0 group-hover:from-tribe-blue/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500 rounded-3xl pointer-events-none z-0" />
                      
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-earth-100 via-earth-50 to-white flex items-center justify-center">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-tribe-blue/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {study.featured && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + 0.3, type: "spring", stiffness: 200 }}
                            className="absolute top-4 right-4 z-20 px-4 py-1.5 bg-gradient-to-r from-tribe-blue to-tribe-blue/90 text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-1.5 backdrop-blur-sm border border-white/20"
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            Featured
                          </motion.div>
                        )}
                        
                        {study.image ? (
                          <motion.div
                            className="relative w-full h-full"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          >
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover"
                            />
                            {/* Image overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </motion.div>
                        ) : (
                          <div className="text-earth-300 font-display font-bold text-lg opacity-50">
                            {study.title}
                          </div>
                        )}
                        
                        {/* Hover overlay with CTA */}
                        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/95 via-earth-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6 z-10">
                          <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            className="text-white text-sm font-semibold flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                          >
                            View Project <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </div>
                        
                        {/* Corner accent lines */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-tribe-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-3xl" />
                      </div>

                      {/* Content */}
                      <div className="p-6 relative z-10 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1.5 rounded-full ${study.color} ${study.textColor} text-xs font-semibold shadow-sm border border-tribe-blue/10`}>
                            {study.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-tribe-blue transition-colors duration-300 line-clamp-2 leading-tight">
                          {study.title}
                        </h3>

                        <p className="text-earth-600 text-sm mb-5 line-clamp-3 leading-relaxed flex-1">
                          {study.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {study.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gradient-to-r from-earth-50 to-white text-earth-700 rounded-lg text-xs font-medium border border-earth-200/50 shadow-sm group-hover:border-tribe-blue/30 group-hover:bg-gradient-to-r group-hover:from-tribe-blue/5 group-hover:to-white transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                          {study.tags.length > 3 && (
                            <span className="px-3 py-1 bg-gradient-to-r from-earth-50 to-white text-earth-700 rounded-lg text-xs font-medium border border-earth-200/50 shadow-sm">
                              +{study.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="inline-flex items-center text-tribe-blue font-semibold text-sm group-hover:gap-3 gap-1 transition-all duration-300 mt-auto">
                          <span>View Case Study</span>
                          <motion.div
                            animate={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </div>

                        {/* Bottom corner accent */}
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-tribe-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-3xl" />
                      </div>
                      
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-full py-12 text-center"
              >
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
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="py-20 bg-gradient-to-b from-earth-100 via-white to-earth-50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tribe-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-earth-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/40 max-w-4xl mx-auto text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-tribe-blue/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-earth-100/50 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight">
                Ready to Create Your Own <span className="text-tribe-blue bg-gradient-to-r from-tribe-blue to-tribe-blue/80 bg-clip-text text-transparent">Success Story?</span>
              </h2>
              <p className="text-earth-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's talk about how we can help you build what matters. Whether you have a clear vision or just an inkling of an idea, we're ready to blaze a trail together.
              </p>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-tribe-blue to-tribe-blue/90 hover:from-tribe-blue/90 hover:to-tribe-blue shadow-xl hover:shadow-2xl hover:shadow-tribe-blue/30 transition-all duration-300 px-8 py-6 text-base">
                    Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default TrailStoriesPage;
