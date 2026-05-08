import React, { useState, useEffect } from "react";
import { ScrollTop } from "primereact/scrolltop";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Wifi,
  Cctv,
  MapPin,
  Zap,
  Shield,
  Volume2,
  BarChart3,
  Users,
  Award,
  Leaf,
  Star,
  Building2,
  Wrench,
  ScanFace,
  ShieldCheck,
  TrendingUp,
  MonitorCheck,
  BookKey,
  Smile,
} from "lucide-react";
import { GrAnalytics } from "react-icons/gr";
import { GiSteeringWheel } from "react-icons/gi";
import gpstracking from "../images/smartbus/gpstracking.jpg";
import aicctv from "../images/smartbus/aicctv.jpg";
import drivermonitoring from "../images/smartbus/drivermonitoring.jpg";

import led from "../images/smartbus/led.jpg";

import analytics from "../images/smartbus/analytics.jpg";

import smartticketing from "../images/smartbus/smartticketing.jpg";

import busbanner from "../images/smartbus/busbanner.jpg";
import BusFeatureInteractive from "./clickable";
import Intelligent from "../images/smartbus/Intelligent Public Transport.jpg";
import Big from "../images/smartbus/Big Data & Analytics.jpg";

import whychoose from "../images/smartbus/whychoose.jpg";

