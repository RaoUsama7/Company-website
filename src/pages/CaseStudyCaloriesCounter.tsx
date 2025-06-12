
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone, Brain, Database } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyCaloriesCounter = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    { title: "Secure Authentication", description: "Seamlessly sign up or log in with Firebase Authentication for a secure, cross-device experience" },
    { title: "Profile Management", description: "Customize dietary goals, preferences, and health objectives tailored to your lifestyle" },
    { title: "Favorite Recipes", description: "Save your go-to meals or healthy finds in one organized space" },
    { title: "AI Food Scanning", description: "Instantly scan and identify foods to calculate their calorie content using Firebase ML" },
    { title: "Daily Calorie Tracking", description: "Monitor daily intake with real-time updates and visual breakdowns by food group or meal" },
    { title: "Recipe Recommendations", description: "Get suggestions based on preferences, past meals, and caloric goals" },
    { title: "Step-by-Step Cooking Guides", description: "Easy-to-follow instructions and visuals make cooking healthy meals approachable" },
    { title: "Cross-Platform Navigation", description: "Built with Solito to ensure seamless navigation across Android and iOS" },
    { title: "Modern UI with Tailwind", description: "A clean, modern interface optimized for readability, ease of use, and performance" }
  ];

  const techStack = [
    { name: "TypeScript", icon: "💻", description: "Robust and scalable foundation for a stable cross-platform app" },
    { name: "React Native", icon: "📱", description: "Cross-platform mobile development framework" },
    { name: "Solito", icon: "🛣️", description: "Shared routing architecture for future-proofing and potential web extension" },
    { name: "TailwindCSS", icon: "🎨", description: "Unified design language with customizable components" },
    { name: "Firebase", icon: "🔥", description: "All-in-one backend for authentication, real-time updates, analytics, and ML food scanning" }
  ];

  const futureRoadmap = [
    "Meal planning & grocery list generation",
    "Fitness tracker integrations (Apple Health, Google Fit, Fitbit)",
    "Macro & micronutrient breakdown",
    "Push reminders for meals, water intake, and step goals",
    "Social community for meal sharing and progress tracking"
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <Link to="/trail-stories" className="inline-flex items-center text-tribe-blue hover:text-tribe-blue/80 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Trail Stories
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Health & Wellness
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Calories Counter <span className="text-tribe-blue">Your Smart Guide to Food & Fitness</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                AI-powered calorie tracking with personalized nutrition insights and recipe recommendations. 
                A complete health companion built with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React Native", "AI/ML", "Health", "Firebase"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-tribe-blue/20 text-tribe-blue rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="/lovable-uploads/800ed702-a0aa-4553-877a-29a576fd7a09.png" 
                  alt="Calories Counter App" 
                  className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-tribe-blue/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tribe-orange/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Project <span className="text-tribe-blue">Overview</span>
            </h2>
            <div className="prose prose-lg max-w-none text-earth-700">
              <p className="text-xl leading-relaxed mb-6">
                Calories Counter is a smart, intuitive mobile app designed to empower users to take control 
                of their health through personalized food tracking, AI-powered calorie recognition, and seamless recipe discovery.
              </p>
              <p className="leading-relaxed mb-6">
                Whether you're managing your weight, tracking macros, or simply exploring new meals, 
                Calories Counter turns everyday eating into a mindful and rewarding experience.
              </p>
              <p className="leading-relaxed">
                With the help of cutting-edge technologies like Firebase AI, React Native, and Tailwind, 
                we built an app that balances functionality and simplicity, helping users stay on top of 
                their nutritional goals — wherever they are.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Features */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-earth-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Core <span className="text-tribe-blue">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-tribe-blue mr-3" size={20} />
                  <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-earth-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Tech & Design <span className="text-tribe-blue">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-earth-100"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="font-display font-semibold text-xl mb-2">{tech.name}</h3>
                <p className="text-earth-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Images */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-earth-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            App <span className="text-tribe-blue">Screenshots</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <img 
                src="/lovable-uploads/1245eeed-2a2a-4e4e-af87-862b9d0e62e8.png" 
                alt="Calories Counter Features" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="mt-4 text-earth-600">Advanced tracking with comprehensive technology stack</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <img 
                src="/lovable-uploads/b6595150-283e-4a91-98bc-42373de32af2.png" 
                alt="Calories Counter User Interface" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="mt-4 text-earth-600">User-friendly interface with seamless authentication flow</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Results <span className="text-tribe-blue">Delivered</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Smartphone, title: "Fast & Responsive", description: "Highly personalized user experience" },
              { icon: Brain, title: "AI-Powered", description: "Food recognition and calorie tracking" },
              { icon: CheckCircle, title: "Elegant UI", description: "Smooth navigation and intuitive interactions" },
              { icon: Database, title: "Scalable", description: "Designed for future health features" }
            ].map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <result.icon className="mx-auto mb-4 text-tribe-blue" size={48} />
                <h3 className="font-display font-semibold text-xl mb-2">{result.title}</h3>
                <p className="text-earth-600">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Roadmap */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-earth-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Future <span className="text-tribe-blue">Roadmap Ideas</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureRoadmap.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="text-tribe-blue mr-3 flex-shrink-0" size={20} />
                  <span className="text-earth-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Client Testimonial */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-tribe-blue text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">💬</div>
            <blockquote className="text-2xl md:text-3xl font-display italic mb-8">
              "Calories Counter delivers exactly what we envisioned — a sleek, smart health companion that uses the best of AI and design to make healthy eating approachable and enjoyable. Outstanding execution!"
            </blockquote>
            <cite className="text-tribe-blue/80 text-lg">— Client Testimonial</cite>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="bg-earth-100 p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Build Your Own <span className="text-tribe-blue">Health App?</span>
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's create a health and wellness solution that makes a real impact on people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/trail-stories">
                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default CaseStudyCaloriesCounter;
