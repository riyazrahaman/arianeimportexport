import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg text-secondary-foreground">
                  A
                </span>
              </div>
              <span className="font-heading text-xl font-bold">AIANE WORLD IMPEX</span>
            </div>
            <p className="text-gray-300 text-sm">
              Global shipping and logistics solutions for your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Air Freight
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ground Transport
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tracking"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone
                  size={18}
                  className="text-secondary mt-0.5 flex-shrink-0"
                />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  size={18}
                  className="text-secondary mt-0.5 flex-shrink-0"
                />
                <a
                  href="mailto:info@wshipping.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@wshipping.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-secondary mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-300">
                  123 Shipping Way
                  <br />
                  Port City, PC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} WShipping. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
