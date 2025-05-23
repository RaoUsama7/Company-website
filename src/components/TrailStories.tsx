
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    icon: "🏙️"
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
    icon: "🏥"
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
    icon: "🌱"
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
    icon: "💰"
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

const tagVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

const TrailStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="case-studies" className="py-24 bg-earth-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-3"
          >
            Trailmarks
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Real Work. <span className="text-tribe-blue">Real Impact.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We don't just talk about building what matters—we do it. Here's proof: real projects, real challenges, real solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0.6, x: -10 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0.7,
                  x: activeIndex === index ? 0 : -5,
                  scale: activeIndex === index ? 1.02 : 1,
                }}
                whileHover={{ 
                  opacity: 1, 
                  x: activeIndex === index ? 0 : 0,
                  backgroundColor: "rgba(255, 255, 255, 0.05)" 
                }}
                transition={{ duration: 0.3 }}
                className={`p-6 mb-4 rounded-lg cursor-pointer border border-transparent transition-all ${activeIndex === index ? 'border-tribe-blue bg-earth-800/50' : 'hover:bg-earth-800/30'}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${study.color} mr-4`}
                  >
                    <span className="text-2xl">{study.icon || study.category.charAt(0)}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-1">{study.title}</h3>
                    <p className="text-gray-400 text-sm">{study.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-1 lg:col-span-2"
          >
            <motion.div
              layout
              key={caseStudies[activeIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-earth-800/50 rounded-xl overflow-hidden h-full shadow-lg shadow-tribe-blue/10"
            >
              <motion.div 
                className="h-56 md:h-72 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={caseStudies[activeIndex].image} 
                  alt={caseStudies[activeIndex].title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </motion.div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudies[activeIndex].tags.map((tag, i) => (
                    <motion.span 
                      key={tag} 
                      variants={tagVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={caseStudies[activeIndex].title}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-display font-bold mb-4 text-tribe-blue"
                >
                  {caseStudies[activeIndex].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={caseStudies[activeIndex].description}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-gray-300 mb-6"
                >
                  {caseStudies[activeIndex].description}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10 group">
                    View Full Case Study 
                    <motion.span 
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="ml-2 inline-flex"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-tribe-blue hover:bg-tribe-blue/90 group">
              See More Trail Stories
              <motion.span 
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="ml-1 inline-flex"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrailStories;
