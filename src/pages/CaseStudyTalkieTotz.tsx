
import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Smartphone, Code, Database, Settings, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudyTalkieTotz = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-earth-900 via-earth-800 to-earth-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/826c450a-5486-4505-a9cd-ab9a1726fb62.png')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link to="/trail-stories">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Trail Stories
              </Button>
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-tribe-blue/20 text-tribe-blue rounded-full text-sm font-medium">
                Education
              </span>
              <span className="px-3 py-1 bg-tribe-blue/20 text-tribe-blue rounded-full text-sm font-medium">
                Parenting
              </span>
              <span className="px-3 py-1 bg-tribe-blue/20 text-tribe-blue rounded-full text-sm font-medium">
                EdTech
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              TalkieTotz Educational App
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              Launching a Lesson-Based App for Parents: From Figma to Functional MVP
            </p>
            
            <p className="text-lg text-gray-300 max-w-2xl">
              A founder's idea. A beautifully designed prototype. A launch-ready product—engineered and deployed end-to-end by TTT.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeInUp}>
              <img 
                src="/lovable-uploads/826c450a-5486-4505-a9cd-ab9a1726fb62.png" 
                alt="TalkieTotz App Main Screen" 
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
            
            <motion.div {...fadeInUp} className="space-y-6">
              <div>
                <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
                  Project Overview
                </h2>
                <p className="text-earth-600 leading-relaxed">
                  TalkieTotz is an intuitive, parent-guided mobile app designed to help bilingual families teach their toddlers a second or heritage language, regardless of the parent's fluency level. Built as an MVP, the app offers a flexible, step-by-step language learning plan tailored to children under 4.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-earth-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-tribe-blue mb-2" />
                  <div className="text-sm text-earth-500 font-medium">Timeline</div>
                  <div className="text-earth-900 font-semibold">8 weeks</div>
                </div>
                <div className="p-4 bg-earth-50 rounded-lg">
                  <Users className="h-6 w-6 text-tribe-blue mb-2" />
                  <div className="text-sm text-earth-500 font-medium">Team Size</div>
                  <div className="text-earth-900 font-semibold">4 members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">
                The Challenge
              </h2>
              <p className="text-lg text-earth-600">
                Transform an Idea Into a User-Validated MVP
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/e3ce538b-d66e-4cc4-8fcd-7b058e08059f.png" 
                  alt="TalkieTotz Project Description" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-earth-600 leading-relaxed">
                  When the founder approached us, they already had a clear purpose: help parents through engaging, lesson-based content—available via a seamless mobile experience.
                </p>
                <p className="text-earth-600 leading-relaxed">
                  What they needed was a partner to bring their detailed Figma designs to life, advise on what makes a smart MVP, and execute across the entire product lifecycle: front end, back end, admin tooling, and deployment.
                </p>
                <p className="text-earth-600 leading-relaxed">
                  Like many early-stage founders, they didn't just need code—they needed guidance, ownership, and speed.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">
                Technologies & Architecture
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/eb76ace3-d172-4462-9187-979da0351fbe.png" 
                  alt="Frontend Technologies" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/75b41722-ac7f-44ab-8b93-09e1ea5d90ce.png" 
                  alt="Backend Technologies" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-tribe-blue/20">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-tribe-blue mb-2" />
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-earth-600 space-y-1">
                    <li>React Native</li>
                    <li>TypeScript</li>
                    <li>Expo Router</li>
                    <li>RTK Query</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-tribe-blue/20">
                <CardHeader>
                  <Database className="h-8 w-8 text-tribe-blue mb-2" />
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-earth-600 space-y-1">
                    <li>NestJS</li>
                    <li>MongoDB</li>
                    <li>Prisma ORM</li>
                    <li>JWT Authentication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-tribe-blue/20">
                <CardHeader>
                  <Settings className="h-8 w-8 text-tribe-blue mb-2" />
                  <CardTitle className="text-lg">Admin Panel</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-earth-600 space-y-1">
                    <li>React.js</li>
                    <li>TailwindCSS</li>
                    <li>REST APIs</li>
                    <li>Real-time Updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-tribe-blue/20">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-tribe-blue mb-2" />
                  <CardTitle className="text-lg">Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-earth-600 space-y-1">
                    <li>Firebase Analytics</li>
                    <li>PostHog Integration</li>
                    <li>User Behavior Tracking</li>
                    <li>Performance Metrics</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">
                Core Functionalities
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/f6c4c19a-4471-45d0-87d2-ce8729e50c71.png" 
                  alt="App Core Features" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/826e8063-6d14-4d5a-a08b-97b1b84ecfa5.png" 
                  alt="Advanced Features" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/b0f6602c-d2b4-42ef-b2f8-c0b25fb03e8e.png" 
                  alt="User Experience Features" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/de7f9c54-101f-40ce-b377-98d047b1e913.png" 
                  alt="Learning Features" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-earth-600">
                Architecting for Flexibility, Delivering for Speed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInUp}>
                <img 
                  src="/lovable-uploads/b7a35f1d-af72-42ed-b8bd-ad09fe26d31c.png" 
                  alt="Admin Dashboard Features" 
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-tribe-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-900">MVP Reimagined for Data-Driven Learning</h3>
                      <p className="text-earth-600 text-sm">Instead of launching with in-app purchases, we proposed analytics tools to gather rich usage insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-tribe-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-900">Built a Fully Custom Admin Panel</h3>
                      <p className="text-earth-600 text-sm">Clean, intuitive dashboard for managing lessons, tracking users, and updating content in real time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-tribe-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-900">Robust Backend in NestJS + MongoDB</h3>
                      <p className="text-earth-600 text-sm">Modern, scalable backend architecture allowing rapid iteration without compromising structure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-tribe-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-900">End-to-End Type-Safe API Integration</h3>
                      <p className="text-earth-600 text-sm">Using RTK Query with codegen for fully type-safe API requests from frontend to backend.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-earth-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                The Result
              </h2>
              <p className="text-xl text-gray-300">
                A Functional MVP, Launched and Validated
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-earth-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-tribe-blue">Scalable Architecture</h3>
                <p className="text-gray-300">Ready for future funding or feature development with modern tech stack</p>
              </div>
              <div className="p-6 bg-earth-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-tribe-blue">Live User Analytics</h3>
                <p className="text-gray-300">Real-time insights guiding product decisions and user behavior understanding</p>
              </div>
              <div className="p-6 bg-earth-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-tribe-blue">Custom Admin Control</h3>
                <p className="text-gray-300">Full control over content and user management via intuitive admin portal</p>
              </div>
              <div className="p-6 bg-earth-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-tribe-blue">Deployment Ready</h3>
                <p className="text-gray-300">Smooth deployment and upgrade path managed by our team</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-earth-800 p-8 rounded-lg">
              <blockquote className="text-xl italic text-gray-300 mb-4">
                "Really helpful and made the process really smooth. Really happy with the service and looking forward to continuing working with the team."
              </blockquote>
              <cite className="text-tribe-blue font-semibold">— TalkieTotz Founder</cite>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-tribe-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Build Your Educational App?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's transform your vision into a product that makes learning engaging and accessible.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-tribe-blue hover:bg-gray-100">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyTalkieTotz;
