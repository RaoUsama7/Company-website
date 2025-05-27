
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Code, 
  Palette, 
  Smartphone, 
  Globe,
  Send,
  Briefcase
} from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Frontend Development",
    location: "Bahawalpur / Remote",
    type: "Full-time",
    salary: "Competitive",
    icon: Code,
    description: "Join our tribe as a Senior React Developer and help build amazing web applications that make a difference.",
    requirements: [
      "5+ years of React experience",
      "TypeScript proficiency",
      "Experience with modern build tools",
      "Strong problem-solving skills"
    ],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Bahawalpur / Remote",
    type: "Full-time",
    salary: "Competitive",
    icon: Palette,
    description: "Create stunning designs that not only look great but also provide exceptional user experiences.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user-centered design principles"
    ],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Mobile Development",
    location: "Bahawalpur / Remote",
    type: "Full-time",
    salary: "Competitive",
    icon: Smartphone,
    description: "Build native and cross-platform mobile applications that users love to interact with.",
    requirements: [
      "React Native or Flutter experience",
      "Native iOS/Android development knowledge",
      "App Store deployment experience",
      "API integration skills"
    ],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Full Stack Developer",
    department: "Backend Development",
    location: "Bahawalpur / Remote",
    type: "Full-time",
    salary: "Competitive",
    icon: Globe,
    description: "Work on both frontend and backend technologies to deliver complete solutions for our clients.",
    requirements: [
      "Node.js and Express.js experience",
      "Database design and management",
      "RESTful API development",
      "Cloud services knowledge (AWS/Azure)"
    ],
    posted: "1 day ago"
  }
];

const benefits = [
  {
    icon: "🏠",
    title: "Remote-First Culture",
    description: "Work from anywhere while being part of our close-knit tribe"
  },
  {
    icon: "📚",
    title: "Learning & Development",
    description: "Continuous learning opportunities and conference attendance"
  },
  {
    icon: "🎯",
    title: "Project Variety",
    description: "Work on diverse projects across different industries"
  },
  {
    icon: "🤝",
    title: "Collaborative Environment",
    description: "Be part of a supportive team that values innovation"
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description: "Flexible hours and understanding of personal commitments"
  },
  {
    icon: "🚀",
    title: "Growth Opportunities",
    description: "Clear career progression paths and leadership development"
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    coverLetter: ''
  });

  const handleApplicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleApply = (jobTitle: string) => {
    setApplicationForm(prev => ({ ...prev, position: jobTitle }));
    setSelectedJob(null);
    // Scroll to application form
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with application data
    const mailtoLink = `mailto:ttt@the-tech-tribe.com?subject=Job Application - ${encodeURIComponent(applicationForm.position)}&body=${encodeURIComponent(
      `Name: ${applicationForm.name}\nEmail: ${applicationForm.email}\nPhone: ${applicationForm.phone}\nPosition: ${applicationForm.position}\n\nCover Letter:\n${applicationForm.coverLetter}\n\nResume/Portfolio: ${applicationForm.resume}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      resume: '',
      coverLetter: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-tribe-blue via-tribe-blue/90 to-tribe-blue/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Join the Tribe 🏕️
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Be part of a team that builds technology with soul and strategy. 
              We're looking for passionate individuals who dare to make a difference.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-tribe-blue hover:bg-gray-100 font-semibold px-8 py-3"
              onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Briefcase className="mr-2" size={20} />
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why Choose Our Tribe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where creativity thrives and innovation happens naturally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="job-openings" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and start your journey with the Tech Trailblazers Tribe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-tribe-blue">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-tribe-blue/10 rounded-lg">
                          <job.icon className="text-tribe-blue" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                          <p className="text-tribe-blue font-medium">{job.department}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-tribe-blue/10 text-tribe-blue">
                        {job.posted}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={16} />
                        {job.salary}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.slice(0, 2).map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-tribe-blue rounded-full"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-tribe-blue hover:bg-tribe-blue/90"
                        onClick={() => handleApply(job.title)}
                      >
                        Apply Now
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      >
                        {selectedJob === job.id ? 'Less Info' : 'More Info'}
                      </Button>
                    </div>

                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t"
                      >
                        <h4 className="font-semibold mb-2">Full Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-tribe-blue rounded-full"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Apply to Join Our Tribe
              </h2>
              <p className="text-lg text-gray-600">
                Ready to start your journey with us? Fill out the form below and let's begin the conversation.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        value={applicationForm.name}
                        onChange={handleApplicationChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationForm.email}
                        onChange={handleApplicationChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        value={applicationForm.phone}
                        onChange={handleApplicationChange}
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-medium">
                        Position Applied For *
                      </label>
                      <Input
                        id="position"
                        value={applicationForm.position}
                        onChange={handleApplicationChange}
                        placeholder="e.g., Senior React Developer"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="resume" className="text-sm font-medium">
                      Resume/Portfolio Link *
                    </label>
                    <Input
                      id="resume"
                      value={applicationForm.resume}
                      onChange={handleApplicationChange}
                      placeholder="Link to your resume, LinkedIn, or portfolio"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="coverLetter" className="text-sm font-medium">
                      Cover Letter *
                    </label>
                    <Textarea
                      id="coverLetter"
                      value={applicationForm.coverLetter}
                      onChange={handleApplicationChange}
                      placeholder="Tell us why you want to join our tribe and what makes you the perfect fit for this role..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-tribe-blue hover:bg-tribe-blue/90" size="lg">
                    <Send className="mr-2" size={20} />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
