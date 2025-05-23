import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Tech Trailblazers Tribe',
          to_email: 'ttt@the-tech-tribe.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-earth-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              Let's Talk
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold tracking-tight mb-4 md:mb-6">
              Or just drop by the fire pit 🪵🔥
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              Ready to start your journey with the Tech Trailblazers Tribe?
              We're excited to hear about your project, answer your questions,
              or just have a chat about all things tech.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tribe-blue/20 flex items-center justify-center text-tribe-blue shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">Find Our Camp</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Innovista Cholistan, Sector A 
                    <br />
                    DHA Bahawalpur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tribe-blue/20 flex items-center justify-center text-tribe-blue shrink-0">
                  📱
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">Send Signals</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    ttt@the-tech-tribe.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tribe-blue/20 flex items-center justify-center text-tribe-blue shrink-0">
                  🌐
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    Follow the Trail
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <a
                      href="https://www.facebook.com/Tech.tribee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-gray-300 hover:text-tribe-blue transition-colors"
                    >
                      Facebook
                    </a>
                    <span className="text-gray-500">•</span>
                    <a
                      href="https://www.linkedin.com/company/t-t-t"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-gray-300 hover:text-tribe-blue transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-gray-500">•</span>
                    <a
                      href="https://www.instagram.com/the.tech.tribe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-gray-300 hover:text-tribe-blue transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-earth-800/50 rounded-xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="bg-earth-700/50 border-earth-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-earth-700/50 border-earth-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-earth-700/50 border-earth-600 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or question..."
                  rows={5}
                  className="bg-earth-700/50 border-earth-600 text-white placeholder:text-gray-400 resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-tribe-blue hover:bg-tribe-blue/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm mt-2">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm mt-2">
                  Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
