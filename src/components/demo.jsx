import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Wifi,
  Camera,
  MapPin,
  Zap,
  Shield,
  Volume2,
  BarChart3,
  Users,
  Award,
  Leaf,
  Star,
} from "lucide-react";

function Smartbus() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "overview",
        "solutions",
        "features",
        "analytics",
        "future",
        "why-choose",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (/** @type {string} */ sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "AI-Powered CCTV",
      description:
        "Advanced surveillance with facial recognition and threat detection for enhanced passenger safety.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GPS Tracking",
      description:
        "Real-time location monitoring and route optimization for efficient fleet management.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "LED Info Systems",
      description:
        "Dynamic digital displays providing real-time updates on routes, schedules, and announcements.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Wi-Fi Connectivity",
      description:
        "High-speed internet access for passengers and IoT device connectivity.",
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Smart PA System",
      description:
        "Automated announcements with multi-language support and emergency alerts.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Systems",
      description:
        "Comprehensive safety protocols including emergency braking and collision avoidance.",
    },
  ];

  const innovations = [
    {
      title: "AI Driver Assistance",
      description:
        "Intelligent driving support with predictive analytics and autonomous capabilities.",
    },
    {
      title: "Facial Recognition Boarding",
      description:
        "Contactless boarding system using biometric authentication for seamless passenger experience.",
    },
    {
      title: "Smart City Integration",
      description:
        "Seamless connectivity with urban infrastructure for optimized traffic flow and energy management.",
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Happy Passengers",
      description: "Enhanced comfort and convenience",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe Travel",
      description: "Advanced security and monitoring",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Reduced carbon footprint",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award-Winning",
      description: "Industry recognition and excellence",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  SmartBus
                </h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  "Home",
                  "Overview",
                  "Solutions",
                  "Features",
                  "Analytics",
                  "Future",
                  "Why Choose",
                ].map((item) => {
                  const id = item.toLowerCase().replace(" ", "-");
                  return (
                    <button
                      key={item}
                      onClick={() =>
                        scrollToSection(id === "home" ? "home" : id)
                      }
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        activeSection === id
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                "Home",
                "Overview",
                "Solutions",
                "Features",
                "Analytics",
                "Future",
                "Why Choose",
              ].map((item) => {
                const id = item.toLowerCase().replace(" ", "-");
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id === "home" ? "home" : id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg"
            alt="Smart city with modern buses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Bus Solution
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Revolutionising Public Transport
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transforming urban mobility with cutting-edge technology,
              AI-powered systems, and sustainable solutions for the future of
              public transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("overview")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Solutions
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-300 border border-white/30"
              >
                View Features
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Intelligent Public Transport
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  Ecosystem
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our Smart Bus Solution integrates advanced AI technology, IoT
                sensors, and real-time data analytics to create a seamless,
                efficient, and sustainable public transportation network.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    99%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Uptime Reliability
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                    45%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Fuel Savings
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    60%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Faster Routes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    85%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    User Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg"
                alt="Modern city buses with AI technology"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Transit Bus Solution */}
      <section id="solutions" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Smart Transit Bus Solution
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of public transportation with our
              comprehensive smart bus interior featuring GPS navigation,
              advanced CCTV systems, and seamless Wi-Fi connectivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img
                src="https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg"
                alt="Smart bus interior with GPS screens and modern amenities"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">GPS Navigation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time route optimization and passenger information
                  displays.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Camera className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">CCTV Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced surveillance with AI-powered monitoring and alerts.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Wifi className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Wi-Fi Hotspot</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  High-speed internet connectivity for all passengers onboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Features */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Technology Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the advanced technologies that power our smart bus
              solution, from AI-driven systems to cutting-edge safety protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Data & Analytics */}
      <section id="analytics" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Big Data &
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  Analytics
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Harness the power of real-time data analytics to optimize
                routes, predict passenger flow, and enhance operational
                efficiency with our comprehensive dashboard.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Route Analytics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Passenger Flow
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Live Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Energy Usage
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg"
                alt="Analytics dashboard with graphs and data visualization"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Ready Innovations */}
      <section
        id="future"
        className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Future-Ready Innovations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pioneering the next generation of public transportation with AI
              driver assistance, biometric boarding, and seamless smart city
              integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-white/20 dark:border-gray-700/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {innovation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Smart Bus Solution?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of comfort, safety, and
              sustainability with our award-winning public transportation
              system.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg"
                alt="Happy passengers enjoying safe and comfortable bus travel"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The smart bus system has completely transformed my daily
                commute. It's reliable, comfortable, and eco-friendly."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                - Sarah M., Daily Commuter
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Outstanding technology integration. The Wi-Fi and real-time
                updates make travel so much more convenient."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                - John D., Business Professional
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Safety and security features give me peace of mind. This is the
                future of public transportation."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                - Maria L., Student
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                SmartBus
              </h3>
              <p className="text-gray-400 mb-4">
                Revolutionising public transport with cutting-edge technology
                and sustainable solutions for smarter cities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Smart Transit</li>
                <li>AI Technology</li>
                <li>Data Analytics</li>
                <li>Safety Systems</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SmartBus Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Smartbus;
