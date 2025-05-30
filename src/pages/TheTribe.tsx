import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Rocket,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Founder & Tech Lead",
    bio: "Former Google engineer with a passion for building products that matter. Alex leads our technical vision and ensures we're always pushing boundaries.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Samantha Chen",
    role: "UX/UI Lead",
    bio: "Design-thinker with a knack for turning complex problems into intuitive interfaces. Sam ensures our products aren't just functional—they're a joy to use.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Marcus Johnson",
    role: "Backend Architect",
    bio: "Infrastructure guru who's built systems that scale to millions. Marcus ensures our foundations are rock-solid so we can build bold on top.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Leila Patel",
    role: "Product Strategist",
    bio: "Former startup founder with an eye for market opportunities. Leila helps our clients identify what to build, why to build it, and how to make it succeed.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
];

const values = [
  {
    title: "Build Bold",
    description:
      "We don't play it safe—we build what matters. That means taking calculated risks and charting new territory.",
    icon: Rocket,
    color: "bg-tribe-blue/10 text-tribe-blue",
  },
  {
    title: "Radical Clarity",
    description:
      "We cut through the noise and deliver clarity—in our code, our communication, and our thinking.",
    icon: Lightbulb,
    color: "bg-tribe-orange/10 text-tribe-orange",
  },
  {
    title: "Trust & Transparency",
    description:
      "We believe in honest conversations and open processes. No secrets, no surprises—just straight talk.",
    icon: ShieldCheck,
    color: "bg-tribe-purple/10 text-tribe-blue",
  },
  {
    title: "Partners, Not Vendors",
    description:
      "We're in it for the long haul. Your success is our success, and we're committed to both.",
    icon: HeartHandshake,
    color: "bg-tribe-green/10 text-tribe-green",
  },
];

const TheTribe = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              The Tribe
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              A Different Breed of{" "}
              <span className="text-tribe-blue">Digital Builders</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a tribe of thinkers, makers, and doers united by a common
              cause: to build technology that matters for those who dare to make
              a difference.
            </p>
            <Button className="bg-tribe-blue hover:bg-tribe-blue/90 text-white">
              Join Our Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                Building What Matter,{" "}
                <span className="text-tribe-blue">For Those Who Dare</span>
              </h2>
              <div className="prose prose-lg text-earth-700 max-w-none">
                <p>
                Tech Tribe didn’t start with a shared mindset,
                that building digital products should be about more than just clean code or clever design.
                It should be about clarity, impact, and doing things the right way.
                </p>
                <p>
                We’re a close-knit team of makers, thinkers, and builders who came together to create something different.
                No bloated processes. No overpromising. Just honest work, sharp execution, and a belief that small,
                focused teams can do big things.
                </p>
                <p>
                We were built on the same foundations that have powered every great collaboration in history, trust, clarity,
                 craftsmanship, and the courage to do things differently. These are the principles that built civilizations,
                launched revolutions, and continue to shape how bold ideas become real.
                </p>
                <p>
                We're a modern team, who is not chasing trends. We’re channeling something older — 
                the timeless drive to make meaningful things, with people who care, for causes that matter.
                </p>
                <p>
                Our story isn’t about how long we’ve been around.
                It’s about what we’ve chosen to carry forward and what we’re daring to build next.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-tribe-blue/10 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-tribe-orange/10 rounded-lg"></div>
                <img
                  src="/dual logo.jpeg"
                  alt="Our team collaborating"
                  className="w-full h-auto rounded-xl shadow-lg relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Principles That{" "}
              <span className="text-tribe-blue">Guide Our Path</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              These aren't just words on a wall—they're the beliefs that drive
              every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-full ${value.color} flex items-center justify-center mb-4`}
                >
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-earth-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Meet the Tribe
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              The Faces Behind{" "}
              <span className="text-tribe-blue">The Magic</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              We're small by design. Every member of our tribe is here because
              they're exceptional at what they do and passionate about why they
              do it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 group"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-tribe-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-earth-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center p-8 rounded-xl bg-earth-100 border border-tribe-blue/10">
              <div className="flex items-center gap-3">
                <Users size={24} className="text-tribe-blue" />
                <p className="text-xl font-display font-medium text-earth-900">
                  <span className="text-tribe-blue font-semibold">
                    Want to join the tribe?
                  </span>{" "}
                  We're always looking for exceptional talent.
                </p>
              </div>
              <Button className="ml-6 bg-tribe-blue hover:bg-tribe-blue/90">
                See Open Positions
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default TheTribe;
