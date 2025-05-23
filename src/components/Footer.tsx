
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
                <Link to="/" className="hover:text-tribe-blue transition-colors">
                  Welcome to the Tribe
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-build"
                  className="hover:text-tribe-blue transition-colors"
                >
                  What We Build
                </Link>
              </li>
              <li>
                <Link
                  to="/trail-stories"
                  className="hover:text-tribe-blue transition-colors"
                >
                  Trail Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/the-tribe"
                  className="hover:text-tribe-blue transition-colors"
                >
                  The Tribe
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-tribe-blue transition-colors"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-tribe-blue transition-colors"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/apps-that-move" className="hover:text-tribe-blue transition-colors">
                  Apps That Move
                </Link>
              </li>
              <li>
                <Link to="/services/web-built-to-work" className="hover:text-tribe-blue transition-colors">
                  Web, but Built to Work
                </Link>
              </li>
              <li>
                <Link to="/services/design-that-clicks" className="hover:text-tribe-blue transition-colors">
                  Design that Clicks
                </Link>
              </li>
              <li>
                <Link to="/services/games-with-soul" className="hover:text-tribe-blue transition-colors">
                  Games with Soul
                </Link>
              </li>
              <li>
                <Link to="/services/code-that-floats" className="hover:text-tribe-blue transition-colors">
                  Code That Floats
                </Link>
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
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-earth-800 text-white border border-earth-700 rounded-l-md py-2 px-3 w-full focus:outline-none focus:border-tribe-blue"
              />
              <button className="bg-tribe-blue text-white rounded-r-md px-3 hover:bg-tribe-blue/90 transition-colors">
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
            <a href="#" className="hover:text-tribe-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-tribe-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-tribe-blue transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
