
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Smartphone, MapPin, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudySnapPick = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/trail-stories" className="inline-flex items-center text-tribe-blue hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                AR/VR
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Logistics
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Mobile App
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="text-tribe-blue">SnapPick:</span> Augmented Reality-Powered Warehouse Management
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Internal Innovation Project: Revolutionizing Logistics with AR-Driven Navigation and Intelligent Picking Automation
            </p>

            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/2d410c50-cc88-4056-89c1-a15f0460509f.png"
                alt="SnapPick AR Warehouse App"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                <div className="grid md:grid-cols-2 gap-6 text-earth-700">
                  <div>
                    <p className="mb-2"><strong>Project Type:</strong> Internal Innovation</p>
                    <p className="mb-2"><strong>Industry:</strong> Logistics, Supply Chain, Warehouse Automation</p>
                    <p className="mb-0"><strong>Platforms:</strong> Android, iOS, Web (Admin Portal)</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Timeline:</strong> 8 months</p>
                    <p className="mb-2"><strong>Team Size:</strong> 6 developers</p>
                    <p className="mb-0"><strong>Status:</strong> Production Ready</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                  <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-blue-800 mb-2">AR Navigation</h3>
                  <p className="text-sm text-blue-700">Real-time AR guidance for optimal picking routes</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-800 mb-2">Smart Routing</h3>
                  <p className="text-sm text-green-700">AI-powered path optimization and task prioritization</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-800 mb-2">Real-Time Analytics</h3>
                  <p className="text-sm text-purple-700">Live performance monitoring and productivity insights</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">🧩 Problem Statement</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                In modern warehouses, manual picking and order fulfillment processes often result in inefficiencies, high error rates, and increased operational costs. Traditional warehouse management systems are not optimized for real-time guidance or intelligent decision-making.
              </p>

              <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                SnapPick was born out of our team's vision to reimagine warehouse operations using cutting-edge technology. The challenge was to build a cross-platform solution that combined Augmented Reality, real-time alerts, smart algorithms, and role-based automation—all while remaining cost-effective and intuitive for day-to-day use by non-technical warehouse staff.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Key Challenges</h3>
                <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                  <li>High error rates in manual picking processes</li>
                  <li>Inefficient routing leading to wasted time and resources</li>
                  <li>Lack of real-time visibility into warehouse operations</li>
                  <li>Difficulty training new warehouse staff</li>
                  <li>Limited integration with existing WMS systems</li>
                  <li>Need for scalable solution across multiple warehouse locations</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">🚀 Solution Overview</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                SnapPick is a first-of-its-kind warehouse management platform that integrates AR-driven navigation, real-time role-based workflows, and intelligent picking automation to drastically improve warehouse throughput and accuracy.
              </p>

              <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                Developed in-house, it allows warehouse managers to oversee every part of the fulfillment cycle—from order creation to delivery—while pickers and packagers benefit from intuitive mobile workflows and AR-enhanced efficiency.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "AR-Powered Navigation",
                    desc: "Real-time augmented reality overlays guide workers to exact item locations with optimal routing",
                    icon: "🔍"
                  },
                  {
                    title: "Intelligent Task Management",
                    desc: "AI algorithms prioritize orders and optimize picking sequences for maximum efficiency",
                    icon: "🧠"
                  },
                  {
                    title: "Role-Based Workflows",
                    desc: "Customized interfaces for managers, pickers, packers, and quality control staff",
                    icon: "👥"
                  },
                  {
                    title: "Real-Time Monitoring",
                    desc: "Live dashboard with performance metrics, bottleneck identification, and productivity analytics",
                    icon: "📊"
                  },
                  {
                    title: "Barcode & QR Integration",
                    desc: "Seamless scanning workflow with automatic verification and error prevention",
                    icon: "📱"
                  },
                  {
                    title: "Cross-Platform Admin",
                    desc: "Web-based management portal for configuration, reporting, and system administration",
                    icon: "💻"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-tribe-blue/5 rounded-xl">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">{feature.title}</h4>
                      <p className="text-earth-700 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Architecture</h2>

              <div className="bg-earth-50 p-8 rounded-xl mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Mobile AR App</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• React Native</li>
                      <li>• ARCore/ARKit</li>
                      <li>• TypeScript</li>
                      <li>• Redux Toolkit</li>
                      <li>• React Native Camera</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Backend System</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Node.js & Express</li>
                      <li>• PostgreSQL</li>
                      <li>• Redis Queue</li>
                      <li>• Socket.io (Real-time)</li>
                      <li>• JWT Authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Admin Portal</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• React.js</li>
                      <li>• Material-UI</li>
                      <li>• Chart.js</li>
                      <li>• WebSocket</li>
                      <li>• Progressive Web App</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Results & Impact</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">65%</div>
                    <div className="text-earth-700">Faster Picking Times</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">90%</div>
                    <div className="text-earth-700">Error Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">45%</div>
                    <div className="text-earth-700">Operational Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">80%</div>
                    <div className="text-earth-700">Training Time Reduction</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-4 text-blue-800">Innovation in Action</h3>
                <p className="text-blue-700 mb-4">
                  "SnapPick represents the future of warehouse management. By combining AR with intelligent algorithms, we've created a solution that not only improves efficiency but also makes warehouse work more intuitive and engaging for our team members. The real-time analytics give us unprecedented visibility into our operations."
                </p>
                <p className="text-sm text-blue-600 font-medium">- Internal Product Development Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Revolutionize Your Operations?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's build AR-powered solutions that transform how your business operates and delivers value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                Explore AR Solutions
              </Button>
              <Link to="/trail-stories">
                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudySnapPick;
