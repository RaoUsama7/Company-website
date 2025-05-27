
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Briefcase,
  FileText,
  Users,
  PhoneCall,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    subtitle: "The Tribe",
  },
  {
    name: "Services",
    path: "/what-we-build",
    icon: Briefcase,
    subtitle: "Our Craft",
  },
  {
    name: "Case Studies",
    path: "/trail-stories",
    icon: FileText,
    subtitle: "Trailmarks",
  },
  {
    name: "About",
    path: "/the-tribe",
    icon: Users,
    subtitle: "The Story",
  },
  {
    name: "Contact",
    path: "/",
    icon: PhoneCall,
    subtitle: "Start a Fire",
    onClick: () => window.location.href = '/#contact'
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={scrolled ? "/LOGO 2.png" : "/LOGO 3.png"}
            alt="Tech Trailblazers Tribe Logo" 
            className="h-8 md:h-10 w-auto"
          />
          <span className={cn(
            "ml-2 font-display font-semibold tracking-tight transition-all duration-300 text-sm md:text-base",
            scrolled ? "text-black" : "text-white"
          )}>
            Tech Trailblazers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg group relative transition-all duration-300",
                scrolled ? "text-black" : "text-white"
              )}
              onClick={item.onClick}
            >
              <span className="flex items-center space-x-2 relative transition-all duration-300">
                <item.icon size={18} className="mr-2" />
                <span className="flex flex-col leading-tight font-display min-w-[80px] relative">
                  <span
                    className={cn(
                      "text-sm transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:decoration-tribe-blue group-hover:opacity-0",
                      scrolled ? "text-black" : "text-white"
                    )}
                  >
                    {item.subtitle}
                  </span>
                  <span
                    className={cn(
                      "text-xs absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300",
                      scrolled ? "text-black" : "text-white"
                    )}
                  >
                    {item.name}
                  </span>
                </span>
              </span>
            </Link>
          ))}

          <Button
            variant="default"
            size="sm"
            className="bg-tribe-blue hover:bg-tribe-blue/90 ml-2"
            onClick={() => {
              window.location.href = '/#contact';
            }}
          >
            Build With Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-earth-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background flex flex-col pt-20 px-6 md:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 text-lg font-medium py-3 hover:text-tribe-blue transition-colors border-b border-gray-100"
              onClick={() => {
                setIsOpen(false);
                if (item.onClick) {
                  item.onClick();
                }
              }}
            >
              <item.icon size={20} />
              <div className="flex flex-col">
                <span>{item.name}</span>
                <span className="text-sm text-muted-foreground">
                  {item.subtitle}
                </span>
              </div>
            </Link>
          ))}
          <Button
            className="mt-4 bg-tribe-blue hover:bg-tribe-blue/90"
            onClick={() => {
              setIsOpen(false);
              window.location.href = '/#contact';
            }}
          >
            Build With Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
