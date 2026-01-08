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
  const [selectedProductTab, setSelectedProductTab] = useState<
    "featured" | "latest"
  >("featured");

  const carouselImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F94b512fe09cf48f9aeed9602708a63b2?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fb62ad88e779446729fedaf335494f215?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fc1c3bdb93d91498ca8a1040509a23102?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F07cb69003d174797bb745aa3de1d4e35?format=webp&width=800",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "917075047050";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const featuredProducts = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F6b55abed6f6a481d950cd2172e91b318?format=webp&width=800",
      title: "Mangoes",
      description:
        "Super Farm Fresh Chapai / Banganapalli Mango from India to Kuwait / Malaysia / Iraq\nMin.Order: 1000 kgs",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fc1c3bdb93d91498ca8a1040509a23102?format=webp&width=800",
      title: "Basmati Rice",
      description:
        "Natural Purity Long Grain Indian 1121 White Sella Basmati Rice Distributors in India to Mamutik Penang\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F7ed63a5689f24a8b8805ec538d9a80a0?format=webp&width=800",
      title: "Sona Masoori Rice",
      description:
        "Sona Masoori Rice Suppliers / Exporters / Manufactures / Dealers In India/Tamilnadu / USFDA Approved – A Seal of Trust\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F997c47ba26094b0bad075c53809d9191?format=webp&width=800",
      title: "Idly Rice",
      description:
        "Idli Rice Exporter in India To Unites States/ United Kingdom/ Singapore / Safe and USFDA Certified\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fa185ce30887c40e8a1f916195a3e375c?format=webp&width=800",
      title: "Onions",
      description:
        "Stylish Baby onion /Tasty Rose small onion Exporters / Suppliers to Maldives / Norway / Palau from India\nMin.Order: 1000 Kg",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F775556066a6e455182e0d3321870216c?format=webp&width=800",
      title: "Grain Rice",
      description:
        "Round Grain Rice Supplier In India / USFDA-Approved Excellence\nMin.Order: 23 Metric Ton",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fc9c82924c19443a59b5f6e65a345a29e?format=webp&width=800",
      title: "Short Grain Rice",
      description: "Short grain rice\nMin.Order: 26 MT",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F09d4166b824c471d8ee17765acccd997?format=webp&width=800",
      title: "White Sella Rice",
      description:
        "One of the best hallmarks of high-quality1121 White Sella Rice Exports from India To Oman/ Kuwait/ Ireland/ New Zealand/ Ghana/ Bahrain/ Saudi Arabia\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fb62ad88e779446729fedaf335494f215?format=webp&width=800",
      title: "Turmeric Powder",
      description:
        "Turmeric Powder Suppliers/Exporters In India / USFDA International Certification\nMin.Order: 500kgs",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fb9d6833fbe014bc9b3f72c749266a0ec?format=webp&width=800",
      title: "Jaggery Cubes",
      description:
        "Best Long Lasting Sweetness of Gur / Jaggery Cubes Exporters / Manufactures / Traders in India\nMin.Order: 500kgs",
    },
  ];

  const latestProducts = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F6b55abed6f6a481d950cd2172e91b318?format=webp&width=800",
      title: "Mangoes",
      description:
        "Super Farm Fresh Chapai / Banganapalli Mango from India to Kuwait / Malaysia / Iraq\nMin.Order: 1000 kgs",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fc1c3bdb93d91498ca8a1040509a23102?format=webp&width=800",
      title: "Basmati Rice",
      description:
        "Natural Purity Long Grain Indian 1121 White Sella Basmati Rice Distributors in India to Mamutik Penang\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F7ed63a5689f24a8b8805ec538d9a80a0?format=webp&width=800",
      title: "Sona Masoori Rice",
      description:
        "Sona Masoori Rice Suppliers / Exporters / Manufactures / Dealers In India/Tamilnadu / USFDA Approved – A Seal of Trust\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F997c47ba26094b0bad075c53809d9191?format=webp&width=800",
      title: "Idly Rice",
      description:
        "Idli Rice Exporter in India To Unites States/ United Kingdom/ Singapore / Safe and USFDA Certified\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fa185ce30887c40e8a1f916195a3e375c?format=webp&width=800",
      title: "Onions",
      description:
        "Stylish Baby onion /Tasty Rose small onion Exporters / Suppliers to Maldives / Norway / Palau from India\nMin.Order: 1000 Kg",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F775556066a6e455182e0d3321870216c?format=webp&width=800",
      title: "Grain Rice",
      description:
        "Round Grain Rice Supplier In India / USFDA-Approved Excellence\nMin.Order: 23 Metric Ton",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fc9c82924c19443a59b5f6e65a345a29e?format=webp&width=800",
      title: "Short Grain Rice",
      description: "Short grain rice\nMin.Order: 26 MT",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F09d4166b824c471d8ee17765acccd997?format=webp&width=800",
      title: "White Sella Rice",
      description:
        "One of the best hallmarks of high-quality1121 White Sella Rice Exports from India To Oman/ Kuwait/ Ireland/ New Zealand/ Ghana/ Bahrain/ Saudi Arabia\nMin.Order: 1x20ft Container (22 to 26 MTS)",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fb62ad88e779446729fedaf335494f215?format=webp&width=800",
      title: "Turmeric Powder",
      description:
        "Turmeric Powder Suppliers/Exporters In India / USFDA International Certification\nMin.Order: 500kgs",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fb9d6833fbe014bc9b3f72c749266a0ec?format=webp&width=800",
      title: "Jaggery Cubes",
      description:
        "Best Long Lasting Sweetness of Gur / Jaggery Cubes Exporters / Manufactures / Traders in India\nMin.Order: 500kgs",
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

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      "Hi! I would like to get a quote for my shipping needs.",
                    )
                  }
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      "Hi! I would like to watch a demo of your shipping platform.",
                    )
                  }
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors text-sm sm:text-base"
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
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section
        id="trending-products"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
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

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={() => setSelectedProductTab("featured")}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors ${
                selectedProductTab === "featured"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border border-border hover:border-primary"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setSelectedProductTab("latest")}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors ${
                selectedProductTab === "latest"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border border-border hover:border-primary"
              }`}
            >
              Latest
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {(selectedProductTab === "featured"
              ? featuredProducts
              : latestProducts
            ).map((product, i) => (
              <div
                key={i}
                onClick={() =>
                  handleWhatsAppClick(
                    `Hi! I'm interested in ordering ${product.title}.\n\nDetails:\n${product.description}`,
                  )
                }
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
      <section
        id="about"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                About AIANE WORLD IMPEX
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4">
                With over 15 years of experience in international logistics and
                shipping, AIANE WORLD IMPEX has established itself as a trusted
                partner for businesses worldwide. We specialize in providing
                comprehensive shipping solutions tailored to meet the unique
                needs of each client.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
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
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Contact us today for
              any inquiries about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 text-center">
              <Phone className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                Phone
              </h3>
              <a
                href="tel:+917075047050"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 7075047050
              </a>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 text-center">
              <Mail className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                Email
              </h3>
              <a
                href="mailto:info@ariane-impex.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@ariane-impex.com
              </a>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 text-center">
              <MapPin className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
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
