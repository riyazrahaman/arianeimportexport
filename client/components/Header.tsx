import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "917075047050";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Our products", id: "trending-products" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F0efee66edcff438ea9ae4cd8db9b680f?format=webp&width=800"
              alt="ARIANE WORLD IMPEX"
              className="h-10 w-auto"
            />
            <span className="font-heading text-lg font-bold text-foreground hidden sm:block">
              ARIANE WORLD IMPEX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSection(link.id)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <button
              onClick={() =>
                handleWhatsAppClick(
                  "Hi! I would like to get a quote for my shipping needs.",
                )
              }
              className="hidden sm:inline-flex px-6 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Get Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    "Hi! I would like to get a quote for my shipping needs.",
                  )
                }
                className="w-full mt-4 px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