function Smartbus() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeIndex, setActiveIndex] = useState(0);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Cctv className="w-8 h-8" />,
      title: "AI CCTV Surveillance & Safety Cameras",
      description:
        "Advanced surveillance with facial recognition and threat detection for enhanced passenger safety.",
      des: [
        "Entry Camera – Captures clear footage of boarding and alighting for safety and demographic insights.",
        "Front-Facing & Collision Cameras – Detect hazards, monitor road conditions, and support accident investigations.",
        "Driver Monitoring Camera – AI-powered fatigue and distraction detection in real time.",
        // "Cabin Camera – Continuous in-bus surveillance for safety, dispute resolution, and vandalism prevention."
      ],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GPS-Enabled Fleet Tracking",
      des: [
        "Live location updates for passengers and control centres.",
        "Geofencing for safety, emergency response, and route compliance.",
        "Predictive maintenance through usage data.",
      ],
      description:
        "Real-time location monitoring and route optimization for efficient fleet management.",
    },

    {
      icon: <MonitorCheck ap className="w-8 h-8" />,
      title: "LED Passenger Information Systems",
      des: [
        "Internal Displays – Next-stop info, route details, safety messages.",
        "External Displays – High-visibility route & destination displays in multiple languages.",
        "Emergency Broadcast Capability – Instant fleet-wide announcements.",
      ],
      description:
        "Dynamic digital displays providing real-time updates on routes, schedules, and announcements.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Onboard Wi-Fi Connectivity",
      des: [
        "Free passenger internet access.",
        "Supports digital ticketing, infotainment, and operational apps.",
      ],
    },
    {
      icon: <BookKey className="w-8 h-8" />,
      title: "Public Address (PA) System",
      des: [
        "Clear, real-time announcements for stops, diversions, and emergencies.",
        "Integrated with the Intelligent Command & Control Centre (ICCC).",
      ],
      description:
        "Automated announcements with multi-language support and emergency alerts.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Safety Systems",
      des: [
        "Breath Analyser – Prevents ignition if driver is under influence.",
        "Foam Fire Suppression – Automated fire detection and extinguishing in critical compartments.",
      ],
      description:
        "Comprehensive safety protocols including emergency braking and collision avoidance.",
    },

    //  {
    //   icon: <GrAnalytics className="w-8 h-8" />,
    //   title: "Advanced Safety Systems",
    //   des:[
    //     "Analyse passenger patterns and route performance.",
    //     "Optimise schedules, reduce costs, and enhance safety strategies."
    //   ],
    //   description: "Comprehensive safety protocols including emergency braking and collision avoidance."
    // }
  ];

  const solutions = [
    {
      text: "GPS Tracking for live route optimisation",
      image: gpstracking,
    },
    {
      text: "AI CCTV Surveillance for real-time security",
      image: aicctv,
    },
    {
      text: "Driver Monitoring Systems to detect fatigue and distraction",
      image: drivermonitoring,
    },
    {
      text: "LED Passenger Information Systems for route and safety updates",
      image: led,
    },
    {
      text: "Smart Ticketing for seamless, cashless travel",
      image: smartticketing,
    },
    {
      text: "Big Data Analytics for informed decision-making",
      image: analytics,
    },
  ];

  const innovations = [
    {
      title: "AI-Based Driver Coaching",
      description:
        "Ensures safe, efficient driving through real-time feedback and performance insights.",
      icon: GiSteeringWheel,
    },
    {
      title: "Facial Recognition Boarding",
      description:
        "Enables secure, seamless passenger entry with biometric authentication.",
      icon: ScanFace,
    },
    {
      title: "Predictive Maintenance",
      description:
        "Uses data analytics to prevent unplanned downtime and reduce maintenance costs.",
      icon: Wrench,
    },
    {
      title: "Integration with Smart Cities",
      description:
        "Connects with urban infrastructure for improved route efficiency and data sharing.",
      icon: Building2,
    },
    {
      title: "Rural Fleet Expansion",
      description:
        "Extends safety and technology benefits to underserved and rural areas.",
      icon: MapPin,
    },
  ];

  const benefits = [
    {
      title: "Enhanced Passenger Safety & Trust",
      description:
        "Advanced safety systems, real-time monitoring, and AI surveillance to protect every journey.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Operational Efficiency & Cost Savings",
      description:
        "Optimized routes, predictive maintenance, and reduced operational costs.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Seamless Passenger Experience",
      description:
        "Comfortable travel with Wi-Fi, smart ticketing, and real-time updates.",
      icon: <Smile className="w-8 h-8" />,
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Big data analytics to improve routes, schedules, and passenger satisfaction.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Smart City Readiness",
      description:
        "Fully compatible with smart city infrastructure for integrated urban mobility.",
      icon: <Building2 className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">SmartBus</h1>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {['Home', 'Overview', 'Solutions', 'Features', 'Analytics', 'Future', 'Why Choose'].map((item) => {
                    const id = item.toLowerCase().replace(' ', '-');
                    return (
                      <button
                        key={item}
                        onClick={() => scrollToSection(id === 'home' ? 'home' : id)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          activeSection === id
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg text-gray-700 dark:text-gray-300"
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Home', 'Overview', 'Solutions', 'Features', 'Analytics', 'Future', 'Why Choose'].map((item) => {
                  const id = item.toLowerCase().replace(' ', '-');
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(id === 'home' ? 'home' : id)}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </nav> */}

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={busbanner}
            alt="Smart city with modern buses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Bus Solution
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-3 ">
                Revolutionising Public Transport
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl ">
              As cities grow and urban mobility challenges intensify, public
              transport must evolve to be smarter, safer, and more efficient
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
                {/* <span className="text-blue-600 dark:text-blue-400">    Overview</span> */}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Smart Bus Solutions represent the next generation of intelligent
                public transport systems, reducing dependency on private
                vehicles, easing congestion, enhancing passenger safety, and
                improving operational productivity.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                Every day, buses move millions of passengers across cities and
                towns worldwide — smart technology ensures they do so more
                safely, sustainably, and efficiently.{" "}
              </p>
              {/* <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">45%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Fuel Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">60%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Faster Routes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">85%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">User Satisfaction</div>
                  </div>
                </div> */}
            </div>
            <div className="relative">
              {/* <img
                src={Intelligent}
                alt="Modern city buses with AI technology"
                className="rounded-2xl shadow-2xl w-full"
              /> */}
              <img
                src="https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(2)%20(1).jpg"
                alt="Modern city buses with AI technology"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <BusFeatureInteractive />

      {/* Smart Transit Bus Solution */}
      <section id="solutions" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Smart Transit Bus Solution
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A Smart Transit Bus Solution is an IoT-enabled, AI-powered
              transportation ecosystem designed to optimise safety, efficiency,
              and passenger experience.{" "}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left side: Dynamic Image + description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={solutions[activeIndex].image}
                  alt={solutions[activeIndex].text}
                  className="w-full h-auto object-cover transform transition duration-500 ease-in-out"
                />
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                These innovations deliver{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  higher route efficiency
                </span>
                , improved passenger satisfaction, and greater operational
                control.
              </p>
            </div>

            {/* Right side: Feature list */}
            <div className="space-y-4">
              {solutions.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex items-start gap-4 p-5 rounded-xl cursor-pointer transition duration-300 group ${
                    activeIndex === index
                      ? "bg-blue-100 dark:bg-blue-900 shadow-lg"
                      : "bg-gray-50 dark:bg-gray-800 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition ${
                      activeIndex === index
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p
                    className={`leading-snug ${
                      activeIndex === index
                        ? "text-blue-800 dark:text-blue-200 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Features */}
      <section id="features" className="py-20 mt-2 bg-gray-50 dark:bg-gray-800">
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
                <div className=" flex gap-3">
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {feature.des.map((a, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-md transition"
                    >
                      {/* Bullet icon */}
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-bold">
                        ✓
                      </span>

                      {/* Text */}
                      <span className="text-gray-700 dark:text-gray-300 leading-snug">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
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
                Analyse passenger patterns and route performance.{" "}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Optimise schedules, reduce costs, and enhance safety
                strategies.{" "}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    transit data analytics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    AI-powered fleet management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    predictive maintenance for buses
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={Big}
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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Future-Ready Smart Bus Innovations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Smart city integration, AI-powered safety, and advanced passenger
              solutions — paving the way for the next generation of public
              transport.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {innovation.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Keywords */}
          {/* <p className="mt-12 text-center text-sm italic text-gray-500 dark:text-gray-400">
          Keywords: smart city bus integration, AI in public transport,
          future-ready bus technology.
        </p> */}
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section id="why-choose" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Delivering unmatched safety, efficiency, and comfort — redefining
              the public transportation experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src={whychoose}
                alt="Happy passengers enjoying safe and comfortable bus travel"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition"
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
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">SmartBus</h3>
                <p className="text-gray-400 mb-4">
                  Revolutionising public transport with cutting-edge technology and sustainable solutions for smarter cities.
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
        </footer> */}
      <div>
        <ScrollTop
          target="window"
          threshold={100}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
          icon={
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default Smartbus;
