"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Waves, Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Trip Packages", href: "/packages" },
    { name: "Local Guides", href: "/guides" },
    { name: "Culture", href: "/culture" },
    { name: "Community", href: "/community" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between text-dark">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Waves className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-light"} group-hover:text-gold transition-colors`} />
          <span className={`text-2xl font-heading font-bold ${isScrolled ? "text-primary" : "text-light"}`}>
            DiscoverKrui
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                isScrolled ? "text-primary" : "text-light/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className={`flex items-center gap-1 text-sm font-medium hover:text-gold transition-colors ${
              isScrolled ? "text-primary" : "text-light"
            }`}
          >
            <Globe className="w-4 h-4" />
            {lang}
          </button>
          <Link
            href="/guides/join"
            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
              isScrolled
                ? "border-primary text-primary hover:bg-primary hover:text-light"
                : "border-light text-light hover:bg-light hover:text-primary"
            }`}
          >
            Become a Guide
          </Link>
          <Link
            href="/packages"
            className="px-6 py-2.5 rounded-full bg-accent text-light text-sm font-bold shadow-lg hover:shadow-accent/50 hover:-translate-y-0.5 transition-all"
          >
            Plan My Trip
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-md ${
            isScrolled ? "text-primary" : "text-light"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-light shadow-lg py-4 px-6 lg:hidden flex flex-col gap-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary font-medium p-2 hover:bg-secondary/20 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/guides/join"
              className="w-full py-3 rounded-full border border-primary text-primary text-center font-medium"
            >
              Become a Guide
            </Link>
            <Link
              href="/packages"
              className="w-full py-3 rounded-full bg-accent text-light text-center font-bold"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
