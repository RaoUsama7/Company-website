
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Tribe!",
        description: "You've successfully subscribed to our tribal wisdom. Get ready for insights, updates, and exclusive content straight to your inbox!",
        duration: 4000,
      });
      setEmail('');
    } else {
      toast({
        title: "Email Required",
        description: "Please enter your email address to join our tribe and receive tribal wisdom.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <footer className="bg-earth-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="font-tribal text-tribe-blue text-2xl">TTT</span>
              <span className="ml-2 font-display font-semibold text-white">
                Tech Trailblazers
              </span>
            </a>
            <p className="mb-4">
              Building What Matters.
              <br />
              For Those Who Dare.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/t-t-t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-earth-800 flex items-center justify-center hover:bg-tribe-blue transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <span>💼</span>
              </a>
              <a
                href="https://www.instagram.com/the.tech.tribe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-earth-800 flex items-center justify-center hover:bg-tribe-blue transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <span>📷</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-tribe-blue transition-colors" onClick={scrollToTop}>
                  Welcome to the Tribe
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-build"
                  className="hover:text-tribe-blue transition-colors"
                  onClick={scrollToTop}
                >
                  What We Build
                </Link>
              </li>
              <li>
                <Link
                  to="/trail-stories"
                  className="hover:text-tribe-blue transition-colors"
                  onClick={scrollToTop}
                >
                  Trail Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/the-tribe"
                  className="hover:text-tribe-blue transition-colors"
                  onClick={scrollToTop}
                >
                  The Tribe
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-tribe-blue transition-colors"
                  onClick={scrollToTop}
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-tribe-blue transition-colors"
                  onClick={scrollToTop}
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/apps-that-move')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  Apps That Move
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/web-built-to-work')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  Web, but Built to Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/design-that-clicks')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  Design that Clicks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/games-with-soul')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  Games with Soul
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/code-that-floats')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  Code That Floats
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/custom-solutions')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  Custom Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/mvp-development')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  MVP Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/cybersecurity')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  Cybersecurity
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('/services/e-commerce')}
                  className="hover:text-tribe-blue transition-colors text-left"
                >
                  E-commerce
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get Tribal Wisdom
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for tech insights and tribal tales.
            </p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-earth-800 text-white border border-earth-700 rounded-l-md py-2 px-3 w-full focus:outline-none focus:border-tribe-blue"
              />
              <button 
                type="submit"
                className="bg-tribe-blue text-white rounded-r-md px-3 hover:bg-tribe-blue/90 transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-earth-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Tech Trailblazers Tribe. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm mt-2 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-tribe-blue transition-colors" onClick={scrollToTop}>
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-tribe-blue transition-colors" onClick={scrollToTop}>
              Terms of Service
            </Link>
            <Link to="/cookies-policy" className="hover:text-tribe-blue transition-colors" onClick={scrollToTop}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
