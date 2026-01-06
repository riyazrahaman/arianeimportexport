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
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProductTab, setSelectedProductTab] = useState<"featured" | "latest">("featured");

  const carouselImages = [
    "https://images.unsplash.com/photo-1599599810694-f3361d0a2a05?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&h=500&fit=crop",
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
  const featuredProducts = [
    {
      image: "https://images.unsplash.com/photo-1599599810694-f3361d0a2a05?w=400&h=400&fit=crop",
      title: "Fresh Mangoes",
      description: "Juicy, sweet mangoes sourced directly from premium farms",
    },
    {
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
      title: "Organic Lettuce",
      description: "Crisp, fresh organic lettuce perfect for salads and cuisine",
    },
    {
      image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&h=400&fit=crop",
      title: "Green Spinach",
      description: "Nutrient-rich spinach with superior quality and freshness",
    },
    {
      image: "https://images.unsplash.com/photo-1568695041778-d38fb908f45b?w=400&h=400&fit=crop",
      title: "Fresh Tomatoes",
      description: "Ripe, flavorful tomatoes hand-selected for quality assurance",
    },
    {
      image: "https://images.unsplash.com/photo-1622690691207-81342ee5ff30?w=400&h=400&fit=crop",
      title: "Crispy Cucumbers",
      description: "Cool, refreshing cucumbers ideal for fresh produce markets",
    },
    {
      image: "https://images.unsplash.com/photo-1577661016563-430f63602d4a?w=400&h=400&fit=crop",
      title: "Premium Broccoli",
      description: "Vibrant green broccoli with optimal nutritional value",
    },
    {
      image: "https://images.unsplash.com/photo-1600854687349-6e1f9fd60c77?w=400&h=400&fit=crop",
      title: "Fresh Carrots",
      description: "Sweet, crunchy carrots packed with natural vitamins",
    },
    {
      image: "https://images.unsplash.com/photo-1588187062226-0e2a85e74181?w=400&h=400&fit=crop",
      title: "Organic Cabbage",
      description: "Dense, healthy cabbage varieties for culinary excellence",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810491-94d8265c0f77?w=400&h=400&fit=crop",
      title: "Fresh Peppers",
      description: "Colorful bell peppers bursting with flavor and quality",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810964-d0f5b3d2d0b8?w=400&h=400&fit=crop",
      title: "Premium Potatoes",
      description: "High-quality potatoes suitable for diverse culinary needs",
    },
  ];

  const latestProducts = [
    {
      image: "https://images.unsplash.com/photo-1599599810330-c5f6f11e8b42?w=400&h=400&fit=crop",
      title: "Organic Garlic",
      description: "Fresh, pungent garlic with natural flavor and aroma",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810200-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Sweet Onions",
      description: "Golden sweet onions perfect for cooking and salads",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810100-c5f5f5f5f5f5?w=400&h=400&fit=crop",
      title: "Organic Radishes",
      description: "Crispy red radishes with peppery flavor",
    },
    {
      image: "https://images.unsplash.com/photo-1599599809900-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Fresh Beets",
      description: "Rich, earthy beets packed with nutrients",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810800-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Green Beans",
      description: "Tender, fresh green beans ideal for vegetables",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810700-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Premium Asparagus",
      description: "Fresh asparagus spears with delicate flavor",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810600-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Fresh Cauliflower",
      description: "White, fresh cauliflower for healthy cooking",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810500-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Organic Kale",
      description: "Nutrient-dense kale for salads and smoothies",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810400-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Fresh Zucchini",
      description: "Tender zucchini perfect for grilling and cooking",
    },
    {
      image: "https://images.unsplash.com/photo-1599599810300-d11c1b5b5b5b?w=400&h=400&fit=crop",
      title: "Organic Eggplant",
      description: "Purple eggplants with smooth skin and mild flavor",
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
      <section className="pt-16 pb-24 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
                  <span className="text-sm font-semibold text-secondary">
                    Trusted by Global Brands
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                  Ship Your World with{" "}
                  <span className="text-primary">Confidence</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                  Industry-leading shipping and logistics solutions with
                  real-time tracking, competitive pricing, and 24/7 support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      "Hi! I would like to get a quote for my shipping needs.",
                    )
                  }
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      "Hi! I would like to watch a demo of your shipping platform.",
                    )
                  }
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
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

            {/* Right Visual - Rotating Carousel */}
            <div className="relative h-64 sm:h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-border h-full">
                <div className="relative w-full h-full">
                  {carouselImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        idx === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Cargo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {carouselImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-white w-6"
                            : "bg-white/50"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section id="trending-products" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Trending Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium fresh fruits and vegetables sourced from the finest farms
              worldwide. Experience quality you can trust
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedProductTab("featured")}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedProductTab === "featured"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border border-border hover:border-primary"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setSelectedProductTab("latest")}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedProductTab === "latest"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border border-border hover:border-primary"
              }`}
            >
              Latest
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {(selectedProductTab === "featured" ? featuredProducts : latestProducts).map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-32 sm:h-40 md:h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-6">
                  <h3 className="text-sm sm:text-lg font-heading font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Order now</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AIANE WORLD IMPEX Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Why Choose AIANE WORLD IMPEX
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets unmatched customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Get competitive rates and start your first shipment today. Join
            thousands of satisfied customers worldwide.
          </p>
          <button
            onClick={() =>
              handleWhatsAppClick(
                "Hi! I'm ready to get started with AIANE WORLD IMPEX for my shipping needs.",
              )
            }
            className="px-10 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2 group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              Certificates
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-border">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Expert Support
              </h3>
              <p className="text-muted-foreground mb-6">
                Dedicated account managers available 24/7 to assist with your
                shipping needs
              </p>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    "Hi! I need expert support for my shipping needs.",
                  )
                }
                className="text-primary font-semibold hover:underline"
              >
                Contact Support →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-border">
              <Award className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
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

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-border">
              <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                About AIANE WORLD IMPEX
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                With over 15 years of experience in international logistics and
                shipping, AIANE WORLD IMPEX has established itself as a trusted
                partner for businesses worldwide. We specialize in providing
                comprehensive shipping solutions tailored to meet the unique
                needs of each client.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to excellence, innovation, and customer
                satisfaction has made us a leader in the logistics industry. We
                invest in cutting-edge technology and maintain a network of
                strategic partnerships across 150+ countries.
              </p>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    "Hi! I'd like to know more about AIANE WORLD IMPEX.",
                  )
                }
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 h-64 sm:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-heading font-bold text-primary mb-4">
                  15+
                </div>
                <p className="text-xl font-semibold text-foreground">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Contact us today for
              any inquiries about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Phone
              </h3>
              <a
                href="tel:+917670959512"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 7670959512
              </a>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Email
              </h3>
              <a
                href="mailto:info@ariane-impex.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@ariane-impex.com
              </a>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                WhatsApp
              </h3>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    "Hi! I'd like to get in touch with AIANE WORLD IMPEX.",
                  )
                }
                className="text-primary hover:underline font-semibold transition-colors"
              >
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
