
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone, MapPin, CreditCard, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyLatteDelivery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    { title: "Secure Authentication", description: "Sign-up, login, password recovery — implemented across all apps with token-based session handling" },
    { title: "Live Order Tracking", description: "Customers and vendors can see live updates from food prep to doorstep delivery" },
    { title: "Order Customization", description: "Customers can modify items, add notes, and personalize meals" },
    { title: "Vendor Profile Management", description: "Vendors manage menus, pricing, and active/inactive items through a simple interface" },
    { title: "User Profiles for All Roles", description: "Profiles with preferences and role-specific data across customers, vendors, and riders" },
    { title: "Review & Rating System", description: "Customers can rate their experience and provide direct feedback" },
    { title: "Admin Panel for Offers", description: "Laravel-powered backend allows management of promos, discounts, and user roles" },
    { title: "Advanced Search & Filters", description: "Users can easily discover meals, restaurants, and cuisines using deep filtering" },
    { title: "Comprehensive Menu Browsing", description: "Full restaurant listings with categories, ratings, and dish details" },
    { title: "Rider-Optimized UI", description: "One-handed interface design for efficient delivery while on-the-go" },
    { title: "Stripe Payment Integration", description: "Secure, seamless checkout process with instant vendor payouts" },
    { title: "Real-Time Location Sharing", description: "Google Maps API integration for precise rider tracking and ETA updates" },
    { title: "Efficient State Management", description: "Bloc pattern used for clean, scalable architecture and responsive UX" },
    { title: "Cross-Platform Compatibility", description: "Unified user experience and performance across Android and iOS devices" }
  ];

  const challenges = [
    "Developing three separate but harmonized mobile apps under a unified ecosystem",
    "Implementing real-time delivery tracking and location sharing",
    "Ensuring secure and scalable payment processing",
    "Creating intuitive UI flows for different user types, including one-handed UX for delivery riders",
    "Building a powerful admin system for content, offers, and user management"
  ];

  const apps = [
    { name: "Customer App", description: "Order placement, tracking, reviews", icon: "👤" },
    { name: "Vendor App", description: "Menu management, order processing", icon: "🏪" },
    { name: "Rider App", description: "Delivery management, navigation, real-time updates", icon: "🏍️" }
  ];

  const futurePlans = [
    "Integration of loyalty programs and referral systems",
    "AI-driven dish recommendations based on user behavior",
    "Multi-language support for regional scaling",
    "Real-time chat system between customer, vendor, and rider",
    "Push notification campaigns for promotions"
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
                Food & Beverage
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Latte Delivery <span className="text-tribe-blue">End-to-End Food Delivery Ecosystem</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete multi-app platform with real-time tracking and seamless vendor management. 
                A comprehensive food delivery solution built for scalability.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Flutter", "Laravel", "Food Delivery", "Real-time"].map((tag) => (
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
                  src="/lovable-uploads/7ee4e9e3-9210-4950-a3cc-ed8e05e2e10a.png" 
                  alt="Latte Delivery App" 
                  className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-tribe-blue/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tribe-orange/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem Statement */}
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
              Problem <span className="text-tribe-blue">Statement</span>
            </h2>
            <div className="prose prose-lg max-w-none text-earth-700">
              <p className="text-xl leading-relaxed mb-6">
                The client approached us to build a scalable, all-in-one food delivery platform capable of serving customers, 
                restaurant vendors, and delivery riders through dedicated apps — all synchronized with a robust Laravel backend.
              </p>
              <p className="leading-relaxed mb-8">
                The goal was to deliver a highly functional, intuitive experience across all roles, ensuring real-time communication, 
                live order tracking, secure payments, and seamless performance across platforms.
              </p>
              
              <h3 className="text-2xl font-display font-semibold mb-6">Core challenges included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-4 bg-earth-100 rounded-lg"
                  >
                    <CheckCircle className="text-tribe-blue mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Approach */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-earth-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Our <span className="text-tribe-blue">Approach</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-earth-700 leading-relaxed">
              We delivered Latte Delivery as a full-suite food delivery platform, architected using Flutter 
              for its cross-platform capabilities and Laravel for robust backend services and API integrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="font-display font-semibold text-xl mb-3">{app.name}</h3>
                <p className="text-earth-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Delivered */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Features <span className="text-tribe-blue">Delivered</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-earth-100 p-6 rounded-xl"
              >
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-tribe-blue mr-3 flex-shrink-0" size={20} />
                  <h3 className="font-display font-semibold">{feature.title}</h3>
                </div>
                <p className="text-earth-600 text-sm">{feature.description}</p>
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
            App <span className="text-tribe-blue">Interface</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <img 
                src="/lovable-uploads/7accfe07-85d8-4763-89ab-c8351b629e81.png" 
                alt="Latte Delivery Project Description" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="mt-4 text-earth-600">Comprehensive project overview and tech stack</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <img 
                src="/lovable-uploads/c06b4634-7c65-4912-8d05-c926f52663c0.png" 
                alt="Latte Delivery Functionalities" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="mt-4 text-earth-600">Core functionalities and user experience features</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <img 
                src="/lovable-uploads/cc0b2a76-59ee-465d-85c4-0eeb808af311.png" 
                alt="Latte Delivery Frontend Features" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="mt-4 text-earth-600">Frontend key features and technical architecture</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Outcome */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            <span className="text-tribe-blue">Outcome</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Smartphone, title: "Multi-App Ecosystem", description: "Three dedicated apps with admin dashboard" },
              { icon: MapPin, title: "Real-Time Tracking", description: "Live communication between all parties" },
              { icon: CreditCard, title: "Secure Payments", description: "Frictionless ordering with Stripe integration" },
              { icon: Users, title: "Scalable Solution", description: "Built for future expansion and franchising" }
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
          
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-earth-100 p-8 rounded-xl">
              <h3 className="text-2xl font-display font-semibold mb-4">Project Delivered</h3>
              <p className="text-lg text-earth-700 mb-4">
                ✅ Delivered ahead of schedule, with scalability in mind for future market expansion or franchising
              </p>
              <p className="text-lg text-earth-700">
                ✅ Performance-optimized apps with smooth animations and low response times across devices
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Future Plans */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-earth-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Future <span className="text-tribe-blue">Plans</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futurePlans.map((plan, index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="text-tribe-blue mr-3 flex-shrink-0" size={20} />
                  <span className="text-earth-700">{plan}</span>
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
            <div className="text-6xl mb-8">🎖</div>
            <blockquote className="text-2xl md:text-3xl font-display italic mb-8">
              "Latte Delivery has exceeded our expectations. The platform is reliable, fast, and beautifully designed. Our users love the simplicity and power it provides. The real-time tracking and smooth payment experience set it apart."
            </blockquote>
            <cite className="text-tribe-blue/80 text-lg">— Client Feedback</cite>
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
              Ready to Build Your <span className="text-tribe-blue">Food Delivery Platform?</span>
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's create a comprehensive delivery ecosystem that connects customers, vendors, and riders seamlessly.
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

export default CaseStudyLatteDelivery;
