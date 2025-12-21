import {
  ArrowRight,
  TrendingUp,
  Zap,
  Shield,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "https://images.unsplash.com/photo-1578575494546-b1fc3546afba?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1559505780-a127184d86b9?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1559454403-ee2da8b10dbb?w=500&h=500&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "917670959512";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Ocean Freight",
      description:
        "Full container load and less than container load services with real-time tracking",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Air Freight",
      description:
        "Fast and reliable air cargo services for time-sensitive shipments worldwide",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Ground Transport",
      description: "Comprehensive domestic and cross-border trucking solutions",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Warehousing",
      description:
        "Secure storage and inventory management at strategic locations",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Delivery",
      description:
        "Same-day and next-day delivery options for urgent shipments",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Customs Clearance",
      description:
        "Expert documentation and clearance services for international shipments",
    },
  ];

  const features = [
    {
      number: "01",
      title: "Real-Time Tracking",
      description:
        "Track your shipments 24/7 with our advanced GPS and IoT technology for complete visibility",
    },
    {
      number: "02",
      title: "Global Network",
      description:
        "Access to 150+ countries with our extensive partner network and logistics hubs",
    },
    {
      number: "03",
      title: "Expert Team",
      description:
        "Highly trained professionals with 20+ years of industry experience at your service",
    },
    {
      number: "04",
      title: "Competitive Rates",
      description:
        "Best-in-class pricing with transparent quotes and no hidden fees",
    },
  ];

  const stats = [
    { number: "50K+", label: "Shipments Delivered" },
    { number: "150+", label: "Countries Served" },
    { number: "99.8%", label: "On-Time Delivery" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
                  <span className="text-sm font-semibold text-secondary">
                    Trusted by Global Brands
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                  Ship Your World with{" "}
                  <span className="text-primary">Confidence</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Industry-leading shipping and logistics solutions with
                  real-time tracking, competitive pricing, and 24/7 support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsAppClick("Hi! I would like to get a quote for my shipping needs.")}
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleWhatsAppClick("Hi! I would like to watch a demo of your shipping platform.")}
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Trusted by 5,000+ businesses
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ⭐⭐⭐⭐⭐ 4.9/5 rating
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-border p-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded-full w-3/4"></div>
                  <div className="h-4 bg-muted rounded-full w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mt-8"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-3 bg-primary rounded-full"></div>
                  <div className="flex-1 h-3 bg-secondary rounded-full"></div>
                  <div className="flex-1 h-3 bg-muted rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions designed to meet your shipping
              needs with efficiency and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Why Choose WShipping
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets unmatched customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-secondary/20 text-secondary font-heading font-bold text-xl">
                    {feature.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-lg text-white/90">
            Get competitive rates and start your first shipment today. Join
            thousands of satisfied customers worldwide.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2 group">
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center border border-border">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Expert Support
              </h3>
              <p className="text-muted-foreground mb-6">
                Dedicated account managers available 24/7 to assist with your
                shipping needs
              </p>
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                Contact Support →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-border">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Industry Leading
              </h3>
              <p className="text-muted-foreground mb-6">
                Award-winning logistics provider recognized for innovation and
                reliability
              </p>
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                Our Awards →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-border">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Secure & Insured
              </h3>
              <p className="text-muted-foreground mb-6">
                Full insurance coverage and advanced security measures for
                complete peace of mind
              </p>
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
